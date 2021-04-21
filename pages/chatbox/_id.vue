<template>
  <div class="doctor-patient-chatbox">
    <div class="top-content padding-content">
      <img class="user-icon" :src="profile.avatar" :alt="profile.avatar" />
      <div class="doctors-upper-name">
        <div class="doctor-name">{{ profile.fname + ' ' + profile.lname }}</div>
        <div v-if="profile.active_status" class="active-user-sign">
          <span id="active-sign">●</span>&nbsp;active
        </div>
      </div>
      <div class="exit-chatbox">
        <nuxt-link to="/dashboard">
          <v-icon large> mdi-close </v-icon>
        </nuxt-link>
      </div>
    </div>
    <div class="m-body app-scroll" style="opacity: 1">
      <div class="messages">
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
