<template>
  <div id="wallet">
    <v-dialog
      v-model="payment_short_form"
      transition="dialog-bottom-transition"
      max-width="600"
    >
      <PaymentShortForm @closed="closePayment" />
    </v-dialog>
    <h3 class="mt-0 mb-4 wallet-title">My Wallet</h3>
    <v-tabs
      v-model="tab"
      background-color="transparent"
      centered
      style="width: 80%; display: flex; margin: auto"
      grow
    >
      <v-tab> Balance </v-tab>
      <v-tab> Transactions </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab" style="margin: 0 20px">
      <v-tab-item>
        <br />
        <div class="d-flex justify-center">
          <v-btn
            elevation="2"
            class="ma-2 wallet-title wallet-main-balance"
            x-large
            style="font-size: 30px"
            :class="{ pay_button: $auth.user.balance >= 1000 }"
            :disabled="$auth.user.balance < 1000"
            @click="paymentShortForm"
            >₱ {{ $auth.user.balance }}</v-btn
          >
        </div>
        <br />
        <PaymentMethod
          title="AVAILABLE DEPOSIT METHOD"
          @methodconfirm="processPayment"
        />
      </v-tab-item>
      <v-tab-item>
        <br />
        <v-simple-table>
          <thead>
            <tr>
              <th class="text-left">Date</th>
              <th class="text-left">Desc.</th>
              <th class="text-left">Amount</th>
              <th class="text-left">Balance</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in history" :key="item.date">
              <td>{{ moment(item.created_at).format('ll') }}</td>
              <td>{{ item.transaction }}</td>
              <td>{{ item.amount }}</td>
              <td>{{ item.balance }}</td>
            </tr>
          </tbody>
        </v-simple-table>
        <br />
        <div v-if="history.length == 0" class="text-center">
          You don't have wallet history yet
        </div>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script src="./wallet.js"></script>
<style src="./wallet.scss" lang="scss"></style>
