<template>
  <div class="reseta-preloader">
    <!-- <v-skeleton-loader v-bind="attrs" type="date-picker"></v-skeleton-loader> -->
    <v-dialog v-model="preloader.showing" fullscreen persistent>
      <v-skeleton-loader
        class="mb-6"
        :boilerplate="boilerplate"
        elevation-2
        type="date-picker, article"
      ></v-skeleton-loader>
    </v-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Preloader',
  data() {
    return {
      boilerplate: true,
    }
  },
  computed: {
    ...mapState({
      preloader: (state) => state.preloader,
    }),
  },
}
</script>

<style lang="scss" scoped></style>
