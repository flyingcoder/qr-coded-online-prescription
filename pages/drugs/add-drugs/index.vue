<template>
  <div class="add-medicine padding-top">
    <v-row class="justify-center">
      <div class="add-product-title">Add Product</div>
    </v-row>
    <v-row>
      <v-btn color="blue-grey" class="ma-2 white--text">
        Add image
        <v-icon right dark> mdi-cloud-upload </v-icon>
      </v-btn>
    </v-row>
    <v-row class="row-height">
      <v-col>
        <v-text-field label="Generic Name" outlined dense></v-text-field>
      </v-col>
      <v-col>
        <v-text-field label="Price" outlined dense type="number"></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field label="Type" outlined dense></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          label="Stocks"
          outlined
          dense
          tyoe="number"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="padding-side">
      <v-text-field label="Brand" outlined dense></v-text-field>
    </v-row>
    <v-row>
      <v-btn color="blue-grey" class="ma-2 white--text">
        Add
        <v-icon right dark> mdi-content-save </v-icon>
      </v-btn>
    </v-row>
  </div>
</template>

<script>
export default {
  auth: false,
  layout: 'dashboard',
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.padding-side {
  padding: 0px 13px;
}
.padding-top {
  padding-top: 30px;
}
.add-product-title {
  font-size: 24px;
}
.row-height {
  height: 70px;
}
</style>
