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
        <div class="user-name">{{ $auth.user.fname }}</div>
      </div>
      <div class="settings-options">
        <v-expansion-panels accordion>
          <v-expansion-panel>
            <v-expansion-panel-header
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
              <v-btn width="90%" style="margin-top: 25px">
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
              <v-btn width="90%" style="margin-top: 25px" to="edit-profile"
                >Secure</v-btn
              >
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
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
              <v-btn width="90%" style="margin-top: 25px" to="edit-profile"
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

<script>
export default {
  layout: 'search-notification',
  data() {
    return {}
  },
  methods: {
    backRoute() {
      this.$router.go(-1)
    },
    logout() {
      this.$auth.logout()
    },
  },
}
</script>

<style lang="scss" scoped>
.color-white {
  color: white;
}
.settings-header {
  background: #1ac6b6;
  display: flex;
  height: 50px;
  align-self: center;
  .back-btn {
    position: absolute;
    top: 10px;
    left: 10px;
  }
  .header-title {
    color: white !important;
    justify-content: center;
    width: 100%;
    font-weight: 400;
    text-align: center;
    font-size: 19px;
  }
}
.settings-body {
  padding: 20px 0 0 0;
  .user-image {
    text-align: center;
    img {
      border-radius: 100%;
      border: 2px solid #1ac6b6;
    }
    .user-name {
      font-weight: 600;
    }
  }
  .settings-options {
    padding-top: 30px;
    .accordion-title {
      padding-left: 10px;
    }
  }
}
.settings-footer {
  margin-top: 20px;
  text-align: center;
  justify-content: center;
}
</style>
