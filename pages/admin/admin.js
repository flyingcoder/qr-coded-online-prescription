export default {
  name: 'Admin',
  layout: 'admin',
  middleware: 'auth',
  data() {
    return {
      pharmacies: [],
      patient_info: '',
    }
  },
  mounted() {
    this.getPharmacies()
  },
  methods: {
    async getPharmacies() {
      await this.$axios.get('users/pharmacy').then((data) => {
        this.pharmacies = data.data
        console.log(data)
      })
    },
  },
}
