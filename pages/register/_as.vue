<template>
  <AuthForm button-text="REGISTER" :registration="true" :header-text="title">
    <template #inputs>
      <v-text-field
        v-model="register.fname"
        label="First Name"
        class="login-input"
      >
        <v-icon slot="prepend" color="#1ac6b6" medium> mdi-account </v-icon>
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
    </template>
  </AuthForm>
</template>

<script src="./register.js"></script>

<style src="./register.scss" lang="scss" scoped></style>
