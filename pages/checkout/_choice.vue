<template>
  <div class="add-medicine"></div>
</template>

<script>
export default {
  layout: 'dashboard',
  middleware: 'auth',
  data() {
    return {
      medicine: {
        image: 'default-medicine-image.png',
      },
      stores: [],
    }
  },
  mounted() {
    this.getMedDetails()
  },
  methods: {
    async getMedDetails() {
      await this.$axios
        .get('medicines/' + this.$route.params.view_medicine)
        .then((data) => {
          this.medicine = data.data
          this.stores = data.data.stores
        })
    },
    back() {
      this.$router.back()
    },
  },
}
</script>

<style lang="scss" scoped></style>
