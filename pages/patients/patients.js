export default {
  name: 'Patients',
  middleware: 'auth-doctor',
  layout: 'dashboard',
  data() {
    return {
      grid: true,
      align: '',
      loading: false,
      patients: [],
      filtered: [],
      search: '',
    }
  },
  mounted() {
    this.getPatient()
  },
  methods: {
    async getPatient() {
      this.loading = true
      await this.$axios.get('users/patient').then((data) => {
        this.patients = data.data
        this.filtered = this.patients
        this.loading = false
        console.log(this.filtered)
      })
    },
    viewProfile(id) {
      this.$router.push('/patients/' + id)
    },
    contact(id) {
      this.$router.push('/chatbox/' + id)
    },
    filterPatients() {
      const searchValue = this.search?.toLowerCase() || ''
      this.filtered = this.patients.filter((pat) => {
        console.log(searchValue)
        return (
          pat.fname.toLowerCase().match(searchValue || '') ||
          pat.lname.toLowerCase().match(searchValue || '')
        )
      })
    },
  },
}
