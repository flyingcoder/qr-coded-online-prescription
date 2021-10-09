<template>
  <v-app dark>
    <AdminHeader />
    <v-main id="reseta"> <nuxt /></v-main>

    <!-- <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <v-footer :absolute="!fixed" app style="background: black !important">
      <span
        >&copy; {{ new Date().getFullYear() }} Reseta QRx. All Rights
        Reserved</span
      >
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
    }
  },
  methods: {},
}
</script>
<style scoped>
.full {
  min-height: 70vh;
  transition: all 500ms;
}
#reseta {
  padding-top: 130px !important;
  background: #dedede;
  overflow: hidden !important;
}
.no-container {
  padding: 0 !important;
}
</style>
