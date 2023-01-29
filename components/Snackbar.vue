<template>
  <div>
    <v-snackbar
      v-for="(snackbar, index) in snackbars.filter((s) => s.showing)"
      :key="snackbar.text + Math.random()"
      v-model="snackbar.showing"
      :timeout="snackbar.timeout"
      top
      :color="snackbar.color"
      :style="`bottom: ${index * 60 + 8}px`"
    >
      <span style="color: white !important">{{ snackbar.text }}</span>

      <v-btn
        v-if="$nuxt.$route.name != 'prescription-form-id'"
        color="white"
        text
        @click="snackbar.showing = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      snackbars: (state) => state.snackbar.snackbars,
    }),
  },
}
</script>

<style lang="scss" scoped></style>
