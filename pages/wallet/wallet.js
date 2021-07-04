export default {
  layout: 'dashboard',
  middleware: 'auth',
  data() {
    return {
      tab: null,
      ex11: true,
      method: '',
      history: [],
    }
  },
  mounted() {
    this.getMyWalletData()
  },
  methods: {
    processPayment(method) {
      this.method = 'gcash'
    },
    payUsingGcash() {
      const order = {
        items: this.cart.meds,
        doctor_id: this.cart.doctor_id,
        total: this.total_quantity_amount,
        prescription_id: this.cart.prescription_id,
        payment_method: 'gcash',
      }
      this.$axios.post('process-payment', order).then((data) => {
        this.$store.dispatch('snackbar/setSnackbar', {
          text: 'Payment successful!',
        })
      })
    },
    async getMyWalletData() {
      try {
        const wallet = await this.$axios.get('wallets')
        this.history = wallet.data
      } catch (err) {
        this.$store.dispatch('snackbar/setSnackbar', {
          color: 'red',
          text: 'Oops! Something wrong happened.',
        })
      }
    },
    delayLoad(event) {
      setTimeout(() => {
        this.$router.push(event.target.pathname)
      }, 2000)
    },
    total_price(item) {
      return item.price * item.qty
    },
    increase(qty) {
      return (qty += 1)
    },
    decrease(qty) {
      console.log(qty !== 0)
      if (qty !== 0) {
        console.log(qty)
        return (qty -= 1)
      }
    },
  },
  computed: {
    total_quantity_amount() {
      let sum = 0
      this.payments.forEach((e) => {
        sum += e.price * e.qty
      })
      return sum
    },
    total_quantity() {
      let sum = 0
      this.payments.forEach((e) => {
        sum += e.qty
      })
      return sum
    },
    overall_total() {
      return this.total_quantity_amount + this.service_fee
    },
  },
}
