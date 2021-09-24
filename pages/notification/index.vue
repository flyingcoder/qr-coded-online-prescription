<template>
  <div>
    <div class="notification-top-section">
      <v-row class="notification-input">
        <v-col cols="10" class="notification-content-input">
          <a class="icon-back" @click="to">
            <v-icon slot="prepend" color="#ffffff"> mdi-arrow-left </v-icon>
          </a>
          <h2 class="text-center-pd text-white notification-main-title">
            Notifications
          </h2>
        </v-col>
      </v-row>
      <v-row class="notification-options">
        <v-col cols="12">
          <p class="text-end text-right">
            <span class="secondary-color" @click="markReadAll"
              >Mark All as Read</span
            >
          </p>
        </v-col>
      </v-row>
    </div>
    <v-container>
      <div class="notification-content">
        <div class="notifications">
          <div
            v-for="noti in notifications"
            :key="noti"
            class="notification-created"
          >
            <v-row class="notification-content-box">
              <v-col cols="2" class="notification-logo-icon">
                <!-- <img :src="notifications.avatar" width="30px" height="30px" />-->
                <img
                  src="~/assets/images/main-logo.png"
                  width="45px"
                  height="45px"
                />
              </v-col>
              <v-col
                cols="10"
                class="text-center"
                style="padding-left: 0 !important"
              >
                <div class="notification-created-at d-flex">
                  <div>
                    <span v-if="!noti.read_at" @click="markRead(id)">Read</span>
                    <span v-if="noti.read_at">Seen</span>
                  </div>
                  <v-spacer />
                  <div>{{ $moment(noti.created_at).fromNow() }}</div>
                </div>
                <div
                  class="notification-main-content"
                  :class="{ seen: noti.read_at }"
                >
                  <div v-html="noti.data.message"></div>
                </div>
              </v-col>
            </v-row>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script src="./notification.js"></script>

<style src="./notification.scss" lang="scss"></style>
