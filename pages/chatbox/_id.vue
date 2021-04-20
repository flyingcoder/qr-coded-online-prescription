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
      <div class="messages" v-html="messages"></div>
      <div class="typing-indicator">
        <div class="message-carda typing">
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
            ><img width="23px" src="~/assets/images/paper-clip.svg" />
            <input
              type="file"
              class="upload-attachment"
              name="file"
              accept="image/*, .txt, .rar, .zip"
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
              <img width="23px" src="~/assets/images/paper-plane.svg" />
            </div>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script src="./chatbox.js"></script>

<style src="./chatbox.scss" lang="scss" scoped></style>
