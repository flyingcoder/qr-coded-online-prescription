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
        <v-text-field
          v-model="generic_name"
          label="Generic Name"
          outlined
          dense
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          v-model="price"
          label="Price"
          outlined
          dense
          type="number"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field v-model="type" label="Type" outlined dense></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          v-model="stock"
          label="Stocks"
          outlined
          dense
          type="number"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="padding-side">
      <v-text-field v-model="brand" label="Brand" outlined dense></v-text-field>
    </v-row>
    <v-row>
      <v-btn color="blue-grey" class="ma-2 white--text" @click="saveProduct">
        Save
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
    return {
      generic_name: '',
      price: '',
      type: '',
      stock: '',
    }
  },
  methods: {
    saveProduct() {
      this.$router.push('/pharmacy')
    },
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
