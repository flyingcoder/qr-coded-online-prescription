export default {
  layout: 'dashboard',
  middleware: 'auth',
  data() {
    return {
      allmedicines: [],
      loading: false,
      drugs: '',
      doctor_id: '',
      dialog: false,
      prescription_id: '',
    }
  },
  mounted() {
    this.getPrescribeMeds()
  },
  methods: {
    async getPrescribeMeds() {
      this.loading = true
      await this.$axios
        .get('medicines/prescribe/' + this.$route.params.prescription_id)
        .then((data) => {
          console.log(this.$auth.user.id)
          this.allmedicines = data.data.meds
          this.doctor_id = data.data.doctor_id
          this.prescription_id = data.data.prescription_id
          this.loading = false
          /*
          if (
            this.$auth.user.id === data.data.patient_id ||
            this.$auth.user.id === data.data.doctor_id
          ) {
            this.allmedicines = data.data.meds
            this.doctor_id = data.data.doctor_id
            this.prescription_id = data.data.prescription_id
          } else {
            //this.$router.back()
          } */
        })
    },
    addToCart() {
      if (this.drugs) {
        const cart = {
          doctor_id: this.doctor_id,
          meds: this.drugs,
          prescription_id: this.prescription_id,
        }
        window.localStorage.setItem('cart', JSON.stringify(cart))
        this.$router.push('/checkout')
      } else {
        this.$store.dispatch('snackbar/setSnackbar', {
          color: 'red',
          text: 'Please select a medicine.',
        })
      }
    },
    multiplePharmacyChecker(arr) {
      if (!arr.length) return true
      return (
        arr.reduce(function (a, b) {
          return a === b ? a : !b
        }) === arr[0]
      )
    },
    checkout() {
      const validator = []
      this.drugs.forEach((e) => {
        validator.push(e.store_id)
      })
      const multiple = this.multiplePharmacyChecker(validator)

      if (!multiple) this.dialog = !this.dialog
      else this.addToCart()
    },
  },
}
