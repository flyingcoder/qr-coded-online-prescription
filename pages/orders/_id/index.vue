<template>
  <div>
    <h3 class="mt-0 mb-4">Order Details</h3>
    <v-card elevation="3" class="padding-bottom-sm">
      {{ order.fullname }} <br />

      {{ order.address }} <br />

      {{ order.status }} <br />

      {{ order.doctor_name }} <br />
      Prescribed by: Dr. {{ order.doctor.fname }} {{ order.doctor.lname }}
      <v-divider></v-divider>
      <h4 class="my-2 px-1">Order items:</h4>
      <v-list-item v-for="(item, i) in order.items" :key="i + 'alvin'" two-line>
        <v-list-item-content>
          <v-list-item-title
            >{{ item.generic_name }} ({{ item.brand }}) {{ item.dosage }}
            <span style="float: right">₱{{ item.pivot.price }}</span>
          </v-list-item-title>
          <v-list-item-subtitle>
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
        @click="$router.push('/prescriptions/' + order.referrence.id)"
      >
        View Prescription
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  data() {
    return {
      order: {
        doctor: {},
        buyer: {},
        seller: {},
        items: {},
      },
    }
  },
  mounted() {
    this.getOrder()
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

<style lang="scss" scoped></style>
