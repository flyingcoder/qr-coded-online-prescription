<template>
  <div class="wallet-payment-method">
    <v-row class="d-block">
      <h4 class="padding-content">SELECT PAYMENT METHOD</h4>
      <v-divider></v-divider>
      <h5 class="padding-content">Recommended methods</h5>
    </v-row>
    <v-row justify="center">
      <v-expansion-panels>
        <v-expansion-panel v-for="item in payment_method" :key="item.id">
          <v-expansion-panel-header
            ><img class="wallet-dropdown-icon" :src="item.icon" />
            <div class="wallet-accordion-title">
              {{ item.title }}
            </div></v-expansion-panel-header
          >
          <v-expansion-panel-content>
            <img :src="item.icon_inner" alt="" width="100%" />
            <div class="wallet-content full-width">
              <div
                v-if="item.content"
                class="wallet-main-content full-width"
                style="text-align: center; font-size: 18px"
              >
                {{ item.content }}
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
              <div v-if="item.credit" class="credit-card">
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
              </div>
              <div
                v-if="item.confirm"
                class="wallet-confirm-selection text-center-pd"
                @click="pay(item.id)"
              >
                <v-btn elevation="2" text tile>{{ item.confirm }}</v-btn>
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
  data() {
    return {
      ex11: '',
      payment_method: [
        {
          id: 'gcash',
          icon: '/_nuxt/assets/images/gcash-icon-small.png',
          icon_inner: '/_nuxt/assets/images/gcash-icon.png',
          title: 'GCash e-Wallet',
          content:
            'You can now use your GCash balance in Reseta. You will redirected to the GCash website to finish the payment.',
          confirm: 'CONFIRM SELECTION',
        },
        /** {
          id: 'reseta-credit',
          icon: 'mdi-wallet-outline',
          icon_inner: 'mdi-wallet-outline',
          title: 'Reseta e-Wallet',
          content: 'Paynow',
          cancel: 'Cancel',
          yes: 'Yes',
        },
        {
          id: 'cc',
          icon: 'mdi-credit-card-multiple',
          icon_inner: '',
          title: 'Credit / Debit Card',
          confirm: 'CONFIRM SELECTION',
          credit: 'Add new Card',
        }**/
      ],
    }
  },
  methods: {
    pay(method) {
      this.$emit('methodconfirm', method)
    },
  },
}
</script>
<style lang="scss" scoped>
.wallet-payment-method {
  margin-bottom: 50px;
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
.wallet-dropdown-icon {
  width: 10% !important;
  position: absolute !important;
}
.wallet-accordion-title {
  padding-left: 13%;
}
.wallet-title {
  font-size: 25px;
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
</style>
