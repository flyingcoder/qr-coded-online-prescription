export default {
  name: 'Patients',
  layout: 'dashboard',
  middleware: 'auth',
  data() {
    return {
      align: '',
      allmedicines: '',
      filter: '',
      search: '',
    }
  },
  mounted() {
    this.getAllMedicines()
  },
  computed: {},
  methods: {
    sellMed(id) {
      this.$router.push('/medicine/sell/' + id)
    },
    async getAllMedicines() {
      await this.$axios.get('medicines').then((data) => {
        this.allmedicines = data.data
        this.filter = this.allmedicines
      })
    },
    viewProfile(id) {
      this.$router.push('/medicine/' + id)
    },
    filtered() {
      this.filter = this.allmedicines.filter((med) => {
        return (
          med.brand.toLowerCase().match(this.search.toLowerCase()) ||
          med.generic_name.toLowerCase().match(this.search.toLowerCase())
        )
      })
    },
  },
}
