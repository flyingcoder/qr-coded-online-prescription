export default {
  name: 'Pharmacy',
  layout: 'dashboard',
  data() {
    return {
      loading: false,
      grid: true,
      align: '',
      pharmacies: [],
      filtered: '',
      search: '',
    }
  },
  mounted() {
    this.getPharmacies()
  },
  methods: {
    async getPharmacies() {
      this.loading = true
      await this.$axios.get('stores').then((data) => {
        this.pharmacies = data.data
        this.filtered = this.pharmacies
        this.loading = false
      })
    },
    filterPharmacy() {
      this.filtered = this.pharmacies.filter((phar) => {
        return phar.fullname.toLowerCase().match(this.search.toLowerCase())
      })
    },
  },
}
