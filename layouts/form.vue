<template>
  <v-app light>
    <!-- <Preloader /> -->
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>
<script>
export default {
  auth: false,
  middleware: 'auth-guard',
  data() {
    return {
      preloader: false,
    }
  },
}
</script>
<style lang="scss" scoped>
main {
  background: #129792;
  background-image: linear-gradient(90deg, #05bfae, #99f0e7);
  overflow: hidden;
}
</style>
