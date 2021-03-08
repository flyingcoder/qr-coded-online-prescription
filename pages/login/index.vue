<template>
  <div class="login-main-form">
    <v-form>
      <div class="login-input-card">
        <v-row class="center reseta-login-logo">
          <div class="text-end login-logo" style="text-align: center">
            <img width="100px" src="~/assets/images/reseta-form-img.png" />
          </div>
        </v-row>
        <v-text-field
          v-model="login.email"
          :rules="emailRules"
          label="E-mail"
          class="login-input"
          required
        >
          <v-icon slot="prepend" color="#1ac6b6" medium> mdi-account </v-icon>
        </v-text-field>
        <v-text-field v-model="login.password" type="password" label="Password">
          <v-icon slot="prepend" color="#1ac6b6" medium> mdi-lock </v-icon>
        </v-text-field>
      </div>
      <v-row class="center">
        <a
          style="color: white"
          class="login-main-btn"
          href="#"
          @click.prevent="login"
          >LOG IN</a
        >
      </v-row>
    </v-form>
    <div class="sign-up-sec">
      <v-row class="center">
        <p class="text-black no-margin">If you dont have Account</p>
      </v-row>
      <v-row class="center">
        <NuxtLink to="/register">Sign Up</NuxtLink>
      </v-row>
    </div>
  </div>
</template>
<script src="./login.js"></script>
<style src="./login.scss" lang="scss"></style>
