<template>
  <swipe-list
    ref="list"
    :disabled="!enabled"
    :items="mockSwipeList"
    item-key="id"
  >
    <template #default="{ item }">
      <div
        class="message-card"
        :class="{ 'mc-sender': item.viewType === 'sender' }"
        @touchstart="touchStart(item, $event)"
      >
        <div
          v-if="item.attachment[0] != null"
          class="image-file chat-image"
          style="width: 250px; height: 150px"
          :style="{
            backgroundImage:
              'url(' +
              $config.baseURL +
              '/storage/attachments/' +
              item.attachment[0],
          }"
        ></div>
        <p v-if="item.message">
          <!-- eslint-disable -->
          <span class="message-main-content" v-html="item.message"></span>
          <!-- eslint-enable -->
        </p>
        <sub
          :title="item.fullTime"
          :class="{ 'message-time': item.viewType === 'sender' }"
        >
          <svg
            v-if="item.seen && item.from_id == $auth.user.id"
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
            v-if="!item.seen && item.viewType === 'sender'"
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
          {{ item.time }}
        </sub>
      </div>
    </template>
    <template #left=""> </template>
    <template #right=""> </template>
    <template #empty> </template>
  </swipe-list>
</template>

<script>
import { SwipeList } from 'vue-swipe-actions'

export default {
  components: {
    SwipeList,
  },
  props: {
    mockSwipeList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      enabled: true,
    }
  },
  methods: {
    touchStart(item, touchEvent) {
      if (touchEvent.changedTouches.length !== 1) {
        // We only care if one finger is used
        return
      }
      const posXStart = touchEvent.changedTouches[0].clientX
      addEventListener(
        'touchend',
        (touchEvent) => this.touchEnd(item, touchEvent, posXStart),
        { once: true }
      )
    },
    touchEnd(item, touchEvent, posXStart) {
      if (touchEvent.changedTouches.length !== 1) {
        // We only care if one finger is used
        return
      }
      const posXEnd = touchEvent.changedTouches[0].clientX
      const posChat = Math.abs(posXEnd)
      const dest = item.destination
      if (posChat < 100) {
        if (posXStart < posXEnd) {
          // swipe right
          // this.$router.push('/chatbox/' + item.user_id)
        } else if (posXStart > posXEnd) {
          // swipe left
          if (dest !== null) this.$router.push(dest)
        }
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.app-scroll::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  border-radius: 4px;
  background: transparent;
  transition: all 0.3s ease;
}
a.chat-link {
  color: #214c79 !important;
}
.app-scroll-thin::-webkit-scrollbar {
  width: 1px;
  height: 1px;
  border-radius: 4px;
  transition: all 0.3s ease;
}
.app-scroll::-webkit-scrollbar-thumb,
.app-scroll-thin::-webkit-scrollbar-thumb {
  border-radius: 4px;
}
.m-send {
  font-size: 14px;
  width: 100%;
  border: none;
  padding: 10px 0px;
  outline: none;
  resize: none;
  background: transparent;
  font-family: sans-serif;
  height: 36px;
  max-height: 200px;
}
#message-form > button {
  height: 40px;
  background: none !important;
  border: none !important;
  box-shadow: none !important;
}
.messenger-sendCard {
  display: none;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
.messenger-sendCard form {
  width: 100%;
  display: inline-flex;
  margin: 0;
}
.messenger-sendCard input[type='file'] {
  display: none;
}
svg.svg-inline--fa.fa-file-image.fa-w-12 {
  width: 10px;
}
.attachment-preview {
  background: white;
}
.image-file {
  cursor: pointer;
  width: 140px;
  height: 70px;
  border-radius: 4px;
  background-color: #f7f7f7;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.messenger-sendCard button,
.messenger-sendCard button:active,
.messenger-sendCard button:focus {
  border: none;
  outline: none;
  background: none;
  padding: 0;
  margin: 0;
}
.messenger-sendCard label {
  margin: 0;
}
.messenger-sendCard svg {
  margin: 9px 10px;
  color: #bdcbd6;
  cursor: pointer;
  font-size: 21px;
  transition: transform 0.15s;
}

.messenger-sendCard svg:active {
  transform: scale(0.9);
}
.dot {
  width: 8px;
  height: 8px;
  background: #bcc1c6;
  display: inline-block;
  border-radius: 50%;
  right: 0px;
  bottom: 0px;
  position: relative;
  animation: jump 1s infinite;
}
.typing-dots .dot-1 {
  -webkit-animation-delay: 100ms;
  animation-delay: 100ms;
}
.typing-dots .dot-2 {
  -webkit-animation-delay: 200ms;
  animation-delay: 200ms;
}

.typing-dots .dot-3 {
  -webkit-animation-delay: 300ms;
  animation-delay: 300ms;
}
.message-card {
  display: block;
  margin: 2px 15px;
  width: calc(100% - 30px);
}
.message-card div {
  margin-top: 0px;
}
svg.seen {
  width: 11px;
}
.message-card p {
  margin: 5px 0 0 0;
  padding: 6px 15px;
  background-color: #eee;
  padding-bottom: 5px;
  max-width: 80%;
  border-radius: 20px;
  word-break: break-word;
}
.attachment-preview {
  position: relative;
  padding: 10px;
}
.attachment-preview > p {
  margin: 0;
  font-weight: 600;
  padding: 0px;
  padding-top: 10px;
}
.attachment-preview > p > svg {
  font-size: 16px;
  margin: 0;
  margin-bottom: -1px;
  color: #737373;
}
.attachment-preview svg:active {
  transform: none;
}
.attachment-preview > svg:first-child {
  position: absolute;
  background: rgba(0, 0, 0, 0.33);
  width: 20px;
  height: 20px;
  padding: 3px;
  border-radius: 100%;
  font-size: 16px;
  margin: 0;
  top: 10px;
  color: #fff;
}
.message-card p sub {
  display: inline-block;
  font-size: 11px;
}
.message-card.mc-sender p {
  background: #30e1d0;
  border-radius: 20px;
  color: #000000;
  width: 75%;
  padding: 10px;
}
.message-hint {
  text-align: center;
}
.message-card p sub:before {
  content: '';
  background: transparent;
  width: 10px;
  height: 10px;
  display: inline-block;
}
.typing-indicator {
  display: none;
}
.messages {
  padding: 5px 0px;
}
.app-scroll::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  border-radius: 4px;
  background: transparent;
  transition: all 0.3s ease;
}
.app-scroll-thin::-webkit-scrollbar {
  width: 1px;
  height: 1px;
  border-radius: 4px;
  transition: all 0.3s ease;
}
.app-scroll::-webkit-scrollbar-thumb,
.app-scroll-thin::-webkit-scrollbar-thumb {
  border-radius: 4px;
}
.m-body {
  padding-top: 15px;
  height: calc(100% - 90px);
  overflow-x: hidden;
  overflow-y: auto;
  margin-top: 126px;
}

.top-content {
  background: #1ac6b6;
  padding: 1% 9%;
  .doctor-name {
    font-size: 16px;
    font-weight: 500;
    color: white !important;
  }

  .active-user-sign {
    font-size: 14px;
    margin-top: -5px;
    color: white !important;
  }
}
.chat-content {
  position: absolute;
  bottom: 0 !important;
  width: 100%;
  margin-bottom: -15px;
  .add-prescription {
    position: absolute;
    right: 50px;
    top: 15px;
  }
}
.message-input {
  width: 80%;
  input {
    color: #ff0000;
  }
}
.send-file {
  position: absolute;
  top: 13px;
  right: 20px;
}
.doctors-upper-name {
  width: 85%;
  float: right;
  padding-top: 5px;
}
.doctor-message-content {
  background: #2b867d;
  color: #ffffff;
  border-radius: 10px 30px 0px 10px;
  margin: 0px 15px 15px 15px;
  padding: 10px;
  width: 75%;
  float: right;
}
.user-icon {
  margin-top: 5px;
}
.doctor-time-sent {
  color: #ccc;
  width: 75%;
  font-size: 11px;
  float: right;
  text-align: right;
  padding-right: 20px;
}
.patient-message-content {
  background: #1ac6b6;
  color: #ffffff;
  border-radius: 30px 10px 10px 0px;
  margin: 0px 15px 15px 15px;
  padding: 10px;
  width: 75%;
  float: left;
}
.patient-time-sent {
  color: #ccc;
  width: 75%;
  font-size: 11px;
  float: left;
  text-align: left;
  padding-left: 20px;
}
.mc-sender {
  direction: rtl;
}
.mc-sender p {
  direction: ltr;
  color: #000000 !important;
}
.mc-sender p sub {
  color: rgba(255, 255, 255, 0.67);
}
.main-content {
  height: 81vh;
  overflow: scroll;
  padding-top: 12px;
}
.chat-content.padding-content {
  background: white;
}
.add-prescription {
  position: absolute;
  right: 10px;
  top: 10px;
}
.chat-content {
  padding-top: 8px;
}
#message-form {
  background: white !important;
}
.m-body.app-scroll {
  background: #ececec;
  height: 85vh;
  margin: 0;
}
.chatbox-undo {
  position: absolute;
  top: 15px;
  left: 5px;
}
</style>
