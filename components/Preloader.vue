<template>
  <div class="reseta-preloader">
    <!-- <v-skeleton-loader v-bind="attrs" type="date-picker"></v-skeleton-loader> -->
    <v-dialog v-model="dialog" fullscreen persistent>
      <v-skeleton-loader
        v-bind="attrs"
        type="date-picker, article"
      ></v-skeleton-loader>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'Preloader',
  data() {
    return {
      dialog: true,
    }
  },
  attrs: {
    class: 'mb-6',
    boilerplate: true,
    elevation: 2,
  },
  methods: {},
}
</script>

<style lang="scss" scoped></style>
