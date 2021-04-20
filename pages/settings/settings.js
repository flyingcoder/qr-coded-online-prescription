export default {
  name: 'settings',
  layout: 'dashboard',
  methods: {
    logout() {
      this.$router.logout()
    },
  },
}
