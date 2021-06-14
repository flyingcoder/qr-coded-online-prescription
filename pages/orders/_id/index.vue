<template>
  <div>
    <h3 class="mt-0 mb-4 orders-title">Order Details</h3>
    <div class="d-flex justify-center" style="margin-bottom: 15px">
      <img src="@/assets/images/main-logo.png" alt="reseta logo" width="25%" />
    </div>
    <v-card elevation="3" class="padding-bottom-sm order-card">
      <div class="orders-fullname">
        <span class="identifier">Fullname: </span>{{ order.fullname }}
      </div>
      <div class="orders-address">
        <span class="identifier">Address: </span>{{ order.address }}
      </div>
      <div class="order-status d-flex">
        <span class="identifier">Status: </span>
        <div style="width: 60%; padding-left: 10px">
          <v-select
            v-model="order.status"
            :items="status"
            label="Status"
            dense
          ></v-select>
        </div>
      </div>
      <div class="order-doctor-name">
        <span class="identifier">Doctor: </span>{{ order.doctor_name }}
      </div>
      <div class="order-prescribed-by">
        <span class="identifier">Prescribed by: </span>Dr.
        {{ order.doctor.fname }} {{ order.doctor.lname }}
      </div>
      <v-divider></v-divider>
      <h4 class="my-2 px-1">Order items:</h4>
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
      await this.$axios.get('orders/' + this.$route.params.id).then((data) => {
        this.order = data.data
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
    height: 34px;
  }
}
</style>
