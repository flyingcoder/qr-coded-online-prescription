<template>
  <div id="prescriptions">
    <div style="font-size: 20px" class="font-weight-bold">Prescription</div>
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
            <div class="block">
              <div>{{ rx.doctor.fullname }}</div>
              <div style="font-size: 15px; margin-top: -5px">
                {{ rx.doctor.experties }}
              </div>
            </div>
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
        <td></td>
        <td>
          <v-text-field
            v-model="med.pivot.qty"
            :value="med.pivot.qty"
            style="width: 50px; height: 40px; color: inherit"
            outlined
            dense
            @change="checks(med)"
          ></v-text-field>
          <!-- <span class="ordered-quantitity">{{ med.pivot.qty }}</span> -->
        </td>
        <td class="options text-center">
          <v-btn icon @click="med.pivot.qty++"
            ><v-icon color="green" size="30"
              >mdi-plus-circle-outline</v-icon
            ></v-btn
          >
          <v-btn icon @click="qty_button(med)"
            ><v-icon color="red" size="30"
              >mdi-minus-circle-outline</v-icon
            ></v-btn
          >
        </td>
      </tr>
    </table>
    <v-divider style="border-color: inherit" class="my-3"></v-divider>
    <table class="ordered-table pt-0">
      <tr class="ordered-table-header">
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th class="total">TOTAL</th>
      </tr>
      <tr v-for="payment in rx.prescribe" :key="payment.id" class="dispense">
        <td>{{ payment.name }}</td>
        <td></td>
        <!-- <td>₱ {{ parseFloat(payment.price_ref_index).toFixed(2) }}</td> -->
        <td>₱ {{ parseFloat(payment.price_refs_index).toFixed(2) }}</td>
        <!-- <td>Qty: {{ payment.pivot.qty }}</td> -->
        <td>Qty: {{ check(payment) }}</td>
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
        color="#1ac6b6"
        width="60%"
        class="btn-radius find-doctors-btn"
        style="color: white"
      >
        DISPENSE
      </v-btn>
    </div>
  </div>
</template>
<script src="./single-prescription.js"></script>

<style src="./single-prescription.scss" lang="scss" scoped></style>
0
