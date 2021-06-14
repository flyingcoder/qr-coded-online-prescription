export default {
  layout: 'dashboard',
  data() {
    return {
      ex11: true,
      dialog: false,
      snackbar: false,
      amount: '1,000.00',
      counter: 0,
      service_fee: 4.2,
      cart: {
        meds: [],
        doctor_id: '',
      },
      method: '',
    }
  },
  watch: {
    method(val) {
      switch (val) {
        case 'gcash':
          this.payUsingGcash()
          break
      }
    },
  },
  methods: {
    processPayment(method) {
      this.method = 'gcash'
    },
    resetCart() {
      window.localStorage.removeItem('cart')
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
        this.$router.push('orders')
        this.resetCart()
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
      if (qty !== 0) return (qty -= 1)
    },
  },
  computed: {
    total_quantity_amount() {
      let sum = 0
      this.cart.meds.forEach((e) => {
        sum += e.price * e.qty
      })
      return sum
    },
    total_quantity() {
      let sum = 0
      this.cart.meds.forEach((e) => {
        sum += e.qty
      })
      return sum
    },
    overall_total() {
      return this.total_quantity_amount + this.service_fee
    },
  },
  mounted() {
    this.cart = JSON.parse(window.localStorage.getItem('cart'))
    console.log(this.cart)
    if (!this.cart) this.$router.back()
  },
}
