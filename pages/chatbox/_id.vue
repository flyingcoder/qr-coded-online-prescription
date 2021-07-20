<template>
  <div class="doctor-patient-chatbox">
    <div class="top-content">
      <img class="user-icon" :src="profile.avatar" :alt="profile.fname" />
      <div class="chatbox-undo" @click="back">
        <v-icon> mdi-arrow-left </v-icon>
      </div>
      <div class="doctors-upper-name">
        <div class="doctor-name">{{ profile.fname + ' ' + profile.lname }}</div>
        <div v-if="profile.active_status" class="active-user-sign">
          <span id="active-sign">●</span>&nbsp;active
        </div>
      </div>
      <div v-if="$auth.user.role == 'doctor'" class="add-prescription">
        <nuxt-link :to="prescription_link">
          <v-icon large> mdi-plus </v-icon>
        </nuxt-link>
      </div>
    </div>
    <div ref="center" class="center-content" style="opacity: 1">
      <div id="messages" class="messages">
        <SwiperMessages :mock-swipe-list="messages"></SwiperMessages>
      </div>
      <div v-show="isTyping" class="typing-indicator">
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
          @keydown="meIsTyping"
        ></textarea>
        <v-btn
          :loading="loading"
          :disabled="loading"
          @click.prevent="sendMessage"
        >
          <div style="display: flex; align-items: center; padding: 0 10px">
            <img width="23px" src="~/assets/icons/paper-plane.svg" />
          </div>
        </v-btn>
      </form>
    </div>
  </div>
</template>

<script src="./chatbox.js"></script>

<style src="./chatbox.scss" lang="scss" scoped></style>
