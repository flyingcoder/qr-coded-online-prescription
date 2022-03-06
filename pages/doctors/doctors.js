export default {
  layout: 'dashboard',
  data() {
    return {
      grid: true,
      align: '',
      doctors: '',
      filtered: '',
      search: '',
    }
  },
  mounted() {
    this.getDoctors()
  },
  methods: {
    async getDoctors() {
      await this.$axios.get('users/doctor').then((data) => {
        this.doctors = data.data
        this.filtered = this.doctors
      })
    },
    viewProfile(id) {
      this.$router.push('/doctors/' + id)
    },
    contact(id) {
      this.$router.push('/chatbox/' + id)
    },
    filterDoc() {
      this.filtered = this.doctors.filter((doc) => {
        return (
          doc.fname.toLowerCase().match(this.search.toLowerCase()) ||
          doc.lname.toLowerCase().match(this.search.toLowerCase())
        )
      })
    },
  },
}
