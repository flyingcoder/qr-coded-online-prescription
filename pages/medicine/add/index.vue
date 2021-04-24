<template>
  <div class="add-medicine">
    <v-form id="add-medicine">
      <div class="chatbox-undo" @click="back">
        <v-icon> mdi-arrow-left </v-icon>
      </div>
      <v-row class="justify-center">
        <div class="add-product-title">Add Product</div>
      </v-row>
      <v-row>
        <v-file-input
          accept="image/*"
          name="file"
          label="File input"
        ></v-file-input>
      </v-row>
      <v-row class="row-height">
        <v-col>
          <v-text-field
            v-model="generic_name"
            name="generic_name"
            label="Generic Name"
            outlined
            dense
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="size"
            name="size"
            label="Size"
            outlined
            dense
            type="text"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="row-height">
        <v-col>
          <v-text-field
            v-model="brand"
            label="Brand"
            name="brand"
            outlined
            dense
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="type"
            label="Type"
            name="type"
            outlined
            dense
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            v-model="stocks"
            name="stocks"
            label="Stocks"
            outlined
            dense
            type="number"
          ></v-text-field> </v-col
        ><v-col>
          <v-text-field
            v-model="price"
            label="Price"
            name="price"
            outlined
            dense
            type="number"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-btn color="blue-grey" class="ma-2 white--text" @click="saveProduct">
          Save
          <v-icon right dark> mdi-content-save </v-icon>
        </v-btn>
      </v-row>
    </v-form>
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
      size: '',
      type: '',
      stocks: '',
      brand: '',
      file: '',
    }
  },
  methods: {
    back() {
      this.$router.back()
    },
    reset() {
      this.generic_name = ''
      this.price = ''
      this.size = ''
      this.type = ''
      this.brand = ''
      this.stocks = ''
      this.file = ''
    },
    async saveProduct() {
      const msgForm = document.getElementById('add-medicine')

      const formData = new FormData(msgForm)
      try {
        await this.$axios
          .post('medicines', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((data) => {
            this.reset()
            this.$store.dispatch('snackbar/setSnackbar', {
              text: 'Product has been added',
            })
          })
      } catch {
        this.$store.dispatch('snackbar/setSnackbar', {
          color: 'red',
          text: 'Ops! Incorrect product details',
        })
      }
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
