<template>
  <div class="login-main-form">
    <v-form>
      <div class="login-input-card">
        <v-row class="center reseta-login-logo">
          <div class="text-end" style="text-align: center">
            <h1>
              REGISTER
            </h1>
          </div>
        </v-row>
        <v-text-field
          label="First Name"
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
          label="Last Name"
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
        <v-text-field
          label="Email"
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
        <v-text-field
          label="Phone Number"
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
        <v-text-field
          label="Username"
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
        <v-text-field
          label="Confirm Password"
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
        <v-row class="center sm-margin">
          <a class="register-main-btn" href="#" @click.prevent="login">REGISTER</a>
        </v-row>
      </div>
    </v-form>
  </div>
</template>

<script>
export default {
  auth: false,
  layout: 'form',
}
</script>

<style scoped>
.login-input-card {
    background: #ffffff;
    position: relative;
    top: -98px;
    margin: 10px 30px;
    padding: 20px;
    border-radius: 28px 2px;
    box-shadow: 1px 1px 5px #8f8f8f;
}
.login-logo {
  padding: 35px 15px;
}
.register-main-btn {
  border-radius: 20px;
  margin-bottom: 10px !important;
  padding: 10px 55px;
  background: #1ac6b6;
  position: relative;
  color: white;
  text-align: center;
  text-decoration: none;
}
.reseta-login-logo {
  padding: 10px 0px;
}
</style>