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
    </div>
    <div class="edit-profile-inputs">
      <v-row>
        <v-col>
          <v-text-field
            label="First Name"
            name="fname"
            outlined
            dense
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            label="Last Name"
            name="lname"
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
            name="email"
            :rules="[rules.required, rules.email]"
            outlined
            dense
          ></v-text-field
        ></v-col>
        <v-col>
          <v-text-field
            label="Address"
            name="address"
            outlined
            dense
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          ><v-text-field
            label="Phone Number"
            name="phone"
            outlined
            dense
          ></v-text-field
        ></v-col>
        <v-col
          ><v-text-field
            label="License Number"
            name="license_number"
            outlined
            dense
          ></v-text-field
        ></v-col>
      </v-row>
      <v-row class="sm-side-padding">
        <v-text-field
          label="Tin Number"
          name="tin_number"
          outlined
          dense
        ></v-text-field>
      </v-row>
      <v-row class="sm-side-padding">
        <v-text-field label="Password" outlined dense></v-text-field>
      </v-row>
      <v-row class="sm-side-padding">
        <v-text-field
          label="New Password"
          name="tin_number"
          outlined
          dense
        ></v-text-field>
      </v-row>
      <v-row class="sm-side-padding">
        <v-textarea outlined name="bio" label="BIO"></v-textarea>
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
