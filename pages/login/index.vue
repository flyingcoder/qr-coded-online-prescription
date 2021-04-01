<template>
  <AuthForm button-text="LOGIN">
    <template #header>
      <v-col cols="12" class="text-center">
        <img width="100px" src="~/assets/images/reseta-form-img.png" />
      </v-col>
      <v-col cols="12" class="text-center py-0">
        <h1 class="my-0">Welcome!</h1>
      </v-col>
      <v-col class="text-center py-0">
        <p class="text-black no-margin">Don't have an Account?</p>
        <NuxtLink to="/register">Click Here!</NuxtLink>
      </v-col>
    </template>
  </AuthForm>
</template>
<script src="./login.js"></script>
<style src="./login.scss" lang="scss"></style>
