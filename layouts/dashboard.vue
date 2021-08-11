<template>
  <v-app dark>
    <PatientHeader v-if="$auth.user.role == 'patient'" />
    <PharmacyHeader v-if="$auth.user.role == 'pharmacy'" />
    <DoctorHeader v-if="$auth.user.role == 'doctor'" />
    <v-main id="reseta">
      <div ref="full" class="full" @touchstart="nextPage">
        <v-container
          :class="{
            'no-container':
              $nuxt.$route.path == '/drugs' || $nuxt.$route.path == '/doctors',
          }"
        >
          <nuxt />
        </v-container>
      </div>
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
      routes: [
        'dashboard',
        'prescription-form',
        'all-medicines',
        'patients',
        'prescriptions',
        'wallet',
        'settings',
      ],
      patient: [
        'dashboard',
        'prescriptions',
        'pharmacy',
        'doctors',
        'wallet',
        'settings',
      ],
      pharmacy: [
        'dashboard',
        'dispense',
        'orders',
        'medicine',
        'all-medicines',
        'sales-report',
        'wallet',
        'settings',
      ],
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
  mounted() {},
  methods: {
    nextPage(touchEvent) {
      if (touchEvent.changedTouches.length !== 1) {
        // We only care if one finger is used
        return
      }
      const posXStart = touchEvent.changedTouches[0].clientX
      addEventListener(
        'touchmove',
        (touchEvent) => this.touchMove(touchEvent, posXStart),
        {
          once: true,
        }
      )
      addEventListener(
        'touchend',
        (touchEvent) => this.touchEnd(touchEvent, posXStart),
        {
          once: true,
        }
      )
    },
    touchMove(touchEvent, posXStart) {
      if (touchEvent.changedTouches.length !== 1) {
        // We only care if one finger is used
        return
      }

      const posXEnd = touchEvent.changedTouches[0].clientX
      let pos = 0
      if (posXStart < posXEnd) {
        // swipe right
        pos = '100px'
      } else if (posXStart > posXEnd) {
        // swipe left
        pos = '-100px'
      }
      if (this.$route.name === 'dashboard') {
        if (touchEvent.target === this.$refs.full)
          this.$refs.full.style.transform = 'translate3D(' + pos + ', 0px, 0px)'
      } else {
        this.$refs.full.style.transform = 'translate3D(' + pos + ', 0px, 0px)'
      }
    },
    reRoute(xs, xe) {
      switch (this.$auth.user.role) {
        case 'pharmacy':
          this.routes = this.pharmacy
          break
        case 'patient':
          this.routes = this.patient
          break
      }

      const diff = Math.abs(xs - xe)

      if (diff > 100) {
        if (xs < xe) {
          // swipe right
          this.$router.back()
        } else if (xs > xe) {
          // swipe left
          this.$router.push(
            this.routes[this.routes.indexOf(this.$route.name) + 1]
          )
        }
      }
    },
    touchEnd(touchEvent, posXStart) {
      if (touchEvent.changedTouches.length !== 1) {
        // We only care if one finger is used
        return
      }
      const posXEnd = touchEvent.changedTouches[0].clientX

      this.$refs.full.style.transform = 'translate3D(0px, 0px, 0px)'

      if (this.$route.name === 'dashboard') {
        if (touchEvent.target === this.$refs.full) {
          this.reRoute(posXStart, posXEnd)
        }
      } else {
        this.reRoute(posXStart, posXEnd)
      }
    },
  },
}
</script>
<style>
.full {
  min-height: 70vh;
  transition: all 500ms;
}
#reseta {
  padding-top: 130px !important;
}
.no-container {
  padding: 0 !important;
}
</style>
