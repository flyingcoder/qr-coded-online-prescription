<template>
  <div class="orders-table">
    <Preloader v-if="loader" />
    <h3 class="mt-0 mb-2 order-list-title">Orders List</h3>
    <v-data-table
      dense
      :headers="headers"
      :header-props="headerProps"
      :items="orders"
      item-key="name"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      hide-default-footer
      class="elevation-1 customer-order-list"
      :loading="loading"
      loading-text="Loading... Please wait"
      @click:row="viewOrder"
    >
      <template #[`item.total`]="{ item }" @click:row="viewOrder">
        ₱{{ item.total }}
      </template>
      <template
        #[`item.status`]="{ item }"
        class="d-block"
        @click:row="viewOrder"
      >
        {{ item.status ? 'Completed' : 'Pending' }}
      </template>
      <template #[`item.created_at`]="{ item }" @click:row="viewOrder">
        {{ $moment(item.created_at).format('LL HH:mm A') }}
      </template>
      <template #[`item.prescription_id`]="{ item }">
        <v-btn
          v-if="item.prescription_id == '1'"
          color="primary"
          dark
          small
          class="ma-2"
          @click="prescriptionView(item.prescription_id)"
        >
          View Prescription
        </v-btn>
        <div v-else></div>
      </template>
    </v-data-table>
    <div class="text-center pt-2">
      <v-pagination v-model="page" :length="pageCount"></v-pagination>
      <v-text-field
        :value="itemsPerPage"
        label="Items per page"
        type="number"
        min="-1"
        max="15"
        @input="itemsPerPage = parseInt($event, 10)"
      ></v-text-field>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Orders',
  auth: 'auth-pharmacy',
  layout: 'dashboard',
  data() {
    return {
      loader: false,
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      loading: true,
      orders: [],
      headerProps: {
        sortByText: 'Customized by',
      },
    }
  },
  computed: {
    headers() {
      const name =
        this.$auth.user.role === 'pharmacy'
          ? 'Customer Name:'
          : 'Pharmacy Name:'
      return [
        { text: 'Transaction: ', value: 'transaction_number', sortable: false },
        { text: 'Date', value: 'created_at' },
        {
          text: name,
          align: 'start',
          value: 'fullname',
        },
        { text: 'Prescripted By', value: 'doctor_name' },
        { text: 'Amount', value: 'total', sortable: false },
        { text: 'Status', value: 'status' },
        { value: 'prescription_id', sortable: false },
      ]
    },
  },
  mounted() {
    this.getOrders()
  },
  methods: {
    prescriptionView(id) {
      this.$router.push('/prescriptions/pad/' + id)
    },
    viewOrder(order) {
      this.$router.push('/orders/' + order.id)
    },
    async getOrders() {
      this.loader = true
      await this.$axios.get('orders').then((data) => {
        this.orders = data.data
        this.loader = false
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.orders-table {
  .order-list-title {
    font-size: 23px;
    text-align: center;
  }
  .v-data-footer {
    justify-content: center;
  }
  .v-application--is-ltr .v-data-footer__pagination {
    margin: 0;
  }
  .v-data-footer__icons-after {
    position: absolute;
    right: 12px;
  }
  .v-data-footer__icons-before {
    position: absolute;
    left: 12px;
  }
  .v-data-table__mobile-row {
    min-height: 30px;
  }
}
</style>
