<template>
  <div class="doctor-patient-chatbox">
    <div class="top-content padding-content">
      <img
        class="user-icon"
        :src="require(`~/assets/images/Muzan_Anime_Profile.png`)"
        alt=""
      />
      <div class="doctors-upper-name">
        <div class="doctor-name">Panday Digital</div>
        <div class="active-user-sign">
          <span id="active-sign">●</span>&nbsp;active
        </div>
      </div>
      <div class="exit-chatbox">
        <nuxt-link to="/dashboard">
          <v-icon large> mdi-close </v-icon>
        </nuxt-link>
      </div>
    </div>
    <div class="main-content">
      <div
        v-for="message in doctor_messages"
        :key="message.id"
        class="doctor-message"
      >
        <div class="doctor-time-sent">{{ message.time }}</div>
        <div class="doctor-message-content">{{ message.content }}</div>
      </div>
      <div
        v-for="message in patient_messages"
        :key="message.id"
        class="patient-message"
      >
        <div class="patient-time-sent">{{ message.time }}</div>
        <div class="patient-message-content">{{ message.content }}</div>
      </div>
    </div>
    <div class="chat-content padding-content">
      <nuxt-link v-if="$auth.user.role == 'doctor'" to="/prescription-form">
        <v-icon class="add-prescription"> mdi-plus </v-icon>
      </nuxt-link>
      <v-text-field
        v-model="body.message"
        placeholder="Type a message"
        outlined
        dense
        class="message-input"
        rounded
        append-icon="mdi-send"
        color="#1ac6b6"
      ></v-text-field>
      <div class="send-file">
        <a href="" @click.prevent="sendMessage"><v-icon> mdi-file </v-icon></a>
      </div>
    </div>
  </div>
</template>

<script src="./chatbox.js"></script>

<style src="./chatbox.scss" lang="scss" scoped></style>
