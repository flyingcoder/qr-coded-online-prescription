<template>
  <div class="login-main-form">
    <v-form>
      <div class="register-input-card">
        <v-row class="center reseta-login-logo">
          <div class="text-end registrar-buttons" style="text-align: center">
            <img width="30%" src="~/assets/images/reseta-form-img.png" />
            <h1>Register As</h1>
          </div>
        </v-row>
        <div class="registrar-buttons user-register-btn">
          <v-row class="center">
            <v-btn
              depressed
              color="#1ac6b6"
              class="register-main-btn"
              width="25%"
              to="/register/patient"
            >
              Patient
            </v-btn>
          </v-row>
          <v-row class="center">
            <v-btn
              depressed
              color="#1ac6b6"
              class="register-main-btn"
              width="25%"
              to="/register/doctor"
            >
              Doctor
            </v-btn>
          </v-row>
          <v-row class="center">
            <v-btn
              depressed
              color="#1ac6b6"
              class="register-main-btn"
              width="25%"
              to="/register/pharmacy"
            >
              Pharmacy
            </v-btn>
          </v-row>
        </div>
      </div>
    </v-form>
    <v-row class="center">
      <p class="text-black no-margin register-main-btn text-center-pd">
        <NuxtLink to="/login">Already have an account!</NuxtLink>
      </p>
    </v-row>
  </div>
</template>
<script>
export default {
  auth: false,
  layout: 'form',
  middleware: 'auth-guard',
}
</script>

<style src="./register.scss" lang="scss"></style>
