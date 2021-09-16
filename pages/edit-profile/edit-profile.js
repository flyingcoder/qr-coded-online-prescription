export default {
  name: 'Edit Profile',
  layout: 'search-notification',
  data() {
    return {
      user_info: {
        fname: '',
        lname: '',
        email: '',
        address: '',
        phone: '',
        license_number: '',
        tin_number: '',
        password: '',
        password_confirmed: '',
        bio: '',
      },
      rules: {
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      },
    }
  },
  mounted() {
    this.getUserInfo()
  },
  methods: {
    exitprofile() {
      this.$router.push('/settings')
    },
    getUserInfo() {
      this.$axios.get('login-user').then((data) => {
        this.user_info = data.data
      })
    },
    saveChanges() {
      this.$axios.put('user/edit', this.user_info).then(() => {
        location.reload()
      })
    },
  },
}
