export default {
  name: 'settings',
  layout: 'dashboard',
  methods: {
    logout() {
      this.$auth.logout()
    },
  },
  data() {
    return {
      settings: [
        {
          title: 'Personal Information',
          icon: '/_nuxt/assets/icons/user.svg',
          description: 'Manage your phone numbers, emails and address',
          manage: '',
        },
        {
          title: 'Security and Login',
          icon: '/_nuxt/assets/icons/shield.svg',
          description:
            'Change your password and take actions to add more security to your account',
        },
        {
          title: 'Change password',
          icon: '/_nuxt/assets/icons/key.svg',
          description:
            'Its a good idea to use a strong password that your not using elsewhere',
        },
        {
          title: 'Logout',
          icon: '/_nuxt/assets/icons/exit-to-app-button.svg',
          description: '',
          logout: '',
        },
      ],
    }
  },
}
