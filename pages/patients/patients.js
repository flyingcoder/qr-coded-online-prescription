export default {
  name: 'Patients',
  layout: 'dashboard',
  data() {
    return {
      grid: true,
      align: '',
      patients: '',
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
