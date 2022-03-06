export default {
  name: 'Patients',
  middleware: 'auth-doctor',
  layout: 'dashboard',
  data() {
    return {
      grid: true,
      align: '',
      patients: '',
      filtered: '',
      search: '',
    }
  },
  mounted() {
    this.getPatient()
  },
  methods: {
    async getPatient() {
      await this.$axios.get('users/patient').then((data) => {
        this.patients = data.data
        this.filtered = this.patients
      })
    },
    viewProfile(id) {
      this.$router.push('/patients/' + id)
    },
    contact(id) {
      this.$router.push('/chatbox/' + id)
    },
    filterPatients() {
      this.filtered = this.patients.filter((pat) => {
        return (
          pat.fname.toLowerCase().match(this.search.toLowerCase()) ||
          pat.lname.toLowerCase().match(this.search.toLowerCase())
        )
      })
    },
  },
}
