<template>
  <div id="prescriptions">
    <v-row class="pharmacy-prescription-top-section justify-center">
      <h2>PRESCRIPTION</h2>
    </v-row>
    <table class="ordered-table">
      <tr>
        <th colspan="3">
          <div class="user-inline">
            <img
              class="user-icon"
              :src="require(`~/assets/images/${user.image}`)"
            />
            {{ user.name }}
          </div>
        </th>
        <th class="options text-center">
          <v-btn color="#7b7b7c" icon>
            <v-icon>mdi-dots-horizontal</v-icon>
          </v-btn>
        </th>
      </tr>
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
    <div class="dispense text-center">
      <v-btn
        depressed
        color="#B2EBF2"
        width="80%"
        min-width="300px"
        class="btn-radius"
      >
        DISPENSE
      </v-btn>
    </div>
  </div>
</template>
<script src="./prescription.js"></script>

<style src="./prescription.scss" lang="scss" scoped></style>
