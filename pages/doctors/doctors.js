export default {
  auth: false,
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
        console.log(data)
      })
    },
    viewProfile(id) {
      this.$router.push('/doctors' + id)
    },
  },
}
