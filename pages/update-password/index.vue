<template>
  <div class="page-content">
    <div class="page-title">Update Password</div>

    <div class="back-button" @click="exitprofile">
      <v-icon color="green darken-2"> mdi-close </v-icon>
    </div>
    <div class="edit-profile-inputs">
      <v-row id="password" class="sm-side-padding">
        <v-text-field
          v-model="user_info.password"
          label="New Password"
          autocomplete="off"
          type="password"
          outlined
          dense
        ></v-text-field>
      </v-row>
      <v-row class="sm-side-padding">
        <v-text-field
          v-model="user_info.password_confirmed"
          label="Confirm Password"
          type="password"
          :rules="passwordConfirmationRule"
          outlined
          dense
        ></v-text-field>
      </v-row>
    </div>
    <v-btn tile class="dark" @click="saveChanges">
      <v-icon left> mdi-content-save </v-icon>
      Save Changes
    </v-btn>
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
</style>
<style lang="scss" src="./update-password.scss"></style>
