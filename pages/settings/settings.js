export default {
  name: 'settings',
  layout: 'search-notification',
  data() {
    return {
      payment_details: false,
    }
  },
  methods: {
    backRoute() {
      this.$router.push('/dashboard')
    },
    logout() {
      this.$auth.logout()
    },
    updatePaymentDetails() {
      this.payment_details = true
    },
    closePayment() {
      this.payment_details = false
    },
  },
}
// export default {
//   name: 'settings',
//   layout: 'dashboard',
//   methods: {
//     logout() {
//       this.$auth.logout()
//     },
//   },
//   data() {
//     return {
//       settings: [
//         {
//           title: 'Personal Information',
//           icon: '/_nuxt/assets/icons/user.svg',
//           description: 'Manage your phone numbers, emails and address',
//           manage: '',
//         },
//         {
//           title: 'Security and Login',
//           icon: '/_nuxt/assets/icons/shield.svg',
//           security: '',
//           description:
//             'Change your password and take actions to add more security to your account',
//         },
//         {
//           title: 'Change password',
//           icon: '/_nuxt/assets/icons/key.svg',
//           change: '',
//           description:
//             'Its a good idea to use a strong password that your not using elsewhere',
//         },
//       ],
//     }
//   },
// }
