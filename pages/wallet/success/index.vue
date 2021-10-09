<template>
  <div class="success-page py-10">
    <div class="header-success d-block justify-center">
      <div class="d-flex justify-center pb-5">
        <div>
          <img src="~/assets/images/main-logo.png" width="70px" alt="" />
        </div>
        <div
          class="align-center d-flex pl-3"
          style="font-weight: 700; font-size: 20px"
        >
          Reseta Qrx
        </div>
      </div>
      <div class="d-flex justify-center">
        <v-icon size="80px" color="green">mdi-check-bold</v-icon>
      </div>
      <div
        class="d-flex justify-center"
        style="font-weight: 700; font-size: 18px"
      >
        Payment Successful
      </div>
      <div class="d-block order-content" style="width: 100%">
        <div class="d-flex justify-center">
          <h1>Medicine Ordered</h1>
        </div>
        <div
          class="d-block"
          style="height: 150px; max-height: 150px; overflow-y: scroll"
        >
          <table style="width: 100%; overflow-y: scroll">
            <tr>
              <th></th>
              <th width="50%">Name</th>
              <th>Price</th>
            </tr>
            <tr v-for="item in medicine_ordered" :key="item" class="mb-5">
              <td class="text-right">{{ item.id }}</td>
              <td class="text-center">{{ item.name }}</td>
              <td class="text-center">₱{{ item.price }}</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="d-flex justify-center pt-10">
        <v-btn
          color="#1ac6b6"
          to="/dashboard"
          style="color: white"
          elevation="0"
          >Dashboard</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Success',
  layout: 'search-notification',
  data() {
    return {
      medicine_ordered: [
        {
          id: 1,
          name: 'Paracetamol',
          price: '5.00',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
