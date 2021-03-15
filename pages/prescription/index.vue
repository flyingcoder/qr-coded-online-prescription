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
      <tr v-for="order in ordered" :key="order.id" class="ordered-product">
        <td>{{ order.id }}) {{ order.name }}</td>
        <td>{{ order.dose }}</td>
        <td>
          <span class="ordered-quantitity">{{ order.counter }}</span>
        </td>
        <td class="options text-center">
          <v-btn icon
            ><v-icon color="green" size="30"
              >mdi-plus-circle-outline</v-icon
            ></v-btn
          >
          <v-btn icon
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
        <td>₱ {{ payment.price }}</td>
        <td>Qty: {{ payment.qty }}</td>
        <td>₱ {{ payment.total }}</td>
      </tr>
      <tr class="total">
        <td></td>
        <td></td>
        <td>Total</td>
        <td>Qty: 65</td>
        <td>₱ 210</td>
      </tr>
      <tr class="service-fee">
        <td>Service Fee</td>
        <td></td>
        <td></td>
        <td></td>
        <td>₱ 4.20</td>
      </tr>
      <tr class="overall-total">
        <td></td>
        <td></td>
        <td></td>
        <td>Total</td>
        <td>₱ 308.00</td>
      </tr>
    </table>
    <!-- <div class="presc-header">
      <v-btn color="#7b7b7c" icon>
        <v-icon>mdi-dots-horizontal</v-icon>
      </v-btn>
    </div>
    <div class="ordered-product-section">
      <v-row
        v-for="order in ordered"
        :key="order.id"
        class="ordered-product d-flex"
      >
        <v-col cols="8">
          <span class="ordered-title">{{ order.id }}) {{ order.name }}</span>
        </v-col>
        <v-col cols="2" class="text-center">
          <span class="ordered-quantitity">{{ counter }}</span>
        </v-col>
        <v-col cols="2" class="ordered-options text-center">
          <v-icon color="green">mdi-plus-circle-outline</v-icon>
          <v-icon color="red">mdi-minus-circle-outline</v-icon>
        </v-col>
      </v-row>
    </div>
    <div class="payments-total-payment-section">
      <div
        v-for="payment in payments"
        :key="payment.id"
        class="ordered-payment-cost"
      ></div>
    </div> -->
    <!-- <div class="total">
      <v-container>
        <v-row>
          <v-col cols="10"><v-cardd></v-cardd> </v-col>
          <v-col cols="2" class=""><v-cardd>Total</v-cardd></v-col>
        </v-row></v-container
      >
    </div>
    <div v-for="payment in payments" :key="payment.id" class="dispense">
      <v-container>
        <v-row>
          <v-col cols="4"
            ><v-cardd>
              {{ payment.name }}
            </v-cardd>
          </v-col>
          <v-col cols="2"
            ><v-cardd>
              {{ payment.dose }}
            </v-cardd>
          </v-col>
          <v-col cols="2"
            ><v-cardd>
              {{ payment.price }}
            </v-cardd>
          </v-col>
          <v-col cols="2"
            ><v-cardd>
              {{ payment.qty }}
            </v-cardd>
          </v-col>
          <v-col cols="2"
            ><v-cardd class="float-right">
              {{ payment.total }}
            </v-cardd>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="total">
      <v-container>
        <v-row>
          <v-col cols="6"><v-cardd> </v-cardd> </v-col>
          <v-col cols="2"><v-cardd> Total</v-cardd> </v-col>
          <v-col cols="2"><v-cardd> Qty:65</v-cardd> </v-col>
          <v-col cols="2 border-top"><v-cardd> ₱210</v-cardd> </v-col>
          <v-col cols="6"><v-cardd>Service fee</v-cardd> </v-col>
          <v-col cols="2"><v-cardd></v-cardd> </v-col>
          <v-col cols="2"><v-cardd></v-cardd> </v-col>
          <v-col cols="2" class="border-bottom"><v-cardd>₱4.20</v-cardd></v-col>
          <v-divider></v-divider> </v-row
      ></v-container>
    </div> -->
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
