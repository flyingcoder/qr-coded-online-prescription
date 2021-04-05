<template>
  <AuthForm button-text="REGISTER" :registration="true" :header-text="title">
    <template #inputs>
      <v-text-field
        v-if="$route.params.as === 'doctor' || $route.params.as === 'patient'"
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
        v-model="register.pname"
        label="Name of Pharmacy"
        class="login-input"
      >
        <v-icon slot="prepend" color="#1ac6b6" medium> mdi-store-plus </v-icon>
      </v-text-field>

      <v-text-field
        v-if="$route.params.as === 'pharmacy'"
        v-model="register.address"
        label="Business Address"
        class="login-input"
      >
        <v-icon slot="prepend" color="#1ac6b6" medium> mdi-map-marker </v-icon>
      </v-text-field>

      <v-text-field
        v-if="$route.params.as === 'pharmacy'"
        v-model="register.lto"
        label="LTO(License to Operate) #:"
        class="login-input"
      >
        <v-icon slot="prepend" color="#1ac6b6" medium>
          mdi-file-document
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
        v-if="$route.params.as === 'pharmacy'"
        v-model="register.fname"
        label="Name of Pharmacist"
        class="login-input"
      >
        <v-icon slot="prepend" color="#1ac6b6" medium> mdi-account </v-icon>
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
    </template>
  </AuthForm>
</template>

<script src="./register.js"></script>

<style src="./register.scss" lang="scss" scoped></style>
