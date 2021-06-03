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
            v-if="$route.params.as === 'doctor'"
            v-model="datus.license_number"
            label="PRC Number"
            class="login-input"
          >
            <v-icon slot="prepend" color="#1ac6b6" medium>
              mdi-card-bulleted
            </v-icon>
          </v-text-field>

          <v-text-field
            v-if="$route.params.as === 'pharmacy'"
            v-model="datus.pname"
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

          <v-text-field
            v-if="$route.params.as === 'pharmacy'"
            v-model="datus.fname"
            label="Name of Pharmacist"
            class="login-input"
          >
            <v-icon slot="prepend" color="#1ac6b6" medium> mdi-account </v-icon>
          </v-text-field>

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
            v-model="datus.email"
            :rules="emailRules"
            label="E-mail"
            required
          >
            <v-icon slot="prepend" color="#1ac6b6" medium> mdi-account </v-icon>
          </v-text-field>
          <v-text-field
            v-model="datus.password"
            type="password"
            label="Password"
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
        license_number: '',
        tin_number: '',
        password: '',
        password_confirmation: '',
        role: '',
      },
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
        this.$router.push('/dashboard')
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
