export default {
  name: 'Update Password',
  layout: 'search-notification',
  data() {
    return {
      user_info: {
        password: '',
        password_confirmed: '',
        email: '',
        email_confirmed: '',
      },
      progress: 0,
      snackbar: false,
      passwordConfirmationRule: '',
      // rules: {
      //   email: (value) => {
      //     const pattern =
      //       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      //     return pattern.test(value) || 'Invalid e-mail.'
      //   },
      // },
      emailRules: [
        (v) =>
          !v ||
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          'E-mail must be valid',
      ],
    }
  },
  mounted() {},
  computed: {
    passwordConfirmationRules() {
      this.password = this.password_confirmed || 'Password must match'
    },
    /* The FormData : Here We Make A Form With Images Data To Submit. */
  },
  methods: {
    exitprofile() {
      this.$router.push('/settings')
    },
    saveChanges() {
      const config = {
        onUploadProgress: (progressEvent) =>
          (this.progress = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          )),
      }

      if (
        this.user_info.password === this.user_info.password_confirmed &&
        this.user_info.email === this.user_info.email_confirmed
      ) {
        this.$axios
          .post('user/edit-pass-email', this.user_info, config)
          .then((data) => {
            this.$auth.user.avatar = data.data.avatar
            this.$store.dispatch('snackbar/setSnackbar', {
              text: `Profile updated`,
            })
            this.$router.push('/settings')
          })
      } else {
        this.snackbar = true
      }
    },
  },
}
