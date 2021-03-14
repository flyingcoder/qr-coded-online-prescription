<template>
  <div id="dashboard">
    <v-row class="pharmacy-prescription-top-section justify-center">
      <h2>PRESCRIPTION</h2>
    </v-row>
    <v-row>
      <div class="width-fix">
        <v-app-bar flat color="rgba(0, 0, 0, 0)">
          <div class="user">
            <img
              class="user-icon"
              :src="require(`~/assets/images/${user.image}`)"
            />
          </div>

          <v-toolbar-title class="title pl-0">
            {{ user.name }}
          </v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn color="#7b7b7c" icon>
            <v-icon>mdi-dots-horizontal</v-icon>
          </v-btn>
        </v-app-bar>
      </div>
      <div class="ordered-product-section">
        <div
          v-for="order in ordered"
          :key="order.id"
          class="ordered-product-section d-flex"
        >
          <v-col cols="7">
            {{ order.name }}
          </v-col>
          <v-col cols="1">
            <span class="ordered-quantitity">{{ counter }}</span>
          </v-col>
          <v-col cols="4">
            <h4>Plus minus button here</h4>
          </v-col>
        </div>
      </div>
    </v-row>
    <v-divider></v-divider>
    <div class="payments-total-payment-section">
      <div
        v-for="payment in payments"
        :key="payment.id"
        class="ordered-payment-cost"
      ></div>
    </div>
    <div class="total">
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
    </div>
  </div>
</template>
<script src="./prescription.js"></script>

<style src="./prescription.scss" lang="scss" scoped></style>
