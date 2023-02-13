<template>
  <div>
    <h3 class="mt-0 text-lg mb-4 orders-title">Order Details</h3>
    <!-- <div class="d-flex justify-center" style="margin-bottom: 15px">
        <img src="@/assets/images/main-logo.png" alt="reseta logo" width="25%" />
      </div> -->
    <v-card elevation="3" class="padding-bottom-sm order-card">
      <div class="d-flex pb-4">
        <div class="orders-transaction" style="width: 60%">
          <span class="identifier">Transaction: </span>asdas
        </div>
        <div class="orders-createdAt" style="width: 40%; text-align: right">
          <span class="identifier">{{
            $moment(t).format('MM/DD/YY hh:mm A')
          }}</span>
        </div>
      </div>
      <div></div>
      <div class="orders-address">
        <span class="identifier">Customer's Name: </span>{{ order.fullname }}
      </div>
      <div class="order-prescribed-by">
        <span class="identifier">Prescribed By: </span
        >{{ order.doctor.fullname }}
      </div>
      <v-divider></v-divider>
      <h4 class="my-2 px-1">ITEMS:</h4>
      <v-list-item v-for="(item, i) in order.items" :key="i + 'alvin'" two-line>
        <v-list-item-content>
          <v-list-item-title
            >{{ item.generic_name }} ({{ item.brand }}) {{ item.dosage }}
          </v-list-item-title>
          <v-list-item-subtitle class="d-flex">
            <span style="float: right; margin-right: 20px"
              >Price: ₱{{ item.pivot.price }}</span
            >
            <span style="float: right">Qty: {{ item.pivot.qty }} pcs</span>
            <div style="width: -webkit-fill-available; text-align: right">
              ₱{{ item.pivot.qty * item.pivot.price }}
            </div>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
    <div class="text-center-pd padding-top-md">
      <v-btn
        depressed
        color="#1ac6b6"
        width="60%"
        class="btn-radius find-doctors-btn"
        style="color: white"
        @click="$router.push('/prescriptions/pad/' + order.reference.id)"
      >
        View Prescription
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  middleware: 'auth-pharmacy',
  data() {
    return {
      t: '',
      order: {
        doctor: {},
        buyer: {},
        seller: {},
        items: {},
        status: '',
      },
      status: [
        'Processing',
        'Completed',
        'Cancelled',
        'Refund',
        'Failed',
        'Pending',
      ],
    }
  },
  mounted() {
    this.getOrder()
    console.log(this.order)
  },
  methods: {
    async getOrder() {
      this.loading = true
      await this.$axios.get('orders/' + this.$route.params.id).then((data) => {
        this.order = data.data
        this.t = this.order.created_at
        this.loading = false
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.orders-title {
  font-size: 20px;
  text-align: center;
  margin-bottom: 5px !important;
}
.order-card {
  padding: 17px;
  .identifier {
    font-weight: 500;
  }
  .orders-fullname,
  .orders-address,
  .order-status,
  .order-doctor-name {
    padding-bottom: 5px;
  }
  .order-prescribed-by {
    padding-bottom: 20px;
  }
  .order-status {
    align-items: center;
  }
  .order-status .v-input {
    margin: 0;
  }
}
</style>
