<template>
  <AuthForm
    button-text="REGISTER"
    :registration="is_register"
    :header-text="title"
  >
    <template #header>
      <div class="text-center py-0">
        <p class="text-black no-margin">Have an Account?</p>
        <NuxtLink to="/login">Click Here!</NuxtLink>
      </div>
    </template>
  </AuthForm>
</template>

<script src="./register.js"></script>

<style src="./register.scss" lang="scss" scoped></style>
