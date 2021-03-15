export default {
  layout: 'dashboard',
  auth: false,
  data() {
    return {
      counter: 0,
      service_fee: 4.2,

      payments: [
        {
          id: 1,
          name: 'Colchicine ',
          dose: '0.6mg',
          qty: 31,
          price: 2.0,
        },
        {
          id: 2,
          name: 'Celecoxib',
          dose: '200mg',
          qty: 14,
          price: 4.5,
        },
        {
          id: 3,
          name: 'Paracetamol',
          dose: '500mg',
          qty: 20,
          price: 5.5,
        },
      ],
    }
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
  methods: {
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
  props: {
    user: {
      type: Object,
      default() {
        return {
          image: 'Inosuke_Anime_Profile.png',
          name: 'JUAN DELA CRUZ',
        }
      },
    },
  },
}
