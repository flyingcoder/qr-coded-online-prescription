<template>
  <div>
    <div class="notification-top-section">
      <v-row>
        <v-col cols="5" class="text-right notification-logo">
          <v-app-bar-title>
            <Nuxtlink to="/dashboard">
              <img
                class="notification-logo-wide"
                src="@/assets/images/notification-log.png"
                alt="Reseta QRx"
              />
            </Nuxtlink>
          </v-app-bar-title>
        </v-col>
        <v-col cols="7" class="notification-title">
          <h3 class="text-white">Notifications</h3>
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
                    v-if="notification.accept || notification.cancel"
                    class="notification-tag-request"
                  >
                    <v-btn v-if="notification.accept" cols="5">{{
                      notification.accept
                    }}</v-btn>
                    <v-btn v-if="notification.cancel" cols="5">{{
                      notification.cancel
                    }}</v-btn>
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
