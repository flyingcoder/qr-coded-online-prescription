<template>
  <v-app dark>
    <PatientHeader v-if="$auth.user.role == 'patient'" />
    <PharmacyHeader v-if="$auth.user.role == 'pharmacy'" />
    <DoctorHeader v-if="$auth.user.role == 'doctor'" />
    <v-main id="reseta">
      <v-container
        :class="{
          'no-container':
            $nuxt.$route.path == '/drugs' || $nuxt.$route.path == '/doctors',
        }"
      >
        <nuxt />
      </v-container>
    </v-main>
    <Snackbar />
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
    <v-footer :absolute="!fixed" app>
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
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>
<style>
#reseta {
  padding-top: 130px !important;
}
.no-container {
  padding: 0 !important;
}
</style>
