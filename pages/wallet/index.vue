<template>
  <div id="wallet">
    <v-row class="justify-center">
      <div class="wallet-title">CHECKOUT</div>
    </v-row>
    <v-row>
      <div class="wallet-title align-baseline d-flex full-width">
        <div class="wallet-title-main-amout-title">
          <span class="wallet-title-e">e</span> - WALLET
        </div>
        <div class="wallet-title-amount">Balance ₱{{ amount }}</div>
      </div>
    </v-row>
    <table class="ordered-table">
      <tr v-for="order in payments" :key="order.id" class="ordered-product">
        <td>{{ order.id }}) {{ order.name }}</td>
        <td>{{ order.dose }}</td>
        <td>
          <span class="ordered-quantitity">{{ order.qty }}</span>
        </td>
        <td class="options text-center">
          <v-btn icon @click="order.qty += 1"
            ><v-icon color="green" size="30"
              >mdi-plus-circle-outline</v-icon
            ></v-btn
          >
          <v-btn icon @click="order.qty -= 1"
            ><v-icon color="red" size="30"
              >mdi-minus-circle-outline</v-icon
            ></v-btn
          >
        </td>
      </tr>
    </table>
    <table class="ordered-table">
      <tr class="ordered-table-header">
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th class="total">TOTAL</th>
      </tr>
      <tr v-for="payment in payments" :key="payment.id" class="dispense">
        <td>{{ payment.name }}</td>
        <td>{{ payment.dose }}</td>
        <td>₱ {{ parseFloat(payment.price).toFixed(2) }}</td>
        <td>Qty: {{ payment.qty }}</td>
        <td>₱ {{ total_price(payment).toFixed(2) }}</td>
      </tr>
      <tr class="total">
        <td></td>
        <td></td>
        <td>Total</td>
        <td>Qty: {{ total_quantity }}</td>
        <td>₱ {{ parseFloat(total_quantity_amount).toFixed(2) }}</td>
      </tr>
      <tr class="service-fee">
        <td>Service Fee</td>
        <td></td>
        <td></td>
        <td></td>
        <td>₱ {{ parseFloat(service_fee).toFixed(2) }}</td>
      </tr>
      <tr class="overall-total">
        <td></td>
        <td></td>
        <td></td>
        <td>Total</td>
        <td>₱ {{ parseFloat(overall_total).toFixed(2) }}</td>
      </tr>
    </table>
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
                <div
                  class="wallet-main-content full-width"
                  v-html="item.content"
                ></div>

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
  </div>
</template>
<script src="./wallet.js"></script>
<style src="./wallet.scss" lang="scss"></style>
