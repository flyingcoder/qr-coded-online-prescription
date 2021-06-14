<template>
  <div class="add-medicine">
    <v-form id="add-medicine">
      <div class="chatbox-undo" @click="back">
        <v-icon> mdi-arrow-left </v-icon>
      </div>
      <v-row class="justify-center">
        <div class="add-product-title">Add to store</div>
      </v-row>
      <v-row class="medicine-image">
        <img
          width="60%"
          style="border-radius: 70%"
          :src="$config.baseURL + '/storage/medicines/' + medicine.image"
        />
      </v-row>
      <v-row class="medicine-info">
        {{ medicine.generic_name }} ({{ medicine.brand }}) <br />
        {{ medicine.dosage }} - {{ medicine.type }} <br />
        <span v-if="medicine.price_refs_index"
          >Drug Price Referrence Index: ₱ {{ medicine.price_refs_index }}</span
        >
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
      <v-row style="width: 100%; margin: 0 !important">
        <v-btn
          color="blue-grey"
          class="white--text"
          style="width: 100%"
          @click="saveProduct"
        >
          Sell
          <v-icon right dark> mdi-content-save </v-icon>
        </v-btn>
      </v-row>
    </v-form>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  middleware: 'auth-pharmacy',
  data() {
    return {
      medicine: {
        image: 'default-medicine-image.png',
      },
      price: '',
      stocks: '',
    }
  },
  mounted() {
    this.getMedDetails()
  },
  methods: {
    async getMedDetails() {
      await this.$axios
        .get('medicines/' + this.$route.params.id)
        .then((data) => {
          this.medicine = data.data
        })
    },
    back() {
      this.$router.back()
    },
    async saveProduct() {
      const data = {
        id: this.medicine.id,
        price: this.price,
        stocks: this.stocks,
      }
      try {
        await this.$axios.post('medicines/sell', data).then((data) => {
          this.$store.dispatch('snackbar/setSnackbar', {
            text: 'Medicine is added succesfully.',
          })
          this.$router.push('/medicine')
        })
      } catch {
        this.$store.dispatch('snackbar/setSnackbar', {
          color: 'red',
          text: 'Ops! Incorrect Medicine details',
        })
      }
    },
    async updateMedicine(id) {
      const msgForm = document.getElementById('add-medicine')

      const formData = new FormData(msgForm)

      formData.append('type', this.medtype)

      await this.$axios
        .put('medicines/' + id, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((data) => {
          this.medicine = data.data
          this.$store.dispatch('snackbar/setSnackbar', {
            text: 'Medicine data is updated.',
          })
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.save-medicine-product {
  width: 100%;
}
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
.medicine-image {
  margin: 40px auto;
  justify-content: center;
}
.medicine-info {
  width: 100%;
  margin: 0;
  justify-content: center;
  margin-top: 50px;
  font-size: 17px;
  font-weight: 500;
  text-align: center;
}
</style>
