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
              v-if="
                rx.doctor.avatar == 'avatar.png' ||
                rx.doctor.avatar ==
                  'https://api.resetaqrx.com/storage/users/user-default.png'
              "
              class="user-icon"
              :src="require(`~/assets/images/` + rx.doctor.avatar)"
              :alt="rx.doctor.fullname"
            />
            <img
              v-else
              class="user-icon"
              :src="rx.doctor.avatar"
              :alt="rx.doctor.fullname"
            />
            {{ rx.doctor.fullname }}
          </div>
        </th>
        <th class="options text-center">
          <v-btn color="#7b7b7c" icon>
            <v-icon>mdi-dots-horizontal</v-icon>
          </v-btn>
        </th>
      </tr>
      <tr v-for="med in rx.prescribe" :key="med.id" class="ordered-product">
        <td>{{ med.id }}) {{ med.name }}</td>
        <td>{{ med.dosage }}</td>
        <td>
          <span class="ordered-quantitity">{{ med.pivot.qty }}</span>
        </td>
        <td class="options text-center">
          <v-btn icon @click="med.pivot.qty += 1"
            ><v-icon color="green" size="30"
              >mdi-plus-circle-outline</v-icon
            ></v-btn
          >
          <v-btn icon @click="med.pivot.qty -= 1"
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
      <tr v-for="payment in rx.prescribe" :key="payment.id" class="dispense">
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
<script src="./single-prescription.js"></script>

<style src="./single-prescription.scss" lang="scss" scoped></style>
