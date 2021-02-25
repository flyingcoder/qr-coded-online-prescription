<template>
  <a href="#" @click.prevent="login">Login</a>
</template>

<script>
export default {
  auth: false,
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
