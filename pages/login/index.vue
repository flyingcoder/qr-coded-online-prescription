<template>
  <div class="form-card-content">
    <v-row class="center form-header">
      <v-col cols="12" class="text-center">
        <img width="100px" src="~/assets/images/reseta-form-img.png" />
      </v-col>
      <v-col cols="12" class="text-center py-0">
        <h1 class="my-0">Welcome!</h1>
      </v-col>
      <v-col class="text-center py-0">
        <p class="text-black no-margin">Don't have an Account?</p>
        <NuxtLink to="/register">Click Here!</NuxtLink>
      </v-col>
    </v-row>
    <div class="form-inputs">
      <v-text-field
        v-model="login.email"
        :rules="emailRules"
        label="E-mail"
        required
      >
        <v-icon slot="prepend" color="#1ac6b6" medium> mdi-account </v-icon>
      </v-text-field>
      <v-text-field
        v-model="login.password"
        :rules="passwordRules"
        type="password"
        label="Password"
        required
      >
        <v-icon slot="prepend" color="#1ac6b6" medium> mdi-lock </v-icon>
      </v-text-field>
    </div>
    <v-row class="center form-action">
      <v-btn @click.prevent="userLogin">LOG IN</v-btn>
    </v-row>
  </div>
</template>
<script src="./login.js"></script>
<style src="./login.scss" lang="scss"></style>
