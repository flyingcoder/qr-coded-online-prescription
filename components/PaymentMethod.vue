<template>
  <div class="wallet-payment-method">
    <v-dialog
      v-model="payment_form"
      transition="dialog-bottom-transition"
      max-width="600"
    >
      <PaymentForm @closed="closePayment" />
    </v-dialog>
    <v-row class="d-block">
      <h4 class="wallet-title">{{ title }}</h4>
    </v-row>
    <v-row justify="center">
      <v-expansion-panels v-model="defaultPanel">
        <v-expansion-panel
          v-for="item in payment_method"
          :id="item.id"
          :key="item.id"
        >
          <v-expansion-panel-header>
            <img
              v-if="item.id == 'gcash'"
              class="wallet-dropdown-icon"
              :src="item.icon"
            />
            <v-icon v-else large class="wallet-dropdown-icon">{{
              item.icon
            }}</v-icon>
            <div class="wallet-accordion-title">
              {{ item.title }}
            </div></v-expansion-panel-header
          >
          <v-expansion-panel-content
            v-if="item.content"
            class="gcash-payment-method-content"
          >
            <div v-if="item.icon_inner" class="d-flex justify-center">
              <img :src="item.icon_inner" alt="" width="200px" />
            </div>
            <div class="wallet-content full-width">
              <div
                class="wallet-main-content full-width"
                style="text-align: center; font-size: 18px"
              >
                {{ item.content }}
                <table v-if="item.id == 'cod'" class="cod-table">
                  <tr>
                    <td class="text-left cod-table-title">GutomKa Express</td>
                    <td class="text-right">09123456789</td>
                  </tr>
                  <tr>
                    <td class="text-left cod-table-title">Food Panda</td>
                    <td class="text-right">09876543210</td>
                  </tr>
                </table>
              </div>
              <div v-if="item.cancel" class="d-flex justify-center">
                <v-btn
                  elevation="2"
                  text
                  tile
                  class="margin-right-sm"
                  @click="cancel"
                  >{{ item.yes }}</v-btn
                >
                <v-btn elevation="2" text tile>{{ item.cancel }}</v-btn>
              </div>
              <!-- <div v-if="item.credit" class="credit-card">
                <div class="credit-card-image">
                  <img width="40px" src="~/assets/icons/symbols.svg" />
                  <img width="40px" src="~/assets/icons/master.svg" />
                </div>
                <div class="credit-card-input">
                  <v-text-field
                    label="Card Number"
                    type="number"
                  ></v-text-field>
                  <v-text-field
                    label="Name on Card"
                    class="margin-top-pull"
                  ></v-text-field>
                  <div class="d-flex margin-top-pull">
                    <v-text-field
                      label="Expiration (MM/YY)"
                      style="width: 45%; margin-right: 10px"
                      type="date"
                      class="card-secondary-input"
                    ></v-text-field>
                    <v-text-field
                      label="CVV"
                      style="width: 45%"
                      class="card-secondary-input"
                      type="number"
                    ></v-text-field>
                  </div>
                </div>
                <div class="credit-card-description">
                  Save Card
                  <p>Information in incrypted and securely stored</p>
                  <div class="information-switch">
                    <v-switch
                      v-model="ex11"
                      value="red"
                      hide-details
                    ></v-switch>
                  </div>
                </div>
              </div> -->
              <div
                v-if="item.confirm"
                class="wallet-confirm-selection text-center-pd pb-5"
              >
                <v-btn
                  v-if="item.id == 'gcash'"
                  elevation="2"
                  text
                  tile
                  class="dark"
                  @click="paymentForm"
                  >{{ item.confirm }}</v-btn
                >
                <v-btn
                  v-else
                  elevation="2"
                  text
                  tile
                  class="dark"
                  @click="proceedToOrder(item.id)"
                  >{{ item.confirm }}</v-btn
                >
              </div>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </div>
</template>
<script>
export default {
  name: 'PaymentMethod',
  props: {
    title: {
      type: String,
      default() {
        return 'AVAILABLE PAYMENT METHOD'
      },
    },
    listorder: {
      type: Object,
    },
  },
  data() {
    return {
      defaultPanel: 0,
      ex11: '',
      payment_form: false,
      payment_method: [
        {
          id: 'gcash',
          icon: '/_nuxt/assets/images/gcash-icon-small.png',
          icon_inner: '/_nuxt/assets/images/gcash-icon.png',
          title: 'GCash e-Wallet',
          content:
            'Reseta Qrx can now accept payment using GCash. You will be redirected to the GCash website to finish the payment.',
          confirm: 'Use GCash',
        },
        {
          id: 'cod',
          icon: 'mdi-truck',
          icon_inner: 'mdi-truck',
          title: 'Cash On Delivery',
          content: 'Please contact your local delivery service.',
          confirm: 'Proceed to Order',
        },
        {
          id: 'ptp',
          icon: 'mdi-account-cash',
          icon_inner: 'mdi-account-cash',
          title: 'Pay To Pharmacy',
          content: 'Pay directly to Pharmacy.',
          confirm: 'Proceed to Order',
        },
      ],
    }
  },
  methods: {
    checkIndex(index) {
      console.log(index)
    },
    pay(method) {
      this.$emit('methodconfirm', method)
    },
    paymentForm() {
      this.payment_form = true
    },
    closePayment() {
      this.payment_form = false
    },
    proceedToOrder(val) {
      const order = {
        items: this.listorder.items,
        doctor_id: this.listorder.doctor_id,
        total: this.listorder.total,
        prescription_id: this.listorder.prescription_id,
        payment_method: val,
      }
      this.$axios.post('checkout/order', order).then((data) => {
        this.$store.dispatch('snackbar/setSnackbar', {
          text: 'Payment successful!',
        })
        this.$router.push('orders')
        this.resetCart()
      })
    },
    resetCart() {
      window.localStorage.removeItem('cart')
    },
  },
}
</script>
<style lang="scss" scoped>
.wallet-payment-method {
  margin-bottom: 50px;
}
.v-expansion-panels {
  border-bottom: 1px solid #e4e4e4;
  border-radius: 0px;
  margin: 0 12px;
}
.cod-table {
  width: 100%;
  max-width: 330px;
  justify-content: space-between;
  margin: 0 auto;
  font-size: 0.95rem;
}
.cod-table-title:before {
  content: '\A';
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #1ac6b6;
  margin-right: 5px;
  display: inline-block;
}
.v-expansion-panel--active:not(:first-child),
.v-expansion-panel--active + .v-expansion-panel {
  margin-top: 0;
}
.v-expansion-panel::before {
  box-shadow: none;
}
.v-expansion-panel-header {
  border-bottom: 1px solid #e4e4e4;
  border-radius: 0px;
  padding: 0;
}
.v-expansion-panel-content__wrap {
  display: flex !important;
  .wallet-main-content {
    font-size: 14px;
    padding: 0px 10px 20px 10px;
  }
  .paynow-button {
    font-size: 17px;
  }
}
.information-switch {
  position: absolute;
  right: 25px;
  top: 260px;
}
.card-secondary-input .v-input__slot {
  width: 80%;
}
.card-secondary-input .v-text-field__slot,
input#input-89 {
  width: 10px !important;
}
.active {
  display: none !important;
}
.wallet-dropdown-icon,
i.wallet-dropdown-icon {
  flex-grow: 0;
  width: 50px;
  font-size: 50px;
  color: $primary-color;
}
.wallet-accordion-title {
  padding-left: 1rem;
}
.wallet-title {
  .wallet-title-e {
    font-size: 35px;
  }
  .wallet-title-amount {
    font-size: 20px;
    padding-right: 10px;
    width: 50%;
    text-align: right;
  }
  .wallet-title-main-amout-title {
    width: 50%;
    padding-left: 10px;
  }
}

.gcash-payment-method-content {
  .v-expansion-panel-content__wrap {
    padding: 0 !important;
  }
}
</style>
