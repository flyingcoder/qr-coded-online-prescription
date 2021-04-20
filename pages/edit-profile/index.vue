<template>
  <div class="edit-profile-page">
    <div class="edit-profile-title">Edit Profile</div>
    <div class="edit-profile-image">
      <img src="~/assets/images/Inosuke_Anime_Profile.png" alt="" />
      <div class="edit-image">
        <v-btn small class="mx-2" fab dark color="cyan">
          <v-icon dark> mdi-pencil </v-icon>
        </v-btn>
      </div>
      <div class="back-button" @click="exitprofile">
        <v-icon color="green darken-2"> mdi-close </v-icon>
      </div>
    </div>
    <div class="edit-profile-inputs">
      <v-row>
        <v-col>
          <v-text-field
            v-model="fname"
            label="First Name"
            outlined
            dense
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="lname"
            label="Last Name"
            outlined
            dense
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          ><v-text-field
            v-model="email"
            label="Email"
            :rules="[rules.required, rules.email]"
            outlined
            dense
          ></v-text-field
        ></v-col>
        <v-col>
          <v-text-field
            v-model="address"
            label="Address"
            outlined
            dense
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          ><v-text-field
            v-model="phone"
            label="Phone Number"
            outlined
            dense
          ></v-text-field
        ></v-col>
        <v-col
          ><v-text-field
            v-model="license_number"
            label="License Number"
            outlined
            dense
          ></v-text-field
        ></v-col>
      </v-row>
      <v-row class="sm-side-padding">
        <v-text-field
          v-model="tin_number"
          label="Tin Number"
          outlined
          dense
        ></v-text-field>
      </v-row>
      <v-row class="sm-side-padding">
        <v-text-field
          v-model="password"
          label="Password"
          outlined
          dense
        ></v-text-field>
      </v-row>
      <v-row class="sm-side-padding">
        <v-text-field label="New Password" outlined dense></v-text-field>
      </v-row>
      <v-row class="sm-side-padding">
        <v-textarea v-model="bio" outlined label="BIO"></v-textarea>
      </v-row>
    </div>
    <v-btn tile color="success">
      <v-icon left> mdi-content-save </v-icon>
      Save Changes
    </v-btn>
  </div>
</template>

<script src="./edit-profile.js"></script>

<style lang="scss" src="./edit-profile.scss"></style>
