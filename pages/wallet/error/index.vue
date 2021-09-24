<template>
  <div class="success-page py-10">
    <div class="header-success d-block justify-center">
      <div class="d-flex justify-center pb-5">
        <div>
          <img src="~/assets/images/main-logo.png" width="70px" alt="" />
        </div>
        <div
          class="align-center d-flex pl-3"
          style="font-weight: 700; font-size: 20px"
        >
          Reseta Qrx
        </div>
      </div>
      <div class="d-flex justify-center">
        <v-icon size="80px" color="red">mdi-alert-circle</v-icon>
      </div>
      <div
        class="d-flex justify-center"
        style="font-weight: 700; font-size: 18px"
      >
        Payment Failed
      </div>
      <div
        class="d-block order-content text-center"
        style="width: 85%; margin: auto"
      >
        There is an issue in this payment method. Please try another method.
      </div>
      <div class="d-flex justify-center pt-10">
        <v-btn color="#1ac6b6" to="/wallet" style="color: white" elevation="0"
          >Try Again</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Success',
  layout: 'search-notification',
  data() {
    return {
      medicine_ordered: [
        {
          id: 1,
          name: 'Paracetamol',
          price: '5.00',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
