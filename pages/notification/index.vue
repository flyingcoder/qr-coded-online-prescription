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
            <NuxtLink to="/" class="secondary-color">Mark All as Read</NuxtLink>
          </p>
        </v-col>
      </v-row>
    </div>
    <v-container>
      <div class="notification-content">
        <div class="notifications">
          <div
            v-for="notification in notifications"
            :key="notification"
            class="notification-created"
          >
            <v-row class="notification-content-box">
              <v-col cols="2" class="notification-logo-icon">
                <v-icon large class="outlined">
                  {{ notification.icon }}
                </v-icon>
              </v-col>
              <v-col cols="10" class="text-center">
                <div class="notification-created-at">
                  {{ notification.created_at }} <br />
                </div>
                <div class="notification-main-content">
                  {{ notification.content }}
                  <div
                    v-if="notification.friend_request"
                    class="notification-tag-request"
                  >
                    <v-btn cols="5">ACCEPT</v-btn>
                    <v-btn cols="5">CANCEL</v-btn>
                  </div>
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
