<template>
  <div class="sign-in_login">
    <v-content>
      <v-row class="center reseta-login-logo">
        <div class="text-end" style="text-align: center">
          <img width="40%" src="~/assets/images/reseta-form-img.png" />
        </div>
      </v-row>
    </v-content>
    <div class="sign-in_login_desc">
      <v-row class="center">
        <h1 class="sign-in_login_title text-white">Reseta<b> &nbsp;QRx</b></h1>
      </v-row>
      <v-row class="center">
        <p class="text-center text-white">Your Quickest online Prescription.</p>
      </v-row>
    </div>
    <div class="sign-in_login_buttons">
      <v-row class="center text-center-pd">
        <NuxtLink to="/register" class="sign-btn">
          <v-btn depressed color="#B2EBF2" width="90%" class="btn-radius">
            SIGN UP
          </v-btn>
        </NuxtLink>
      </v-row>
      <v-row class="center text-center-pd">
        <NuxtLink to="/login" class="login-btn">
          <v-btn
            class="ma-2 normal-mg btn-radius"
            outlined
            color="#E0F7FA"
            width="90%"
          >
            LOGIN
          </v-btn>
        </NuxtLink>
      </v-row>
    </div>
  </div>
</template>
<script>
export default {
  auth: false,
  layout: 'index',
  middleware: 'auth-guard',
}
</script>
<style lang="scss" scoped>
.reseta-login-logo {
  margin-top: 70px;
  margin-bottom: 20px;
}
.sign-in_login_desc {
  p {
    font-size: 20px;
  }
}
.sign-in_login_buttons {
  margin: 90px auto;
}
.text-end {
  width: 400px;
}
.sign-btn a {
  color: #129792 !important;
}
.sign-in_login {
  height: 100vh;
  width: 100%;
}
.sign-btn,
.login-btn {
  border-radius: 20px 0px;
}
</style>
