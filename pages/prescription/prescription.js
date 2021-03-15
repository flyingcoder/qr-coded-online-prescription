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
          name: 'Colchicine',
          dose: '0.6mg',
          counter: 31,
        },
        {
          id: 2,
          name: 'Celecoxib',
          dose: '200mg',
          counter: 14,
        },
        {
          id: 3,
          name: 'Paracetamol',
          dose: '500mg',
          counter: 30,
        },
      ],

      payments: [
        {
          id: 1,
          name: 'Colchicine ',
          dose: '0.6mg',
          qty: '31',
          price: '2.00',
          total: '62',
        },
        {
          id: 2,
          name: 'Celecoxib',
          dose: '200mg',
          qty: '14',
          price: '4.00',
          total: '48',
        },
        {
          id: 3,
          name: 'Paracetamol',
          dose: '500mg',
          qty: '20',
          price: '5.00',
          total: '100',
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
