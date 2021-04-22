<template>
  <div class="doctor-patient-chatbox">
    <div class="top-content">
      <img class="user-icon" :src="profile.avatar" :alt="profile.avatar" />
      <div class="chatbox-undo" @click="back">
        <v-icon> mdi-arrow-left </v-icon>
      </div>
      <div class="doctors-upper-name">
        <div class="doctor-name">{{ profile.fname + ' ' + profile.lname }}</div>
        <div v-if="profile.active_status" class="active-user-sign">
          <span id="active-sign">●</span>&nbsp;active
        </div>
      </div>
      <div class="exit-chatbox">
        <nuxt-link to="/drugs/add-drugs">
          <v-icon large> mdi-plus </v-icon>
        </nuxt-link>
      </div>
    </div>
    <div class="m-body app-scroll" style="opacity: 1">
      <div id="messages" class="messages">
        <div
          v-for="message in messages"
          :key="message.id"
          class="message-card"
          :class="{ 'mc-sender': message.viewType === 'sender' }"
        >
          <p>
            <span class="message-main-content">{{ message.message }}</span>
          </p>
          <sub
            :title="message.fullTime"
            :class="{ 'message-time': message.viewType === 'sender' }"
          >
            <svg
              v-if="message.seen && message.from_id == $auth.user.id"
              class="seen"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="check-double"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z"
              ></path>
            </svg>
            <svg
              v-if="!message.seen && message.viewType === 'sender'"
              class="seen"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="check"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
              ></path>
            </svg>
            {{ message.time }}
          </sub>
        </div>
      </div>
      <div class="typing-indicator">
        <div class="message-card typing">
          <p>
            <span class="typing-dots">
              <span class="dot dot-1"></span>
              <span class="dot dot-2"></span>
              <span class="dot dot-3"></span>
            </span>
          </p>
        </div>
      </div>
      <div class="messenger-sendCard" style="display: block">
        <div v-if="attachment" class="attachment-preview">
          <svg
            class="svg-inline--fa fa-times fa-w-11 cancel"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="times"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 352 512"
          >
            <path
              fill="currentColor"
              d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
            ></path>
          </svg>
          <div
            class="image-file chat-image"
            :style="{
              backgroundImage: 'url(' + attachment.thumbnails + ')',
            }"
          ></div>
          <p>
            <svg
              class="svg-inline--fa fa-file-image fa-w-12"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="file-image"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M384 121.941V128H256V0h6.059a24 24 0 0 1 16.97 7.029l97.941 97.941a24.002 24.002 0 0 1 7.03 16.971zM248 160c-13.2 0-24-10.8-24-24V0H24C10.745 0 0 10.745 0 24v464c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24V160H248zm-135.455 16c26.51 0 48 21.49 48 48s-21.49 48-48 48-48-21.49-48-48 21.491-48 48-48zm208 240h-256l.485-48.485L104.545 328c4.686-4.686 11.799-4.201 16.485.485L160.545 368 264.06 264.485c4.686-4.686 12.284-4.686 16.971 0L320.545 304v112z"
              ></path>
            </svg>
            {{ attachment.name }}
          </p>
        </div>
        <form id="message-form" method="post">
          <label style="display: flex; align-items: center; padding: 0 5px"
            ><img width="23px" src="~/assets/icons/paper-clip.svg" />
            <input
              type="file"
              class="upload-attachment"
              name="file"
              accept="image/*, .txt, .rar, .zip"
              @change="fileSelected"
            />
          </label>
          <textarea
            v-model="body.message"
            name="message"
            class="m-send app-scroll"
            placeholder="Type a message.."
            style="overflow: hidden; overflow-wrap: break-word; height: 42px"
            control-id="ControlID-2"
          ></textarea>
          <button @click.prevent="sendMessage">
            <div style="display: flex; align-items: center; padding: 0 10px">
              <img width="23px" src="~/assets/icons/paper-plane.svg" />
            </div>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script src="./chatbox.js"></script>

<style src="./chatbox.scss" lang="scss" scoped></style>
