export default {
  name: 'Patients',
  layout: 'dashboard',
  middleware: 'auth',
  data() {
    return {
      align: '',
      allmedicines: '',
      loading: false,
      filtered: '',
      search: '',
    }
  },
  mounted() {
    this.getAllMedicines()
  },
  computed: {},
  methods: {
    virtualDisplay() {
      this.$router.push('/virtual-display')
    },
    sellMed(id) {
      this.$router.push('/medicine/sell/' + id)
    },
    async getAllMedicines() {
      this.loading = true
      await this.$axios.get('medicines').then((data) => {
        this.allmedicines = data.data
        this.filtered = this.allmedicines
        this.loading = false
      })
    },
    viewProfile(id) {
      this.$router.push('/medicine/' + id)
    },
    filterMedicine() {
      const searchValue = this.search !== null ? this.search.toLowerCase() : ''
      this.filtered = this.allmedicines.filter((med) => {
        return (
          med.brand.toLowerCase().match(searchValue) ||
          med.generic_name.toLowerCase().match(searchValue)
        )
      })
    },
  },
}
