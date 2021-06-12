<template>
  <div class="prescription-payment">
    <v-card>
      <v-card-text>
        <div class="d-flex justify-center">
          <img width="20%" src="~/assets/images/main-logo.png" />
          <span class="payment-popup-logo-text">Reseta QRx</span>
        </div>
        <div class="payment-content d-flex justify-center">
          Please Procced the Payment
        </div>
      </v-card-text>
      <v-card-actions class="justify-end payment-button">
        <v-btn width="100%" style="background: #1ac6b6; color: white"
          >Pay Now</v-btn
        >
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'PayPrescription',
  data() {
    return {
      dialog: true,
    }
  },
}
</script>

<style lang="scss" scoped>
.payment-content {
  font-size: 18px;
  margin: 20px 0;
}
.payment-popup-logo-text {
  display: flex;
  align-self: center;
  font-size: 18px;
  margin-left: 10px;
  font-weight: 500;
}
</style>
