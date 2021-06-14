export default {
  layout: 'dashboard',
  data() {
    return {
      allmedicines: [],
      drugs: '',
      doctor_id: '',
      dialog: false,
    }
  },
  mounted() {
    this.getPrescribeMeds()
  },
  methods: {
    async getPrescribeMeds() {
      await this.$axios
        .get('medicines/prescribe/' + this.$route.params.id)
        .then((data) => {
          this.allmedicines = data.data.meds
          this.doctor_id = data.data.doctor_id
        })
    },
    addToCart() {
      if (this.drugs) {
        const cart = {
          doctor_id: this.doctor_id,
          meds: this.drugs,
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
