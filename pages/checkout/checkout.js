export default {
  layout: 'dashboard',
  data() {
    return {
      ex11: true,
      snackbar: false,
      amount: '1,000.00',
      counter: 0,
      service_fee: 4.2,
      meds: [],
    }
  },
  methods: {
    processPayment(method) {
      if (method === 'gcash') {
        this.payUsingGcash()
      }
    },
    resetCart() {
      window.localStorage.removeItem('cart')
    },
    payUsingGcash() {
      console.log(this.meds)
      const order = {
        items: this.meds,
        total: this.total_quantity_amount,
      }
      this.$axios.post('process-payment', order).then((data) => {
        this.$store.dispatch('snackbar/setSnackbar', {
          text: 'Payment successful!',
        })
        // this.$router.push('order-status')
        // this.resetCart()
      })
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
      this.meds.forEach((e) => {
        sum += e.price * e.qty
      })
      return sum
    },
    total_quantity() {
      let sum = 0
      this.meds.forEach((e) => {
        sum += e.qty
      })
      return sum
    },
    overall_total() {
      return this.total_quantity_amount + this.service_fee
    },
  },
  mounted() {
    this.meds = JSON.parse(window.localStorage.getItem('cart'))
    if (!this.meds) this.$router.back()
  },
}
