<template>
  <div class="orders-table">
    <h3 class="mt-0 mb-2 order-list-title">Orders List</h3>
    <v-data-table
      dense
      :headers="headers"
      :items="orders"
      item-key="name"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      hide-default-footer
      class="elevation-1"
      :loading="loading"
      loading-text="Loading... Please wait"
      @click:row="viewOrder"
    >
      <template #[`item.total`]="{ item }"> ₱{{ item.total }} </template>
      <template #[`item.status`]="{ item }">
        {{ item.status | capitalize }}
      </template>
      <template #[`item.created_at`]="{ item }">
        {{ $moment(item.created_at).format('LL HH:mm A') }}
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
  layout: 'dashboard',
  data() {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      loading: true,
      orders: [],
    }
  },
  computed: {
    headers() {
      const name =
        this.$auth.user.role === 'pharmacy' ? 'Customer Name' : 'Pharmacy Name'

      return [
        {
          text: name,
          align: 'start',
          value: 'fullname',
        },
        { text: 'Doctor`s Name', value: 'doctor_name' },
        { text: 'Total Payment', value: 'total' },
        { text: 'Order Status', value: 'status' },
        { text: 'Date Ordered', value: 'created_at' },
      ]
    },
  },
  mounted() {
    this.getOrders()
  },
  methods: {
    viewOrder(order) {
      this.$router.push('/orders/' + order.id)
    },
    async getOrders() {
      await this.$axios.get('orders').then((data) => {
        this.orders = data.data
        this.loading = false
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
