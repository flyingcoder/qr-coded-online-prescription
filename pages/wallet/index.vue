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
      <v-tab>
        <span v-if="$auth.user.role == 'pharmacy'">Load Balance</span>
        <span v-else> Rebates </span>
      </v-tab>
      <v-tab>
        <span v-if="$auth.user.role == 'pharmacy'"> Transactions </span>
        <span v-else>Professional Fee</span>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab" style="margin: 0 20px">
      <v-tab-item>
        <br />
        <div class="d-flex justify-center">
          <div
            v-if="$auth.user.role == 'pharmacy'"
            style="font-size: 18px"
            class="font-weight-medium"
          >
            Your load Balance is ₱{{ $auth.user.balance }}
          </div>
          <v-btn
            v-else
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
          v-if="$auth.user.role == 'patient'"
          title="AVAILABLE DEPOSIT METHOD"
          @methodconfirm="processPayment"
        />
        <div v-else>
          <v-simple-table v-if="$auth.user.role == 'pharmacy'">
            <thead>
              <tr>
                <th class="text-center">Date</th>
                <th class="text-center">Method</th>
                <th class="text-center">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in history" :key="item.date">
                <td class="text-center">
                  {{ item.created_at | readableDate }}
                </td>
                <td class="text-center">{{ item.transaction }}</td>
                <td class="text-center">{{ item.amount }}</td>
              </tr>
            </tbody>
          </v-simple-table>
          <v-simple-table v-if="$auth.user.role == 'doctor'">
            <thead>
              <tr>
                <th class="text-center">Date</th>
                <th class="text-center">Time</th>
                <th class="text-center">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in history" :key="item.date">
                <td class="text-center">
                  {{ item.created_at | readableDate }}
                </td>
                <td class="text-center">{{ item.transaction }}</td>
                <td class="text-center">{{ item.amount }}</td>
              </tr>
            </tbody>
          </v-simple-table>
          <br />
          <div v-if="history.length == 0" class="text-center">
            You don't have wallet history yet
          </div>
          <!-- <v-divider style="border-width: 2px"></v-divider>
          <div v-for="item in items" :key="item">
            <div class="text-center">
              {{ item.date }} Loaded thru {{ item.method }} ₱{{ item.amount }}
            </div>
            <v-divider></v-divider>
          </div> -->
        </div>
      </v-tab-item>
      <v-tab-item>
        <br />
        <div
          v-if="$auth.user.role == 'pharmacy'"
          style="font-size: 18px"
          class="font-weight-medium text-center"
        >
          Your total transaction amount is ₱{{ $auth.user.balance }}
        </div>
        <br />
        <v-simple-table v-if="$auth.user.role == 'pharmacy'">
          <thead>
            <tr>
              <th class="text-center">Date</th>
              <th class="text-center">Transaction ID</th>
              <th class="text-center">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in history" :key="item.date">
              <td class="text-center">{{ item.created_at | readableDate }}</td>
              <td class="text-center">{{ item.transaction }}</td>
              <td class="text-center">{{ item.amount }}</td>
            </tr>
          </tbody>
        </v-simple-table>
        <v-simple-table v-if="$auth.user.role == 'doctor'">
          <thead>
            <tr>
              <th class="text-left">Date</th>
              <th class="text-left">Time</th>
              <th class="text-left">AMount Pay to</th>
              <th class="text-left">Patient</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in history" :key="item.date">
              <td>{{ item.created_at | readableDate }}</td>
              <td>{{ item.transaction }}</td>
              <td>{{ item.amount }}</td>
              <td>{{ item.balance }}</td>
            </tr>
          </tbody>
        </v-simple-table>
        <br />
        <div v-if="history.length == 0" class="text-center">
          <span v-if="$auth.user.role != 'pharmacy'"
            >You don't have wallet history yet</span
          >
          <span v-else
            >You don't have a purchase transactions history yet!</span
          >
        </div>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script src="./wallet.js"></script>
<style src="./wallet.scss" lang="scss"></style>
