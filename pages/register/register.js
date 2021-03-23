export default {
  auth: false,
  middleware: 'auth-guard',
  layout: 'form',
  data() {
    return {
      register: {
        fname: '',
        lname: '',
        email: '',
        license_number: '',
        tin_number: '',
        password: '',
        password_confirm: '',
      },
    }
  },
  mounted() {
    console.log(this.$route.params.register)
  },
  methods: {
    async registerUser() {
      try {
        await this.$axios.post('/users', this.register)
        this.$auth.loginWith('laravelSanctum', {
          data: {
            email: this.register.email,
            password: this.register.password,
          },
        })
        this.$store.dispatch('snackbar/setSnackbar', {
          text: `Welcome! ${this.$auth.user.name}, stay safe!`,
        })
        this.$router.push('/dashboard')
      } catch {
        this.$store.dispatch('snackbar/setSnackbar', {
          color: 'red',
          text: 'A problem occur.  Please try again later!.',
        })
      }
    },
  },
}
