export default {
  layout: 'dashboard',
  data() {
    return {
      grid: true,
      align: '',
      doctors: '',
    }
  },
  mounted() {
    this.getDoctors()
  },
  methods: {
    getDoctors() {
      this.$axios.get('users/doctor').then((data) => {
        this.doctors = data.data
      })
    },
    viewProfile(id) {
      this.$router.push('/doctors/' + id)
    },
    contact(id) {
      this.$router.push('/chatbox/' + id)
    },
  },
}
