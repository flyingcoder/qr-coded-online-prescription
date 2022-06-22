<template>
  <v-card>
    <v-toolbar color="#1ac6b6" class="text-center" dark>
      <div class="pl-3 payment-title">Payment Details</div>
      <v-spacer />
      <div>
        <v-btn icon dark @click="closePayment">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
    </v-toolbar>
    <v-card-text class="pb-0">
      <div class="payment-form pt-5">
        <div class="d-flex pb-4">
          <div class="payment-detail-title">Gcash</div>
        </div>
        <div class="payment-gcash-input payment-input-height">
          <v-text-field
            v-model="payment.phone_number"
            label="Gcash Phone Number"
            placeholder="e.g. 09057623564"
            type="number"
            outlined
            dense
          ></v-text-field>
        </div>
        <div class="d-flex pb-4">
          <div class="payment-detail-title">Bank Account</div>
        </div>
        <div class="payment-gcash-input payment-input-height">
          <v-text-field outlined dense label="Account Name"></v-text-field>
          <v-text-field outlined dense label="Bank Name"></v-text-field>
          <v-text-field
            outlined
            dense
            label="Account Number"
            type="number"
          ></v-text-field>
        </div>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn color="success" :disabled="!isDisabled" @click="submit"
        >Save Changes</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'PaymentDetails',
  data() {
    return {
      payment: [],
      gcashMethod: false,
      bankMethod: false,
      isDisabled: true,
    }
  },
  methods: {
    gcashPaymentMethod() {
      this.gcashMethod = !this.gcashMethod
      this.bankMethod = false
      this.isDisabled = !this.isDisabled
    },
    bankPaymentMethod() {
      this.bankMethod = !this.bankMethod
      this.gcashMethod = false
      this.isDisabled = !this.isDisabled
    },
    closePayment() {
      this.$emit('closed')
    },
    submit() {
      this.$axios.post('payment', this.payment).then((data) => {
        this.$store.dispatch('snackbar/setSnackbar', {
          text: `Successful payment`,
        })
        this.$emit('closed')
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.bank-account-fields {
  display: block;
  padding: 25px 0 0 0;
}
.payment-detail-title {
  font-size: 20px;
  font-weight: 600;
}
.payment-title {
  color: white !important;
  font-weight: 600 !important;
  font-size: 18px !important;
}
.gcash-logo {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
.payment-input-height {
  height: 60px;
}
</style>
