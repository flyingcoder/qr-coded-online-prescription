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
        password_confirmation: '',
      },
    }
  },
  mounted() {
    console.log(this.$route.params.as)
  },
  methods: {
    async registerUser() {
      try {
        await this.$axios.post('/users', this.register)
        await this.$auth.loginWith('laravelSanctum', {
          data: {
            email: this.register.email,
            password: this.register.password,
          },
        })
        this.$store.dispatch('snackbar/setSnackbar', {
          text: `Welcome! ${this.$auth.user.fname}, stay safe!`,
        })
        this.$router.push('/dashboard')
      } catch {
        this.$store.dispatch('snackbar/setSnackbar', {
          color: 'red',
          text: 'Oops! Please check your input.',
        })
      }
    },
  },
}
