<template>
  <div class="add-medicine">
    <v-form id="add-medicine">
      <div class="chatbox-undo" @click="back">
        <v-icon> mdi-arrow-left </v-icon>
      </div>
      <v-row class="justify-center">
        <div class="add-product-title">{{ medicine.generic_name }}</div>
      </v-row>
      <v-row class="medicine-image">
        <img
          v-if="medicine.image == 'default-medicine-image.png'"
          class="big-medicine-image"
          :src="require(`~/assets/images/colchine1.jpg`)"
        />
        <img
          v-else
          class="big-medicine-image"
          :src="$config.baseURL + '/storage/images/' + medicine.image"
        />
      </v-row>
      <v-row class="medicine-info">
        {{ medicine.brand }} <br />
        {{ medicine.dosage }} - {{ medicine.type }} <br />
      </v-row>
      <v-row style="width: 100%; margin: 0 !important">
        <v-list>
          <pharma-list-item
            v-for="item in stores"
            :key="item + 'tinda'"
            :item="item"
          >
            <v-btn elevation="0" color="transparent">
              <v-icon left>mdi-cart-outline</v-icon> ({{ item.pivot.price }})
            </v-btn>
          </pharma-list-item>
        </v-list>
      </v-row>
    </v-form>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  middleware: 'auth',
  data() {
    return {
      medicine: {
        image: 'default-medicine-image.png',
      },
      stores: [],
    }
  },
  mounted() {
    this.getMedDetails()
  },
  methods: {
    async getMedDetails() {
      await this.$axios
        .get('medicines/' + this.$route.params.view_medicine)
        .then((data) => {
          this.medicine = data.data
          this.stores = data.data.stores
        })
    },
    back() {
      this.$router.back()
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
  font-weight: 500;
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
img.big-medicine-image {
  max-width: 150px;
}
</style>
