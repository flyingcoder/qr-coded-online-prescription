export default {
  name: 'Patients',
  layout: 'dashboard',
  middleware: 'auth',
  data() {
    return {
      align: '',
      allmedicines: '',
    }
  },
  mounted() {
    this.getAllMedicines()
  },
  methods: {
    sellMed(id) {
      this.$router.push('/medicine/sell/' + id)
    },
    getAllMedicines() {
      this.$axios.get('medicines').then((data) => {
        this.allmedicines = data.data
      })
    },
    viewProfile(id) {
      this.$router.push('/medicine/' + id)
    },
  },
}
