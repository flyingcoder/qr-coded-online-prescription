export default {
  name: 'Edit Profile',
  layout: 'search-notification',
  data() {
    return {
      patient_info: {
        fname: '',
        lname: '',
        email: '',
        address: '',
        phone: '',
        license_number: '',
        tin_number: '',
        password: '',
        new_password: '',
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
        this.patient_info = data.data
        console.log(this.patient_info)
      })
    },
    saveChanges() {
      this.$axios.put('users/edit').then((data) => {
        this.patient_info = data.data
      })
    },
  },
}
