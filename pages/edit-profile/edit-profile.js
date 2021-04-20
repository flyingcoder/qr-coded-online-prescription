export default {
  name: 'Edit Profile',
  layout: 'search-notification',
  methods: {
    exitprofile() {
      this.$router.push('/settings')
    },
  },
  data() {
    return {
      fname: 'Alvin',
      lname: 'Pacot',
      email: 'patient@resetaqrx.com',
      address: 'Kidapawan City',
      phone: '09189878921',
      license_number: '1234',
      tin_number: '1234',
      password: '',
      bio: 'lorem ipsum dot wai lorem ipsum dot wai lorem ipsum dot wai',
      rules: {
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      },
    }
  },
}
