export default {
  layout: 'dashboard',
  auth: false,
  data() {
    return {
      counter: 0,
      total_quantity: '64.00',
      total_quantity_amount: '210.00',
      ordered: [
        {
          id: 1,
          name: '1) Colchicine 0.6mg',
        },
        {
          id: 2,
          name: '2) Celecoxib 200mg',
        },
        {
          id: 3,
          name: '3) Paracetamol 500mg',
        },
      ],
      payments: [
        {
          id: 1,
          name: 'Colchicine 0.6mg',
          price: '2.00',
          total: '62.00',
        },
        {
          id: 2,
          name: 'Celecoxib 200mg',
          price: '4.00',
          total: '48.00',
        },
        {
          id: 3,
          name: 'Paracetamol 500mg',
          price: '5.00',
          total: '100.00',
        },
      ],
    }
  },
  methods: {
    increase() {
      this.counter++
    },
    decrease() {
      this.counter--
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
