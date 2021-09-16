<template>
  <div class="edit-profile-page">
    <div class="edit-profile-title">Edit Profile</div>
    <div class="edit-profile-image">
      <img src="~/assets/images/Inosuke_Anime_Profile.png" alt="" />
      <div class="edit-image">
        <v-file-input
          hide-input
          show-size
          class="change-profile-icon"
          prepend-icon="mdi-pencil"
          truncate-length="15"
        ></v-file-input>
      </div>
      <div class="back-button" @click="exitprofile">
        <v-icon color="green darken-2"> mdi-close </v-icon>
      </div>
    </div>
    <div class="edit-profile-inputs">
      <v-row style="height: 70px">
        <v-col>
          <v-text-field
            v-model="user_info.fname"
            label="First Name"
            outlined
            dense
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="user_info.lname"
            label="Last Name"
            outlined
            dense
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row style="height: 70px">
        <v-col
          ><v-text-field
            v-model="user_info.email"
            label="Email"
            :rules="[rules.required, rules.email]"
            outlined
            dense
          ></v-text-field
        ></v-col>
        <v-col>
          <v-text-field
            v-model="user_info.address"
            label="Address"
            outlined
            dense
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row style="height: 80px">
        <v-col
          ><v-text-field
            v-model="user_info.phone"
            label="Phone Number"
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            outlined
            dense
          ></v-text-field
        ></v-col>
      </v-row>
      <v-row class="sm-side-padding">
        <v-text-field
          v-if="$auth.user.role === 'pharmacy' || $auth.user.role === 'doctor'"
          v-model="user_info.license_number"
          label="License Number"
          outlined
          dense
        ></v-text-field>
      </v-row>
      <v-row class="sm-side-padding">
        <v-text-field
          v-if="$auth.user.role === 'pharmacy' || $auth.user.role === 'doctor'"
          v-model="user_info.tin_number"
          label="Tin Number"
          outlined
          dense
        ></v-text-field>
      </v-row>
      <v-row id="password" class="sm-side-padding">
        <v-text-field
          v-model="user_info.password"
          label="Password"
          outlined
          dense
        ></v-text-field>
      </v-row>
      <v-row class="sm-side-padding">
        <v-text-field
          v-model="user_info.password_confirmed"
          label="New Password"
          outlined
          dense
        ></v-text-field>
      </v-row>
      <v-row class="sm-side-padding">
        <v-textarea v-model="user_info.bio" outlined label="BIO"></v-textarea>
      </v-row>
    </div>
    <v-btn tile color="success" @click="saveChanges">
      <v-icon left> mdi-content-save </v-icon>
      Save Changes
    </v-btn>
  </div>
</template>

<script src="./edit-profile.js"></script>
<style scoped>
>>> .change-profile-icon .v-input__prepend-outer {
  background: #00bcd4;
  padding: 10px;
  border-radius: 100%;
}
>>> .change-profile-icon .v-input__prepend-outer .v-icon {
  color: white;
}
>>> .change-profile-icon {
  padding-top: 0 !important;
}
</style>
<style lang="scss" src="./edit-profile.scss"></style>
