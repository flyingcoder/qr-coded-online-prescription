<template>
    <div class="login-main-form">
    <v-form>
      <div class="register-input-card">
        <v-row class="center reseta-login-logo">
          <div class="text-end" style="text-align: center">
            <img width="40%" src="~/assets/images/reseta-form-img.png" />
            <h1>Register As</h1>
          </div>
        </v-row>
        <div class="registrar-buttons">
            <v-row class="center">
                <v-btn depressed color="#1ac6b6" class="register-main-btn" width="25%">
                    <NuxtLink to="/register">Patient</NuxtLink>
                </v-btn>
            </v-row>
            <v-row class="center">
                <v-btn depressed color="#1ac6b6" class="register-main-btn" width="25%">
                    <NuxtLink to="/register">Doctor</NuxtLink>
                </v-btn>
            </v-row>
            <v-row class="center">
                <v-btn depressed color="#1ac6b6" class="register-main-btn" width="25%">
                    <NuxtLink to="/register">Pharmacy</NuxtLink>
                </v-btn>
            </v-row>
        </div>
      </div>
    </v-form>
    <v-row class="center">
        <p class="text-black no-margin">
            <NuxtLink to="/login">Already have an account!</NuxtLink>
        </p>
      </v-row>
  </div>
</template>

<script>
    export default {
        auth: false,
        layout: 'form'
    }
</script>

<style scoped>
.register-input-card a {
    color: white !important;
}
.register-input-card {
    background: #ffffff;
    position: relative;
    top: -25px;
    margin: 10px 30px;
    padding: 20px;
    border-radius: 28px 2px;
    box-shadow: 1px 1px 5px #8f8f8f;
}
.register-main-btn {
    border-radius: 20px 0px;
}
.registrar-buttons {
    margin: 45px 0;
}
</style>