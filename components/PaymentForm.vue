<template>
  <v-card>
    <v-toolbar color="#1ac6b6" class="text-center" dark>
      <div class="pl-3 payment-title">Payment Form</div>
      <v-spacer />
      <div>
        <v-icon @click="closePayment">mdi-close</v-icon>
      </div>
    </v-toolbar>
    <v-card-text class="pb-0">
      <div class="payment-form pt-5">
        <div class="gcash-logo">
          <img src="@/assets/images/gcash-icon.png" width="200px" alt="" />
        </div>
        <div class="payment-fname-input payment-input-height">
          <v-text-field
            v-model="payment.fname"
            label="First Name"
            outlined
            dense
          ></v-text-field>
        </div>
        <div class="payment-lname-input payment-input-height">
          <v-text-field
            v-model="payment.lname"
            label="Last Name"
            outlined
            dense
          ></v-text-field>
        </div>
        <div class="payment-email-input payment-input-height">
          <v-text-field
            v-model="payment.email"
            label="Email"
            :rules="emailRules"
            outlined
            dense
          ></v-text-field>
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
      </div>
    </v-card-text>
    <v-card-actions class="justify-end pt-0">
      <v-btn text @click="submit">Submit</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'PaymentForm',
  data() {
    return {
      payment: [
        {
          fname: '',
          lname: '',
          email: '',
          phone_number: '',
        },
      ],
      emailRules: [
        (v) =>
          !v ||
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          'E-mail must be valid',
      ],
    }
  },
  methods: {
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
