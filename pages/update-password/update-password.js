export default {
  name: 'Update Password',
  layout: 'search-notification',
  data() {
    return {
      user_info: {
        password: '',
        password_confirmed: '',
      },
      progress: 0,
      passwordConfirmationRule: '',
      rules: {
        email: (value) => {
          console.log(value)
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
  computed: {
    passwordConfirmationRule() {
      this.password = this.new_password || 'Password must match'
    },
    /* The FormData : Here We Make A Form With Images Data To Submit. */
    form() {
      const form = new FormData()
      form.append('password', this.user_info.password)
      form.append('password_confirmed', this.user_info.password_confirmed)

      return form
    },
  },
  methods: {
    displayImage() {
      this.user_info.avatar = URL.createObjectURL(this.profile_image)
    },
    exitprofile() {
      this.$router.push('/settings')
    },
    getUserInfo() {
      this.$axios.get('login-user').then((data) => {
        this.user_info = data.data
      })
    },
    saveChanges() {
      const config = {
        onUploadProgress: (progressEvent) =>
          (this.progress = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          )),
      }

      this.$axios.post('user/edit', this.form, config).then((data) => {
        this.$auth.user.avatar = data.data.avatar
        this.$store.dispatch('snackbar/setSnackbar', {
          text: `Profile updated`,
        })
        this.$router.push('/settings')
      })
    },
  },
}
