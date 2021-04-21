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
          avatar: '~/assets/images/colchine.png',
          name: 'Paracetamol',
          stocks: '200',
          price: '6',
          grams: '0.6mg',
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
