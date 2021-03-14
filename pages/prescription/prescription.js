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
          name: 'Colchicine ',
          dose: '0.6mg',
          qty: 'Qty:31',
          price: '₱2.00',
          total: '₱62',
        },
        {
          id: 2,
          name: 'Celecoxib',
          dose: '200mg',
          qty: 'Qty:14',
          price: '₱4.00',
          total: '₱48',
        },
        {
          id: 3,
          name: 'Paracetamol',
          dose: '500mg',
          qty: 'Qty:20',
          price: '₱5.00',
          total: '₱100',
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
