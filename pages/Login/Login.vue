<template>
  <div class="sign-in_login">
    <v-container>
      <v-row class="center reseta-login-logo">
        <div class="text-end" style="text-align: center">
          <img width="40%" src="~/assets/images/reseta-form-img.png" />
        </div>
      </v-row>
    </v-container>
    <div class="sign-in_login_desc">
      <v-row class="center">
          <h1 class="sign-in_login_title text-white">Reseta<b> &nbsp;QRx</b></h1>
      </v-row>
      <v-row class="center">
        <p class="text-center text-white">Your Quickest online Prescription.</p>
      </v-row>
    </div>
    <div class="sign-in_login_buttons">
      <v-row class="center">
        <v-btn depressed color="#B2EBF2" class="sign-btn" width="25%">
          <NuxtLink to="/register">SIGN UP</NuxtLink>
        </v-btn>
      </v-row>
      <v-row class="center">
        <v-btn class="ma-2 normal-mg login-btn" outlined color="#E0F7FA" width="25%">
          <NuxtLink to="/login">LOGIN</NuxtLink>
        </v-btn>
      </v-row>
    </div>
  </div>
</template>
<script>
export default {
  auth: false,
  layout: 'index',
}
</script>
<style scoped>
.reseta-login-logo {
  position: relative;
  top: -145px;
}
.sign-in_login_desc {
  position: relative;
  top: -90px;
}
.sign-in_login_buttons {
  position: relative;
  top: 50px;
}
a {
  text-decoration: none;
  color: white !important;
}
.sign-in_login_title {
  text-shadow: 2px 2px #757575;
}
.text-end {
  width: 190px;
}
.sign-btn a {
  color: #129792 !important;
}
.sign-in_login {
  position: absolute;
  top: 35%;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
}
.sign-btn,
.login-btn {
  border-radius: 20px 0px;
}
</style>
