export default {
  name: 'settings',
  layout: 'dashboard',
  methods: {
    logout() {
      this.$auth.logout()
    },
  },
}
