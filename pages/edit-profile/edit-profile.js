export default {
  name: 'Edit Profile',
  layout: 'search-notification',
  data() {
    return {
      loading: false,
      sex: ['Male', 'Female'],
      user_info: {
        fname: '',
        lname: '',
        email: '',
        birthday: '',
        morbidity: 1,
        others: '',
        personto_contact: '',
        sex: '',
        address: '',
        clinic_name: '',
        prc_number: '',
        clinic_address: '',
        phone: '',
        experties: '',
        license_number: '',
        tin_number: '',
        clinic_schedules: [],
        bio: '',
        avatar: '',
      },
      schedules: [
        {
          id: 'monday',
          checker: false,
          day: 'Monday',
          start_time: '',
          end_time: '',
        },
        {
          id: 'tuesday',
          checker: false,
          day: 'Tuesday',
          start_time: '',
          end_time: '',
        },
        {
          id: 'wednesday',
          checker: false,
          day: 'Wednesday',
          start_time: '',
          end_time: '',
        },
        {
          id: 'thursday',
          checker: false,
          day: 'Thursday',
          start_time: '',
          end_time: '',
        },
        {
          id: 'friday',
          checker: false,
          day: 'Friday',
          start_time: '',
          end_time: '',
        },
      ],
      profile_image: '',
      progress: 0,
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
    // this.getUserSchedule()
  },
  computed: {
    passwordConfirmationRule() {
      this.password = this.new_password || 'Password must match'
    },
    /* The FormData : Here We Make A Form With Images Data To Submit. */
    form() {
      const form = new FormData()

      form.append('image', this.profile_image)
      form.append('fname', this.user_info.fname)
      form.append('lname', this.user_info.lname)
      form.append('email', this.user_info.email)
      form.append('address', this.user_info.address)
      form.append('phone', this.user_info.phone)
      form.append('license_number', this.user_info.license_number)
      form.append('tin_number', this.user_info.tin_number)
      form.append('prc_number', this.user_info.prc_number)
      form.append('bio', this.user_info.bio)
      form.append(
        'clinic_schedules',
        JSON.stringify(this.user_info.clinic_schedules)
      )
      // form.append('clinic_sched', this.user_info.schedules)
      form.append('clinic_name', JSON.stringify(this.user_info.clinic_name))
      form.append('clinic_address', this.user_info.clinic_address)

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
      this.loading = true
      this.$axios.get('login-user').then((data) => {
        this.user_info = data.data
        for (const dispSched of this.schedules) {
          for (const userSched of this.user_info.clinic_schedules) {
            if (userSched.day === dispSched.day) {
              dispSched.checker = true
              dispSched.start_time = userSched.start_time
              dispSched.end_time = userSched.end_time
            }
          }
        }
        this.loading = false
      })
    },
    // getUserSchedule() {
    //   this.$axios.get('user-schedule').then((data) => {
    //     this.schedules = data.data
    //   })
    // },
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
