<template>
  <v-app>
    <v-main class="no-margin">
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {},
}
</script>
<style scoped>
main {
  background: #129792;
  background-image: linear-gradient(60deg, #129792, #99f0e7);
  overflow: hidden;
}
.no-margin {
  margin: 0 !important;
}
</style>
