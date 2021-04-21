export default {
  layout: 'dashboard',
  auth: false,
  data() {
    return {
      grid: true,
      align: '',
      doctors: '',
    }
  },
  mounted() {
    this.getPatient()
  },
  methods: {
    getPatient() {
      this.$axios.get('users/patient').then((data) => {
        this.patients = data.data
      })
    },
    viewProfile(id) {
      this.$router.push('/patients/' + id)
    },
    contact(id) {
      this.$router.push('/chatbox/' + id)
    },
  },
}
