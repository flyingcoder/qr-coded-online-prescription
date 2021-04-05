<template>
  <AuthForm button-text="REGISTER" header-text="Register As">
    <template #header>
      <div class="text-center py-0">
        <p class="text-black no-margin">Have an Account?</p>
        <NuxtLink to="/login">Click Here!</NuxtLink>
      </div>
    </template>
    <div class="registrar-buttons">
      <v-row class="center">
        <v-col cols="12">
          <v-btn
            depressed
            color="#1ac6b6"
            class="register-main-btn"
            width="100%"
            to="/register/patient"
          >
            Patient
          </v-btn>
        </v-col>
        <v-col cols="12">
          <v-btn
            depressed
            color="#1ac6b6"
            class="register-main-btn"
            width="100%"
            to="/register/doctor"
          >
            Doctor
          </v-btn></v-col
        >

        <v-col cols="12">
          <v-btn
            depressed
            color="#1ac6b6"
            class="register-main-btn"
            width="100%"
            to="/register/pharmacy"
          >
            Pharmacy
          </v-btn></v-col
        >
      </v-row>
    </div>
  </AuthForm>
</template>
<script>
export default {
  auth: false,
  layout: 'form',
  middleware: 'auth-guard',
}
</script>

<style src="./register.scss" lang="scss" scoped></style>
