<template>
  <v-card>
    <v-card-text class="pb-0">
      <div class="payment-form-section pt-5">
        <v-btn color="success" @click="gcashPaymentMethod"> GCash</v-btn>
        <v-btn color="success" @click="bankPaymentMethod">Bank Account</v-btn>
        <div class="payment-form-fields">
          <v-text-field
            v-if="gcashMethod"
            class="pt-7"
            outlined
            dense
            pattern="^(09|\+639)\d{9}$"
            label="Cell Number: "
            type="tel"
          ></v-text-field>
          <div v-if="bankMethod" class="bank-account-fields">
            <v-text-field outlined dense label="Account Name: "></v-text-field>
            <v-text-field outlined dense label="Bank Name: "></v-text-field>
            <v-text-field
              outlined
              dense
              label="Account Number: "
              type="number"
              :rules="[numberRule]"
            ></v-text-field>
          </div>
        </div>
      </div>
    </v-card-text>
    <v-card-actions class="pt-0 justify-end">
      <v-btn color="success" :disabled="!isDisabled" @click="submit"
        >Confirm</v-btn
      >
      <v-btn color="success" @click="closePayment">Cancel</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'PaymentShortForm',
  data() {
    return {
      payment: [],
      gcashMethod: false,
      bankMethod: false,
      isDisabled: false,
      emailRules: [
        (v) =>
          !v ||
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          'E-mail must be valid',
      ],
      numberRule: (v) => {
        if (!isNaN(parseFloat(v)) && v >= 1 && v <= 99) return true
        return 'Invalid'
      },
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
