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
          label="Username"
          class="login-input"
        >
          <v-icon
            slot="prepend"
            color="#1ac6b6"
            medium
          >
          mdi-account
          </v-icon>
        </v-text-field>
        <v-text-field
          label="Password"
          class="login-input"
        >
          <v-icon
            slot="prepend"
            color="#1ac6b6"
            medium
          >
            mdi-lock
          </v-icon>
        </v-text-field>
      </div>
      <v-row class="center">
        <a class="login-main-btn" href="#" @click.prevent="login">LOG IN</a>
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

<script>
export default {
  auth: false,
  layout: 'form',
  methods: {
    login() {
      this.$auth.loginWith('laravelSanctum', {
        data: {
          email: 'alvin@resetaqrx.com',
          password: 'password',
        },
      })
    },
  },
}
</script>
<style scoped>
.login-input-card {
    background: #ffffff;
    position: relative;
    top: -25px;
    margin: 10px 30px;
    padding: 20px;
    border-radius: 28px 2px;
    box-shadow: 1px 1px 5px #8f8f8f;
}
.login-logo {
  padding: 35px 15px;
}
.login-main-btn {
  border-radius: 20px;
  margin-bottom: 10px !important;
  padding: 10px 55px;
  background: #1ac6b6;
  position: relative;
  color: white;
  text-align: center;
  text-decoration: none;
}


</style>
