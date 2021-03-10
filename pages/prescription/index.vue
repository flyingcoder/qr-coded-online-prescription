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
    <v-row class="justify-end">
      <div class="ordered-total">
        <h3>Total</h3>
      </div>
    </v-row>
    <div class="payments-total-payment-section">
      <div
        v-for="payment in payments"
        :key="payment.id"
        class="ordered-payment-cost"
      ></div>
      <v-divider></v-divider>
    </div>
  </div>
</template>

<script src="./prescription.js"></script>

<style src="./prescription.scss" lang="scss" scoped></style>
