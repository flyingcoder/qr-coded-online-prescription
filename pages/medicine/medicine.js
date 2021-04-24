export default {
  layout: 'dashboard',
  auth: true,
  data() {
    return {
      grid: true,
      align: '',
      medicines: '',
      pharmacy_medicine: [
        {
          avatar: '/_nuxt/assets/images/colchine.png',
          name: 'Paracetamol',
          stocks: '200',
          price: '6',
          grams: '0.6mg',
          brand: 'Dymadon',
        },
        {
          avatar: '/_nuxt/assets/images/colchine.png',
          name: 'Colchine',
          stocks: '800',
          price: '7',
          grams: '0.6mg',
          brand: 'Dymadon',
        },
        {
          avatar: '/_nuxt/assets/images/colchine.png',
          name: 'Biogesic',
          stocks: '500',
          price: '8',
          grams: '0.76mg',
          brand: 'Dymadon',
        },
      ],
    }
  },
  mounted() {
    this.getMedicines()
  },
  methods: {
    pharmacy(id) {
      this.$router.push('/pharmacy/' + id)
    },
    getMedicines() {
      this.$axios.get('medicines').then((data) => {
        this.medicines = data.data
        console.log(data)
      })
    },
  },
}
