export default {
  auth: false,
  middleware: 'auth-guard',
  layout: 'form',
  methods: {
    async userLogin() {
      try {
        await this.$auth.loginWith('laravelSanctum', {
          data: {
            email: 'alvin@resetaqrx.com',
            password: 'password',
          },
        })
        this.$store.dispatch('snackbar/setSnackbar', {
          text: `Thanks for signing in, ${this.$auth.user.name}`,
        })
        this.$router.push('/')
      } catch {
        this.$store.dispatch('snackbar/setSnackbar', {
          color: 'red',
          text: 'There was an issue signing in.  Please try again.',
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
