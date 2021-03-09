export default {
  auth: false,
  middleware: 'auth-guard',
  layout: 'form',
  methods: {
    async userLogin() {
      try {
        const response = await this.$auth.loginWith('laravelSanctum', {
          data: {
            email: 'alvin@resetaqrx.com',
            password: 'password',
          },
        })
        console.log(response)
      } catch (err) {
        console.log(err)
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
