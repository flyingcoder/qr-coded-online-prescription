export default {
  name: 'Patients',
  layout: 'dashboard',
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
