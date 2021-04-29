<template>
  <div class="main-settings">
    <div class="settings-header-content">
      <div class="settings-header-content-title">Menu</div>
      <div class="settings-header-content-secondary-title d-flex">
        <img src="~/assets/icons/settings.svg" alt="settings" width="30px" />
        <div class="settings-header-sub-title">SETTINGS</div>
      </div>
    </div>
    <!-- <div class="settings-main-content">
      <div class="settings-first-section">
        <div class="settings-first-header-section">
          <div class="personal-info-title">
            <img src="~/assets/icons/user.svg" alt="" width="30px" />
            <div style="padding-left: 10px; font-size: 18px">
              Personal Information
            </div>
          </div>
          <div class="personal-info-content">
            <div class="personal-info-content-title">General</div>
            <div class="personal-info-content-one">
              Name :<span>
                {{ this.$auth.user.fname }} {{ this.$auth.user.lname }}</span
              >
            </div>
            <div class="personal-info-content-two">
              Contact Info :<span>
                Manage your phone numbers, emails and address.</span
              >
            </div>
          </div>
          <div class="edit-profile-button">
            <v-btn rounded color="success" width="50%" to="edit-profile">
              <v-icon left> mdi-pencil </v-icon>
              Edit profile
            </v-btn>
          </div>
        </div>
      </div>
      <div class="settings-second-section">
        <div class="security-login-header d-flex align-center">
          <img width="30px" src="~/assets/icons/shield.svg" />
          <div class="security-sub-title">Security and Login</div>
        </div>
        <div class="security-login-description">
          Change your password and take actions to add more security to your
          account.
        </div>
      </div>
      <div class="settings-third-section">
        <div class="change-password-header d-flex align-center">
          <img width="30px" src="~/assets/icons/key.svg" />
          <div class="security-sub-title">Change password</div>
        </div>
        <div class="security-login-description">
          I'ts a good idea to use a strong password that your not using
          elsewhere.
        </div>
      </div>
      <div class="settings-fourth-section justify-center">
        <v-btn rounded color="success" width="50%" @click="logout">
          Logout
        </v-btn>
      </div>
    </div> -->
    <div class="settings expansion-pane d-flex">
      <v-expansion-panels accordion>
        <v-expansion-panel v-for="setting in settings" :key="setting">
          <v-expansion-panel-header style="padding: 0 10px">
            <div class="settings-main-icon">
              <img class="setting-image-icon" :src="setting.icon" alt="" />
            </div>
            <div class="settings-dropdown">{{ setting.title }}</div>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            {{ setting.description }}
            <div
              v-if="setting.manage == ''"
              class="manage-btn d-flex justify-center"
            >
              <v-btn tile color="success" to="edit-profile">
                <v-icon left> mdi-account-cog </v-icon>
                Manage Information
              </v-btn>
            </div>
            <div
              v-if="setting.security == ''"
              class="manage-btn d-flex justify-center"
            >
              <v-btn tile color="success" to="edit-profile">
                <v-icon left> mdi-shield-account </v-icon>
                Secure
              </v-btn>
            </div>
            <div
              v-if="setting.change == ''"
              class="manage-btn d-flex justify-center"
            >
              <v-btn tile color="success" to="edit-profile">
                <v-icon left> mdi-key-change </v-icon>
                Change
              </v-btn>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <div class="d-flex">
      <div class="settings-fourth-section justify-center" style="width: 100%">
        <v-btn rounded color="success" width="50%" @click="logout">
          <v-icon>mdi-exit-to-app</v-icon>
          Logout
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script src="./settings.js"></script>

<style src="./settings.scss" lang="scss" scoped></style>
