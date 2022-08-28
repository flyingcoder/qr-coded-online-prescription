<template>
  <div class="reseta-preloader">
    <!-- <v-skeleton-loader v-bind="attrs" type="date-picker"></v-skeleton-loader> -->
    <loader
      object="#1ac6b6"
      color1="#ffffff"
      color2="#17fd3d"
      size="5"
      speed="3"
      bg="#343a40"
      objectbg="#999793"
      opacity="62"
      disable-scrolling="false"
      name="circular"
    ></loader>
  </div>
</template>

<script>
export default {
  name: 'Preloader',
  data() {
    return {
      loading: false,
    }
  },
  computed: {},
  mounted() {},
  methods: {
    start() {
      this.loading = true
    },
    stop() {
      this.loading = false
    },
  },
}
</script>

<style lang="scss" scoped></style>
