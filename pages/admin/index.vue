<template>
  <div class="admin-page">
    <div class="d-block">
      <label class="text-cl">Pharmacy</label>
      <v-select
        v-model="pharmacies"
        dense
        outlined
        placeholder="Pharmacy User"
      ></v-select>
    </div>
    <div class="d-block">
      <label class="text-cl">Amount</label>
      <v-text-field placeholder="Amount" outlined dense></v-text-field>
    </div>
    <div class="d-flex" style="margin-top: 20px">
      <v-btn outlined color="black" width="100%"> Add Amount </v-btn>
    </div>
  </div>
</template>

<script src="./admin.js"></script>

<style lang="scss" scoped>
.admin-page {
  padding: 10px 20px;
}
.text-cl {
  color: black !important;
  font-weight: 600;
  font-size: 18px;
}
</style>
