<template>
  <div class="login-main-form">
    <v-form @submit.prevent="registerUser">
      <div
        class="login-input-card"
        :class="{
          'register-input-card': $route.params.as == 'pharmacy',
        }"
      >
        <h1 style="font-size: 27px; font-weight: 400" class="text-center-pd">
          Register as {{ $route.params.as | capitalize }}
        </h1>
        <v-text-field
          v-model="register.fname"
          label="First Name"
          class="login-input"
        >
          <v-icon slot="prepend" color="#1ac6b6" medium> mdi-account </v-icon>
        </v-text-field>
        <v-text-field
          v-model="register.email"
          type="email"
          label="Email"
          class="login-input"
        >
          <v-icon slot="prepend" color="#1ac6b6" medium>
            mdi-email-multiple
          </v-icon>
        </v-text-field>
        <v-text-field
          v-if="$route.params.as === 'doctor'"
          v-model="register.license_number"
          label="PRC Number"
          class="login-input"
        >
          <v-icon slot="prepend" color="#1ac6b6" medium>
            mdi-card-bulleted
          </v-icon>
        </v-text-field>
        <v-text-field
          v-if="$route.params.as === 'pharmacy'"
          v-model="register.tin_number"
          label="PRC Number"
          class="login-input"
        >
          <v-icon slot="prepend" color="#1ac6b6" medium>
            mdi-card-bulleted
          </v-icon>
        </v-text-field>
        <v-text-field
          v-if="$route.params.as === 'pharmacy'"
          v-model="register.license_number"
          label="Business Permit #"
          class="login-input"
        >
          <v-icon slot="prepend" color="#1ac6b6" medium>
            mdi-card-account-details
          </v-icon>
        </v-text-field>
        <v-text-field
          v-model="register.password"
          type="password"
          label="Password"
          class="login-input"
        >
          <v-icon slot="prepend" color="#1ac6b6" medium> mdi-lock </v-icon>
        </v-text-field>
        <v-text-field
          v-model="register.password_confirmation"
          type="password"
          label="Confirm Password"
          class="login-input"
        >
          <v-icon slot="prepend" color="#1ac6b6" medium> mdi-lock </v-icon>
        </v-text-field>
        <v-row class="center">
          <button
            type="submit"
            style="color: white"
            class="login-main-btn register-main-btn"
          >
            REGISTER
          </button>
        </v-row>
      </div>
    </v-form>
  </div>
</template>

<script src="./register.js"></script>

<style src="./register.scss" lang="scss"></style>
