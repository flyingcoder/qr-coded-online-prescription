<template>
  <div id="wallet">
    <div class="d-flex justify-center pb-8">
      <div class="store-img d-flex align-center">
        <img
          src="/_nuxt/assets/images/avatar.png"
          style="width: 60px !important; height: 60px !important"
          class="user-icon mr-5"
          alt=""
        />
      </div>
      <div class="store-info">
        <div class="d-flex" style="font-size: 23px; font-weight: bold">
          Mercury Drug
        </div>
        <div class="d-flex">Kidapawan City</div>
      </div>
    </div>
    <v-row class="justify-center">
      <h3 class="wallet-title">Checkout</h3>
    </v-row>
    <v-divider></v-divider>
    <table class="ordered-table">
      <tr>
        <th>Medicines</th>
        <th class="text-center" style="width: 15%">Qty</th>
        <th style="text-align: center">Actions</th>
      </tr>
      <tr
        v-for="(med, index) in cart.meds"
        :key="index + 'span'"
        class="ordered-product"
      >
        <td>{{ index + 1 }}.) {{ med.name }}</td>
        <td class="text-center">
          <span class="ordered-quantitity">{{ med.qty }}</span>
        </td>
        <td class="options text-center">
          <v-btn icon @click="med.qty += 1"
            ><v-icon color="green" size="30"
              >mdi-plus-circle-outline</v-icon
            ></v-btn
          >
          <v-btn
            icon
            @click="
              {
                med.qty != 1 ? (med.qty -= 1) : ''
              }
            "
            ><v-icon color="red" size="30"
              >mdi-minus-circle-outline</v-icon
            ></v-btn
          >
        </td>
      </tr>
    </table>
    <v-row class="justify-center">
      <h3>Order Summary</h3>
    </v-row>
    <v-divider></v-divider>
    <table class="ordered-table">
      <tr class="ordered-table-header">
        <th>Medicines</th>
        <th>₱</th>
        <th class="text-center" style="width: 20%">Qty</th>
        <th style="width: 20%" class="total">Total</th>
      </tr>
      <tr
        v-for="(med, index) in cart.meds"
        :key="index + 'div'"
        class="dispense"
      >
        <td>{{ med.name }}</td>
        <td>₱{{ parseFloat(med.price).toFixed(2) }}</td>
        <td class="text-center">
          <span class="ordered-quantitity">{{ med.qty }}</span>
        </td>
        <td>₱{{ total_price(med).toFixed(2) }}</td>
      </tr>
      <tr>
        <td></td>
        <td class="text-right total" colspan="2">Subtotal&nbsp;&nbsp;</td>
        <td>₱{{ parseFloat(total_quantity_amount).toFixed(2) }}</td>
      </tr>
      <!-- tr class="service-fee">
        <td>Service Fee</td>
        <td></td>
        <td></td>
        <td></td>
        <td>₱{{ parseFloat(service_fee).toFixed(2) }}</td>
      </!-->
      <tr class="overall-total">
        <td></td>
        <td class="text-right total" colspan="2">Grand Total&nbsp;&nbsp;</td>
        <td>₱{{ parseFloat(overall_total).toFixed(2) }}</td>
      </tr>
    </table>
    <br />
    <PaymentMethod :listorder="order" @methodconfirm="processPayment" />
  </div>
</template>
<script src="./checkout.js"></script>
<style src="./checkout.scss" lang="scss"></style>
