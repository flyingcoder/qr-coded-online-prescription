export default {
  auth: false,
  middleware: 'auth-guard',
  layout: 'form',
  methods: {
    async userLogin() {
      try {
        await this.$auth.loginWith('laravelSanctum', {
          data: {
            email: this.login.email,
            password: this.login.password,
          },
        })
        this.$store.dispatch('snackbar/setSnackbar', {
          text: `Happy to have you back!, ${this.$auth.user.fname}`,
        })
        this.$router.push('/dashboard')
      } catch {
        this.$store.dispatch('snackbar/setSnackbar', {
          color: 'red',
          text: 'Ops! Incorrect email or password!',
        })
      }
    },
  },
  data() {
    return {
      login: {
        email: '',
        password: '',
      },
      emailRules: [
        (v) =>
          !v ||
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          'E-mail must be valid',
      ],
    }
  },
}
