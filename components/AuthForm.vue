<template>
  <v-form
    class="main-form"
    :class="registration ? 'register' : 'login'"
    @submit.prevent="submit"
  >
    <div class="form-card" :class="$route.params.as">
      <div class="center form-header">
        <div class="text-center">
          <img width="100px" src="~/assets/images/main-logo.png" />
        </div>
        <h1 class="my-0 text-center">
          {{ headerText }}
        </h1>
        <slot name="header"> </slot>
      </div>
      <slot>
        <div class="form-inputs">
          <v-text-field
            v-if="
              $route.params.as === 'doctor' || $route.params.as === 'patient'
            "
            v-model="datus.fname"
            label="First Name"
            class="login-input"
          >
            <v-icon slot="prepend" color="#1ac6b6" medium> mdi-account </v-icon>
          </v-text-field>

          <v-text-field
            v-if="
              $route.params.as === 'doctor' || $route.params.as === 'patient'
            "
            v-model="datus.lname"
            label="Last Name"
            class="login-input"
          >
            <v-icon slot="prepend" color="#1ac6b6" medium> mdi-account </v-icon>
          </v-text-field>

          <v-text-field
            v-if="$route.params.as === 'doctor'"
            v-model="datus.prc_number"
            label="PRC Number"
            class="login-input"
          >
            <v-icon slot="prepend" color="#1ac6b6" medium>
              mdi-card-bulleted
            </v-icon>
          </v-text-field>

          <div v-if="$route.params.as === 'doctor'" class="d-flex">
            <v-text-field
              v-model="datus.clinic_name"
              label="Clinic Name"
              class="login-input"
              style="margin-right: 25px"
            >
              <v-icon slot="prepend" color="#1ac6b6" medium>
                mdi-hospital-building
              </v-icon>
            </v-text-field>
            <v-text-field
              v-model="datus.phone_number"
              label="Contact No."
              class="login-input"
            >
              <v-icon slot="prepend" color="#1ac6b6" medium> mdi-phone </v-icon>
            </v-text-field>
          </div>

          <v-text-field
            v-if="$route.params.as === 'doctor'"
            v-model="datus.clinic_address"
            label="Clinic Address"
            class="login-input"
          >
            <v-icon slot="prepend" color="#1ac6b6" medium>
              mdi-map-marker
            </v-icon>
          </v-text-field>

          <div v-if="$route.params.as === 'doctor'" class="clinic-schedule">
            <div class="clinic-sched-title">Clinic Schedule</div>
            <div class="clinic-sched-time">
              <table style="width: 100%">
                <thead>
                  <tr>
                    <th width="33.33%"></th>
                    <th width="33.33%">Start</th>
                    <th width="33.33%">End</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="date in schedules" :key="date.id">
                    <td style="padding-inline: 0 !important">
                      <v-checkbox
                        v-model="datus.schedules"
                        class="sched-checkbox"
                        :label="date.day"
                        color="sucess"
                        :value="date"
                        @click="date.checker = !date.checker"
                      ></v-checkbox>
                    </td>
                    <td style="padding: 0 0 0 5px !important">
                      <v-text-field
                        v-if="date.checker"
                        v-model="date.start_time"
                        style="width: 100%"
                        class="phar-sched"
                        outlined
                        type="time"
                        dense
                      ></v-text-field>
                    </td>
                    <td style="padding-left: 5px !important">
                      <v-text-field
                        v-if="date.checker"
                        v-model="date.end_time"
                        style="width: 100%"
                        class="phar-sched"
                        outlined
                        type="time"
                        dense
                      ></v-text-field>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <v-text-field
            v-if="$route.params.as === 'pharmacy'"
            v-model="datus.fname"
            label="Name of Pharmacy"
            class="login-input"
          >
            <v-icon slot="prepend" color="#1ac6b6" medium>
              mdi-store-plus
            </v-icon>
          </v-text-field>

          <v-text-field
            v-if="$route.params.as === 'pharmacy'"
            v-model="datus.address"
            label="Business Address"
            class="login-input"
          >
            <v-icon slot="prepend" color="#1ac6b6" medium>
              mdi-map-marker
            </v-icon>
          </v-text-field>

          <v-text-field
            v-if="$route.params.as === 'pharmacy'"
            v-model="datus.lto"
            label="LTO(License to Operate) #:"
            class="login-input"
          >
            <v-icon slot="prepend" color="#1ac6b6" medium>
              mdi-file-document
            </v-icon>
          </v-text-field>

          <v-text-field
            v-if="$route.params.as === 'pharmacy'"
            v-model="datus.license_number"
            label="Business Permit #"
            class="login-input"
          >
            <v-icon slot="prepend" color="#1ac6b6" medium>
              mdi-card-account-details
            </v-icon>
          </v-text-field>

          <div v-if="$route.params.as === 'pharmacy'" class="pharmacist-info">
            <div class="pharmacist-title d-flex align-content-center">
              <v-icon
                slot="prepend"
                style="padding-right: 10px"
                color="#1ac6b6"
                medium
              >
                mdi-mother-nurse </v-icon
              >Pharmacist
            </div>
            <div class="pharmacist-fullname" style="padding: 8px 30px">
              <v-text-field
                v-model="datus.pharmacist_fname"
                label="First Name"
                class="login-input"
              >
              </v-text-field>
              <v-text-field
                v-model="datus.pharmacist_lname"
                label="Last Name"
                class="login-input"
              >
              </v-text-field>
            </div>
          </div>

          <v-text-field
            v-if="$route.params.as === 'pharmacy'"
            v-model="datus.tin_number"
            label="PRC Number"
            class="login-input"
          >
            <v-icon slot="prepend" color="#1ac6b6" medium>
              mdi-card-bulleted
            </v-icon>
          </v-text-field>

          <v-text-field
            v-if="$route.params.as === 'pharmacy'"
            v-model="datus.phone_number"
            label="Contact Number"
            class="login-input"
          >
            <v-icon slot="prepend" color="#1ac6b6" medium> mdi-phone </v-icon>
          </v-text-field>

          <v-text-field
            v-model="datus.email"
            :rules="emailRules"
            label="E-mail"
            required
          >
            <v-icon slot="prepend" color="#1ac6b6" medium> mdi-email </v-icon>
          </v-text-field>
          <v-text-field
            v-model="datus.password"
            type="password"
            label="Password"
            :rules="passwordRules"
            required
          >
            <v-icon slot="prepend" color="#1ac6b6" medium> mdi-lock </v-icon>
          </v-text-field>
          <v-text-field
            v-if="registration"
            v-model="datus.password_confirmation"
            type="password"
            label="Confirm Password"
            required
          >
            <v-icon slot="prepend" color="#1ac6b6" medium> mdi-lock </v-icon>
          </v-text-field>
          <input v-if="registration" v-model="datus.role" type="hidden" />
        </div>
        <div class="center form-action">
          <v-btn class="qrx-btn" type="submit">{{ buttonText }}</v-btn>
        </div>
      </slot>
    </div>
    <Snackbar />
  </v-form>
</template>
<script>
export default {
  props: {
    registration: {
      type: Boolean,
      default() {
        return false
      },
    },
    buttonText: {
      type: String,
      default() {
        return 'LOGIN'
      },
    },
    headerText: {
      type: String,
      default() {
        return 'Welcome!'
      },
    },
  },
  data() {
    return {
      datus: {
        fname: '',
        lname: '',
        email: '',
        pharmacist_fname: '',
        pharmacist_lname: '',
        clinic_name: '',
        clinic_address: '',
        schedules: [],
        license_number: '',
        phone_number: '',
        lto: '',
        address: '',
        prc_number: '',
        tin_number: '',
        password: '',
        password_confirmation: '',
        role: '',
      },
      schedules: [
        {
          id: 1,
          checker: false,
          day: 'Monday',
          start_time: '',
          end_time: '',
        },
        {
          id: 2,
          checker: false,
          day: 'Tuesday',
          start_time: '',
          end_time: '',
        },
        {
          id: 3,
          checker: false,
          day: 'Wednesday',
          start_time: '',
          end_time: '',
        },
        {
          id: 4,
          checker: false,
          day: 'Thursday',
          start_time: '',
          end_time: '',
        },
        {
          id: 5,
          checker: false,
          day: 'Friday',
          start_time: '',
          end_time: '',
        },
        {
          id: 6,
          checker: false,
          day: 'Saturday',
          start_time: '',
          end_time: '',
        },
        {
          id: 7,
          checker: false,
          day: 'Sunday',
          start_time: '',
          end_time: '',
        },
      ],
      passwordRules: [
        (v) =>
          !v ||
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(v) ||
          'Password must contain atleast 1 Capital Letter and 8 Digit',
      ],
      emailRules: [
        (v) =>
          !v ||
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          'E-mail must be valid',
      ],
      // passwordRules: [(v) => !v || 'Password is required'],
    }
  },
  created() {
    console.log(this.registration)
  },
  methods: {
    submit() {
      if (!this.registration) this.userLogin()
      else this.registerUser()
    },
    async registerUser() {
      this.datus.role = this.$route.params.as
      try {
        await this.$axios.post('/users', this.datus)
        await this.$auth.loginWith('laravelSanctum', {
          data: {
            email: this.datus.email,
            password: this.datus.password,
          },
        })
        this.$store.dispatch('snackbar/setSnackbar', {
          text: `Welcome! ${this.$auth.user.fname}, stay safe!`,
        })
        this.$router.push('/dashboard')
      } catch {
        this.$store.dispatch('snackbar/setSnackbar', {
          color: 'red',
          text: 'Oops! Please check your input.',
        })
      }
    },
    async userLogin() {
      try {
        await this.$auth.loginWith('laravelSanctum', {
          data: {
            email: this.datus.email,
            password: this.datus.password,
          },
        })
        this.$store.dispatch('snackbar/setSnackbar', {
          text: `Happy to have you back!, ${this.$auth.user.fname}`,
        })
        // this.$router.push('/dashboard')
      } catch {
        this.$store.dispatch('snackbar/setSnackbar', {
          color: 'red',
          text: 'Ops! Incorrect email or password!',
        })
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.main-form {
  background-color: #ffffff;
  margin: 90px 0;
  min-height: calc(100vh - 180px);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-card {
  background: #ffffff;
  margin: -50px 20px;
  padding: 20px;
  width: -webkit-fill-available;
  border-radius: 28px 2px;
  box-shadow: 1px 1px 5px #8f8f8f;
  display: flex;
  flex-direction: column;
}
.clinic-sched-time {
  table {
    tbody {
      tr {
        height: 60px !important;
        td {
          padding: 0 20px;
          .sched-checkbox {
            margin-top: 0 !important;
          }
          .v-text-field {
            margin-bottom: -10px !important;
          }
        }
      }
    }
  }
}
.register {
  & .patient {
    top: 25px !important;
    .v-text-field {
      padding-top: 8px !important;
      margin-top: 2px !important;
    }
  }
  & .doctor,
  .pharmacy {
    .v-text-field {
      padding-top: 4px !important;
      margin-top: 0px !important;
    }
  }

  h1 {
    font-size: 22px !important;
  }
  img {
    width: 70px;
  }

  .clinic-sched-title {
    font-size: 18px;
    font-weight: 500;
  }

  .form-inputs {
    padding-top: 20px;
  }
  .form-header div {
    padding: 0px;
  }
}
.registrar-buttons {
  margin: 45px 0;
}
.register-main-btn {
  border-radius: 20px 0px;
}
.login {
  .login-logo {
    margin-top: 20px;
    img {
      display: block;
    }
  }
  .form-header {
    margin: 20px;
  }
  .form-inputs {
    margin: 20px;
  }
  .form-action {
    margin: 20px;
  }
  .login-main-btn {
    a {
      color: white;
    }
    border-radius: 20px;
    margin-bottom: 10px !important;
    padding: 10px 55px;
    background: #1ac6b6;
    color: white;
    text-align: center;
    text-decoration: none;
  }
}
</style>
