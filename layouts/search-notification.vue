<template>
  <v-app>
    <v-main class="no-margin">
      <nuxt />
    </v-main>
  </v-app>
</template>
<script>
export default {
  mounted() {
    this.$echo
      .private(`notifications.${this.$auth.user.id}`)
      .listen('.NewPrescription', (payload) => {
        this.$bus.$emit('NewPrescription', payload)
      })
      .listen('.NewChatMessage', (payload) => {
        this.$bus.$emit('NewChatMessage', payload)
      })
      .listen('.NewUser', (payload) => {
        this.$bus.$emit('NewUser', payload)
      })
  },
}
</script>
<style scoped>
main {
  background: #ffffff !important;
  background-image: linear-gradient(60deg, #129792, #99f0e7);
  overflow: hidden;
}
.no-margin {
  margin: 0 !important;
}
</style>
