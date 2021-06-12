export default {
  middleware: 'auth-guard',
  layout: 'form',
  data() {
    return {
      datus: {
        fname: '',
        lname: '',
        email: '',
        license_number: '',
        tin_number: '',
        password: '',
        password_confirmation: '',
        role: '',
      },
      is_register: true,
      title: '',
    }
  },
  mounted() {
    this.datus.role = this.$route.params.as
    this.title =
      'Register As ' +
      this.$route.params.as.charAt(0).toUpperCase() +
      this.$route.params.as.slice(1)
  },
}
