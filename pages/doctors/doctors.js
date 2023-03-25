export default {
  layout: 'dashboard',
  data() {
    return {
      grid: true,
      align: '',
      loading: false,
      doctors: [],
      filtered: '',
      search: '',
    }
  },
  mounted() {
    this.getDoctors()
  },
  methods: {
    async getDoctors() {
      this.loading = true
      await this.$axios.get('users/doctor').then((data) => {
        this.doctors = data.data
        this.filtered = this.doctors
        this.loading = false
      })
    },
    viewProfile(id) {
      this.$router.push('/doctors/' + id)
    },
    contact(id) {
      this.$router.push('/chatbox/' + id)
    },
    call(id) {
      this.$router.push('tel: ' + id)
    },
    filterDoc() {
      const searchValue = this.search !== null ? this.search.toLowerCase() : ''
      this.filtered = this.doctors.filter((doc) => {
        return (
          doc.fname.toLowerCase().match(searchValue || '') ||
          doc.lname.toLowerCase().match(searchValue || '')
        )
      })
    },
  },
}
