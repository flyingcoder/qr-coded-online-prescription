<template>
  <div class="sign-in_login">
    <v-container>
      <v-row class="center reseta-login-logo">
        <div class="text-end" style="text-align: center">
          <img width="40%" src="~/assets/images/resetaapp_logo.png" />
        </div>
      </v-row>
    </v-container>
    <v-row class="center">
      <v-btn depressed color="#B2EBF2" class="sign-btn" width="40%">
        <NuxtLink to="/register">SIGN UP</NuxtLink>
      </v-btn>
    </v-row>
    <v-row class="center">
      <v-btn class="ma-2 normal-mg" outlined color="#E0F7FA" width="40%">
        <NuxtLink to="/login">LOGIN</NuxtLink>
      </v-btn>
    </v-row>
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
a {
  text-decoration: none;
  color: white !important;
}
.text-end {
  width: 190px;
}
.sign-btn a {
  color: #129792 !important;
}
.center {
  align-items: center;
  justify-content: center;
}
.sign-in_login {
  position: absolute;
  top: 35%;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
}
.normal-mg {
  margin-top: 20px impo !important;
}
</style>
