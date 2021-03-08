export default {
  auth: false,
  middleware: 'auth-guard',
  layout: 'form',
  methods: {
    login() {
      this.$auth.loginWith('laravelSanctum', {
        data: {
          email: 'alvin@resetaqrx.com',
          password: 'password',
        },
      })
    },
  },
  data() {
    return {
      emailRules: [
        (v) =>
          !v ||
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          'E-mail must be valid',
      ],
    }
  },
}
