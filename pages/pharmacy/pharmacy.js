export default {
  name: 'Pharmacy',
  layout: 'dashboard',
  data() {
    return {
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
      await this.$axios.get('stores').then((data) => {
        this.pharmacies = data.data
        this.filtered = this.pharmacies
      })
    },
    filterPharmacy() {
      this.filtered = this.pharmacies.filter((phar) => {
        return phar.fullname.toLowerCase().match(this.search.toLowerCase())
      })
    },
  },
}
