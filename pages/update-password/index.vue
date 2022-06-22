<template>
  <div class="page-content">
    <v-snackbar
      v-model="snackbar"
      :timeout="2000"
      :value="true"
      shaped
      color="red"
    >
      Fields must be match.
      <template #action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <div class="page-title">Update Password</div>

    <div class="back-button" @click="exitprofile">
      <v-icon color="darken-2"> mdi-close </v-icon>
    </div>
    <div class="edit-profile-inputs">
      <div id="password" class="sm-side-padding">
        <v-text-field
          v-model="user_info.password"
          label="New Password"
          type="password"
          outlined
          dense
        ></v-text-field>
      </div>
      <div class="sm-side-padding">
        <v-text-field
          v-model="user_info.password_confirmed"
          label="Confirm Password"
          type="password"
          outlined
          dense
        ></v-text-field>
      </div>
    </div>

    <div class="page-title">Update Email</div>
    <div class="edit-profile-inputs">
      <div id="password" class="sm-side-padding">
        <v-text-field
          v-model="user_info.email"
          label="New Email"
          autocomplete="off"
          type="email"
          value=""
          :rules="emailRules"
          outlined
          dense
        ></v-text-field>
      </div>
      <div class="sm-side-padding">
        <v-text-field
          v-model="user_info.email_confirmed"
          label="Confirm Email"
          type="email"
          :rules="emailRules"
          value=""
          outlined
          dense
        ></v-text-field>
      </div>
    </div>
    <div class="d-flex justify-center">
      <v-btn tile class="dark" style="margin-top: 10px" @click="saveChanges">
        <v-icon left> mdi-content-save </v-icon>
        Save Changes
      </v-btn>
    </div>
  </div>
</template>

<script src="./update-password.js"></script>
<style scoped>
>>> .change-profile-icon .v-input__prepend-outer {
  background: #00bcd4;
  padding: 10px;
  border-radius: 100%;
  object-fit: cover;
}
>>> .change-profile-icon .v-input__prepend-outer .v-icon {
  color: white;
}
>>> .change-profile-icon {
  padding-top: 0 !important;
}
>>> .v-snack__content {
  color: white !important;
}
</style>
<style lang="scss" src="./update-password.scss"></style>
