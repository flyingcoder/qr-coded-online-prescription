export default {
  layout: 'dashboard',
  auth: false,
  methods: {
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
      return (qty -= 1)
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
  data() {
    return {
      ex11: true,
      snackbar: false,
      amount: '1,000.00',
      counter: 0,
      service_fee: 4.2,

      payments: [
        {
          id: 1,
          name: 'Colchicine ',
          dose: '0.6mg',
          qty: 1,
          price: 2.0,
        },
        {
          id: 2,
          name: 'Colchicine',
          dose: '600mg',
          qty: 1,
          price: 4.5,
        },
        {
          id: 3,
          name: 'Colchicine',
          dose: '0.6mg',
          qty: 1,
          price: 5.5,
        },
      ],
    }
  },
}
