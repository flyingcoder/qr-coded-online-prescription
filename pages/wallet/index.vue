<template>
  <div id="wallet">
    <v-row class="justify-center">
      <div class="wallet-title">CHECKOUT</div>
    </v-row>
    <!--
    <v-row>
      <div class="wallet-title align-baseline d-flex full-width">
        <div class="wallet-title-main-amout-title">
          <span class="wallet-title-e">e</span> - WALLET
        </div>
        <div class="wallet-title-amount">
          &nbsp;Balance <br /><span class="wallet-main-balance"
            >₱{{ amount }}</span
          >
        </div>
      </div>
    </v-row>
    <v-row class="justify-center" style="padding-top: 40px">
      <nuxt-link to="/">
        <v-btn
          depressed
          color="#1ac6b6"
          width="100%"
          min-width="300px"
          class="btn-radius"
          style="color: white"
        >
          Deposit
        </v-btn>
      </nuxt-link>
    </v-row>
    -->
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
    <PaymentMethod />
    -->
  </div>
</template>
<script src="./wallet.js"></script>
<style src="./wallet.scss" lang="scss"></style>
