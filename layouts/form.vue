<template>
  <v-app light>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>
<script>
export default {
  auth: false,
  middleware: 'auth-guard',
}
</script>
<style lang="scss" scoped>
main {
  background: #129792;
  background-image: linear-gradient(90deg, #05bfae, #99f0e7);
  overflow: hidden;
}
</style>
