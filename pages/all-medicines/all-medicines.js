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
      this.$axios.get('allmedicines').then((data) => {
        this.allmedicines = data.data
        console.log(data)
      })
    },
    viewProfile(id) {
      this.$router.push('/medicine/' + id)
    },
  },
}
