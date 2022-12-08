<template>
  <div class="add-medicine">
    <v-dialog v-model="med_type" fullscreen>
      <MedType @selected="medTypeSelected" />
    </v-dialog>
    <div class="d-flex justify-center pb-8">
      <div class="store-img d-flex align-center">
        <img
          :src="`/_nuxt/assets/images/` + $auth.user.avatar"
          style="width: 60px !important; height: 60px !important"
          class="user-icon mr-5"
          alt=""
        />
      </div>
      <div class="store-info">
        <div class="d-flex" style="font-size: 23px; font-weight: bold">
          {{ $auth.user.fname }}
        </div>
        <div class="d-flex">{{ $auth.user.address }}</div>
      </div>
    </div>
    <v-form id="add-medicine">
      <div class="chatbox-undo" @click="back">
        <v-icon> mdi-arrow-left </v-icon>
      </div>
      <v-row class="justify-center">
        <div class="add-product-title">
          <v-icon medium color="green darken-2">mdi-medication</v-icon>Drug
          details form
        </div>
      </v-row>
      <div class="d-flex" style="margin-top: 25px">
        <v-file-input
          ref="medFile"
          name="file"
          accept="image/*"
          outlined
          dense
          append-icon="mdi-link"
          prepend-icon=""
          label="Medicine Image"
        ></v-file-input>
      </div>
      <div class="d-flex row-height">
        <v-text-field
          v-model="generic_name"
          name="generic_name"
          label="Generic Name"
          outlined
          dense
        ></v-text-field>
      </div>
      <div class="d-flex">
        <v-text-field
          v-model="dosage"
          name="dosage"
          label="Dosage"
          outlined
          dense
          type="text"
        ></v-text-field>
      </div>
      <div class="d-flex row-height">
        <v-text-field
          v-model="brand"
          label="Brand"
          name="brand"
          outlined
          dense
        ></v-text-field>
      </div>
      <div class="d-flex mb-8">
        <v-btn
          depressed
          height="40px"
          width="100%"
          style="
            width: 100%;
            border: 1px solid #878787;
            background: transparent !important;
          "
          @click="med_type = !med_type"
        >
          {{ type }}
        </v-btn>
      </div>
      <div class="d-flex">
        <div class="d-flex mr-3">
          <v-text-field
            v-model="stocks"
            name="stocks"
            label="Stocks"
            outlined
            dense
            type="number"
          ></v-text-field>
        </div>
        <div class="d-flex ml-3">
          <v-text-field
            v-model="price"
            label="Price"
            name="price"
            outlined
            dense
            type="number"
          ></v-text-field>
        </div>
      </div>
      <div class="d-flex ma-auto" style="width: 50%">
        <v-btn
          color="blue-grey"
          class="ma-2 white--text save-medicine-product"
          @click="saveProduct"
        >
          Save
          <v-icon right dark> mdi-content-save </v-icon>
        </v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  middleware: 'auth-pharmacy',
  data() {
    return {
      generic_name: '',
      price: '',
      dosage: '',
      type: 'Tablet',
      stocks: '',
      brand: '',
      file: '',
      med_type: false,
    }
  },
  mounted() {},
  methods: {
    back() {
      this.$router.back()
    },
    medTypeSelected(type) {
      this.type = type
      this.med_type = false
    },
    editMedicine(id) {
      this.$axios.put('medicines/' + id).then((data) => {
        this.medicine = data.data
      })
    },
    async saveProduct() {
      const msgForm = document.getElementById('add-medicine')

      const formData = new FormData(msgForm)

      formData.append('type', this.type)

      try {
        // multipart header is required when uploading an image
        await this.$axios
          .post('medicines', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((data) => {
            this.reset()
            this.$store.dispatch('snackbar/setSnackbar', {
              text: 'Medicine is added succesfully.',
            })
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
    reset() {
      this.generic_name = ''
      this.price = ''
      this.dosage = ''
      this.type = ''
      this.brand = ''
      this.stocks = ''
      this.$refs.medFile.value = null
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
  font-size: 20px;
}
.row-height {
  height: 70px;
}
</style>
