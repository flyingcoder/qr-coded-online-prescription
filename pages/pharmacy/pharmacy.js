export default {
  name: 'Pharmacy',
  layout: 'dashboard',
  data() {
    return {
      grid: true,
      align: '',
      pharmacies: [],
    }
  },
  mounted() {
    this.getPharmacies()
  },
  methods: {
    async getPharmacies() {
      await this.$axios.get('stores').then((data) => {
        this.pharmacies = data.data
      })
    },
  },
}
