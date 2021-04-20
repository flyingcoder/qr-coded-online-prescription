<template>
  <div class="wallet-payment-method">
    <v-row class="d-block">
      <v-divider></v-divider>
      <h4 class="padding-content">SELECT PAYMENT METHOD</h4>
      <v-divider></v-divider>
      <h5 class="padding-content">Recommended methods</h5>
    </v-row>
    <v-row justify="center">
      <v-expansion-panels accordion>
        <v-expansion-panel v-for="(item, i) in payment_method" :key="i.id">
          <v-expansion-panel-header
            ><v-icon class="wallet-dropdown-icon">{{ item.icon }}</v-icon>
            <div class="wallet-accordion-title">
              {{ item.title }}
            </div></v-expansion-panel-header
          >
          <v-expansion-panel-content>
            <div class="wallet-main-icon">
              <v-icon large>{{ item.icon_inner }}</v-icon>
            </div>
            <div class="wallet-content full-width">
              <div v-if="item.content" class="wallet-main-content full-width">
                {{ item.content }}
              </div>

              <div v-if="item.cancel" class="d-flex justify-center">
                <v-btn
                  elevation="2"
                  text
                  tile
                  class="margin-right-sm"
                  @click="snackbar = true"
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
                  <v-text-field label="Card Number"></v-text-field>
                  <v-text-field
                    label="Name on Card"
                    class="margin-top-pull"
                  ></v-text-field>
                  <div class="d-flex margin-top-pull">
                    <v-text-field
                      label="Expiration (MM/YY)"
                      style="width: 45%"
                      class="card-secondary-input"
                    ></v-text-field>
                    <v-text-field
                      label="CVV"
                      style="width: 45%"
                      class="card-secondary-input"
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
              >
                <v-btn elevation="2" text tile>{{ item.confirm }}</v-btn>
              </div>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <v-snackbar v-model="snackbar" color="green">
        You have successfully paid
        <template #action="{ attrs }">
          <nuxt-link to="patient">
            <v-btn color="white" text v-bind="attrs"> Dashboard </v-btn>
          </nuxt-link>
        </template>
      </v-snackbar>
    </v-row>
  </div>
</template>
<script>
export default {
  name: 'PaymentMethod',
  data() {
    return {
      payment_method: [
        {
          id: 1,
          icon: 'mdi-wallet-outline',
          icon_inner: '',
          title: 'Reseta e-Wallet',
          content: '<div class="paynow-button text-center-pd">PAY NOW</div>',
          cancel: 'Cancel',
          yes: 'Yes',
        },
        {
          id: 2,
          icon: 'mdi-credit-card-multiple',
          icon_inner: '',
          title: 'Credit / Debit Card',
          confirm: 'CONFIRM SELECTION',
          credit: 'Add new Card',
        },
        {
          id: 3,
          icon: 'mdi-account-cash',
          icon_inner: 'mdi-account-cash',
          title: 'GCash e-Wallet',
          content:
            'You can now use your GCash balance in Reseta. You will redirected to the GCash website to finish the payment.',
          confirm: 'CONFIRM SELECTION',
        },
        {
          id: 4,
          icon: 'mdi-cash',
          icon_inner: 'mdi-cash',
          title: 'Cash On Delivery',
          image: 'https://img.icons8.com/carbon-copy/100/000000/gcash.png',
          content:
            'Security Advicosry Pharmacy are not allowed tp ask you to order and transact your payments outside the platform.<br><br>When using our cash on Delivery services, payments is given to our official delivery partner upon to receipt of item.',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.v-expansion-panel-content__wrap {
  display: flex !important;
  .wallet-main-content {
    font-size: 14px;
    padding: 10px 0px 15px 10px;
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
