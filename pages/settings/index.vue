<template>
  <div class="main-settings">
    <v-dialog
      v-model="payment_details"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      max-width="600"
    >
      <PaymentDetails @closed="closePayment" />
    </v-dialog>
    <div class="settings-header">
      <div class="back-btn align-self-center">
        <v-icon color="white" @click="backRoute"> mdi-chevron-left </v-icon>
      </div>
      <div class="header-title align-self-center">Settings</div>
    </div>
    <div class="settings-body">
      <div class="user-image">
        <img
          v-if="
            $auth.user.avatar == 'avatar.png' ||
            $auth.user.avatar ==
              'https://api.resetaqrx.com/storage/users/user-default.png'
          "
          :src="require(`~/assets/images/avatar.png`)"
          :alt="$auth.user.fname"
          width="90px"
          height="90px"
        />
        <img
          v-else
          :src="$auth.user.avatar"
          :alt="$auth.user.fname"
          width="90px"
          height="90px"
        />
      </div>
      <div class="d-flex justify-center settings-title">Options</div>
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
                <v-icon class="primary-color">mdi-account</v-icon>
                <span class="accordion-title"
                  ><span v-if="$auth.user.role == 'pharmacy'">Pharmacy</span>
                  <span v-else>Personal</span>
                  Information</span
                >
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="text-center">
              <span v-if="$auth.user.role == 'pharmacy'"
                >Manage pharmacy information, pharmacist, license and
                address.</span
              >
              <span v-else>Manage your phone numbers, emails and address</span>
              <v-btn
                width="90%"
                style="margin-top: 25px"
                class="dark"
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
                <v-icon class="primary-color"
                  >mdi-shield-account-outline</v-icon
                >
                <span class="accordion-title">Security and Login</span>
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="text-center">
              Change your password and take actions to add more security to your
              account
              <v-btn
                width="90%"
                style="margin-top: 25px"
                class="dark"
                to="update-password"
                ><v-icon color="white" left size="20px">mdi-shield-check</v-icon
                >Secure</v-btn
              >
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel
            v-if="$auth.user.role !== 'pharmacy'"
            style="border-bottom: 1px solid rgb(245 228 228)"
          >
            <v-expansion-panel-header
              expand-icon="mdi-chevron-right"
              disable-icon-rotate
            >
              <div>
                <v-icon class="primary-color">mdi-account-group</v-icon>
                <span class="accordion-title" to="edit-profile"
                  >Tag Members</span
                >
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="text-center">
              Add a family member or a dependant to your tag members
              <v-btn
                width="90%"
                style="margin-top: 25px"
                class="dark"
                to="tag-member"
                ><v-icon color="white" left size="20"
                  >mdi-card-bulleted-outline</v-icon
                >Manage Tag Members</v-btn
              >
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </div>
    <div class="settings-footer">
      <v-btn width="80%" class="dark" @click="logout">
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
