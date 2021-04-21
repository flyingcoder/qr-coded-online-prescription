export default {
  layout: 'dashboard',
  auth: false,
  data() {
    return {
      grid: true,
      align: '',
      doctors: '',
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
    this.getDoctors()
  },
  methods: {
    getDoctors() {
      this.$axios.get('users/doctor').then((data) => {
        this.doctors = data.data
      })
    },
    viewProfile(id) {
      this.$router.push('/doctors/' + id)
    },
    contact(id) {
      this.$router.push('/chatbox/' + id)
    },
  },
}
