<template>
  <div class="admin-page">
    <div class="d-block">
      <label class="text-cl">Pharmacy</label>
      <v-autocomplete
        v-model="patient_info"
        :items="pharmacies"
        outlined
        dense
        placeholder="Pharmacy User"
      ></v-autocomplete>
    </div>
    <div class="d-block">
      <label class="text-cl">Amount</label>
      <v-text-field
        v-model="amount"
        placeholder="Amount"
        outlined
        dense
        type="number"
      ></v-text-field>
    </div>
    <div class="d-flex" style="margin-top: 20px">
      <v-btn outlined color="black" width="100%"> Add Amount </v-btn>
    </div>
  </div>
</template>

<script src="./admin.js"></script>

<style lang="scss" scoped>
.admin-page {
  padding: 60px 20px;
}
.text-cl {
  color: black !important;
  font-weight: 600;
  font-size: 18px;
}
</style>
