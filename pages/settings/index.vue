<template>
  <div class="main-settings">
    <div class="settings-header">
      <div class="back-btn align-self-center">
        <v-icon color="white" @click="backRoute"> mdi-chevron-left </v-icon>
      </div>
      <div class="header-title align-self-center">Settings</div>
    </div>
    <div class="settings-body">
      <div class="user-image">
        <img
          :src="require(`~/assets/images/Muzan_Anime_Profile.png`)"
          :alt="$auth.user.fname"
          width="90px"
          height="90px"
        />
        <div class="mainuser-name">{{ $auth.user.fname }}</div>
        <div class="mainuser-email">{{ $auth.user.email }}</div>
      </div>
      <div class="settings-options">
        <v-expansion-panels accordion elevation="0">
          <v-expansion-panel elevation="0">
            <v-expansion-panel-header
              style="border-top: 1px solid rgb(245 228 228)"
              expand-icon="mdi-chevron-right"
              disable-icon-rotate
              pre
            >
              <div>
                <v-icon>mdi-account</v-icon>
                <span class="accordion-title">Personal Information</span>
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="text-center">
              Manage your phone numbers, emails and address
              <v-btn
                width="90%"
                style="margin-top: 25px"
                color="#00e676"
                to="edit-profile"
              >
                <v-icon color="white" left size="20px"
                  >mdi-hammer-screwdriver</v-icon
                >
                Manage Information</v-btn
              >
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header
              expand-icon="mdi-chevron-right"
              disable-icon-rotate
            >
              <div>
                <v-icon>mdi-shield-account-outline</v-icon>
                <span class="accordion-title">Security and Login</span>
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="text-center">
              Change your password and take actions to add more security to your
              account
              <v-btn
                width="90%"
                style="margin-top: 25px"
                color="#00e676"
                to="edit-profile"
                ><v-icon color="white" left size="20px">mdi-shield-check</v-icon
                >Secure</v-btn
              >
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel style="border-bottom: 1px solid rgb(245 228 228)">
            <v-expansion-panel-header
              expand-icon="mdi-chevron-right"
              disable-icon-rotate
            >
              <div>
                <v-icon>mdi-key-variant</v-icon>
                <span class="accordion-title" to="edit-profile"
                  >Change Password</span
                >
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="text-center">
              Its a good idea to use a strong password that your not using
              elsewhere.
              <v-btn
                width="90%"
                style="margin-top: 25px"
                color="#00e676"
                to="edit-profile"
                ><v-icon color="white" left size="20">mdi-key-change</v-icon
                >Change</v-btn
              >
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </div>
    <div class="settings-footer">
      <v-btn width="80%" color="#00e676" @click="logout">
        <v-icon color="white" style="margin-right: 10px"
          >mdi-exit-to-app</v-icon
        >
        <span class="color-white"> Logout </span>
      </v-btn>
    </div>
  </div>
</template>

<script src="./settings.js"></script>
<style scoped>
.v-expansion-panel::before {
  box-shadow: none !important;
}
</style>
<style lang="scss" src="./settings.scss" scoped></style>
