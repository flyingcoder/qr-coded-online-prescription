export default {
  layout: 'dashboard',
  data() {
    return {
      counter: 0,
      service_fee: 4.2,
      rx: {
        doctor: {
          fullname: '',
          avatar: '',
        },
        prescribe: [],
      },
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
  mounted() {
    this.getPrescribe()
  },
  computed: {
    total_quantity_amount() {
      let sum = 0
      this.rx.prescribe.forEach((e) => {
        sum += e.price_refs_index * e.pivot.qty
      })
      return sum
    },
    total_quantity() {
      let sum = 0
      this.rx.prescribe.forEach((e) => {
        console.log(e)
        sum += parseInt(e.pivot.qty)
      })
      return sum
    },
    overall_total() {
      return this.total_quantity_amount + this.service_fee
    },
  },
  methods: {
    getPrescribe() {
      console.log(this.rx.prescribe)
      this.loading = true
      this.$axios
        .get('prescriptions/' + this.$route.params.prescription)
        .then((data) => {
          this.rx = data.data
          this.loading = false
        })
    },
    total_price(item) {
      return item.price_refs_index * item.pivot.qty
    },
    // increase(qty) {
    //   return qty * 2
    // },
    // increase(qty) {
    //   console.log(qty)
    //   return (item.pivot.qty = qty += 1)
    // },
    // decrease(qty) {
    //   return (qty -= 1)
    // },
  },
}
