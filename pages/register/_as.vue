<template>
  <div class="login-main-form">
    <v-form>
      <div
        class="login-input-card"
        :class="{
          'register-input-card': $nuxt.$route.path == '/register/pharmacy',
        }"
      >
        <h1>Register as {{ $route.params.register }}</h1>
        <v-text-field label="First Name" class="login-input">
          <v-icon slot="prepend" color="#1ac6b6" medium> mdi-account </v-icon>
        </v-text-field>
        <v-text-field label="Email" class="login-input">
          <v-icon slot="prepend" color="#1ac6b6" medium>
            mdi-email-multiple
          </v-icon>
        </v-text-field>
        <v-text-field
          v-if="
            $route.params.as === 'doctor' || $route.params.as === 'pharmacy'
          "
          label="PRC Number"
          class="login-input"
        >
          <v-icon slot="prepend" color="#1ac6b6" medium>
            mdi-card-bulleted
          </v-icon>
        </v-text-field>
        <v-text-field
          v-if="$route.params.as == 'pharmacy'"
          label="Business Permit #"
          class="login-input"
        >
          <v-icon slot="prepend" color="#1ac6b6" medium>
            mdi-card-account-details
          </v-icon>
        </v-text-field>
        <v-text-field label="Password" class="login-input">
          <v-icon slot="prepend" color="#1ac6b6" medium> mdi-lock </v-icon>
        </v-text-field>
        <v-text-field label="Confirm Password" class="login-input">
          <v-icon slot="prepend" color="#1ac6b6" medium> mdi-lock </v-icon>
        </v-text-field>
      </div>
      <v-row class="center">
        <a
          style="color: white"
          class="login-main-btn register-main-btn"
          @click="registerUser"
          >REGISTER</a
        >
      </v-row>
    </v-form>
  </div>
</template>

<script src="./register.js"></script>

<style src="./register.scss" lang="scss"></style>
