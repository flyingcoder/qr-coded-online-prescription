export default {
  name: 'Prescriptions',
  layout: 'dashboard',
  data() {
    return {
      prescriptions: [],
      loading: false,
      filtered: '',
      search: '',
    }
  },
  mounted() {
    this.getPrescriptions()
  },
  methods: {
    viewPrescription(id) {
      this.$router.push('/prescriptions/pad/' + id)
    },
    async getPrescriptions() {
      this.loading = true
      await this.$axios.get('prescriptions').then((data) => {
        this.prescriptions = data.data
        this.filtered = this.prescriptions
        this.loading = false
      })
    },
    filterPrescriptions() {
      const searchValue = this.search !== null ? this.search.toLowerCase() : ''
      this.filtered = this.prescriptions.filter((val) => {
        return (
          val.doctor.fname.toLowerCase().match(searchValue || '') ||
          val.doctor.lname.toLowerCase().match(searchValue || '')
        )
      })
    },
  },
}
