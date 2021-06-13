export default {
  layout: 'dashboard',
  data() {
    return {
      allmedicines: [],
      cart: [],
      drugs: '',
    }
  },
  mounted() {
    this.getPrescribeMeds()
  },
  methods: {
    getPrescribeMeds() {
      this.$axios
        .get('medicines/prescribe/' + this.$route.params.id)
        .then((data) => {
          this.allmedicines = data.data
        })
    },
    checkout() {
      if (this.drugs) {
        window.localStorage.setItem('cart', JSON.stringify(this.drugs))
        this.$router.push('/checkout')
      } else {
        this.$store.dispatch('snackbar/setSnackbar', {
          color: 'red',
          text: 'Please select a medicine.',
        })
      }
    },
  },
}
