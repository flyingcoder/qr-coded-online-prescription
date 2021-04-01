<template>
  <v-form
    class="main-form"
    :class="registration ? 'register' : 'login'"
    @submit.prevent="submit"
  >
    <div class="form-card" :class="$route.params.as">
      <div class="form-card-content">
        <v-row class="center form-header">
          <v-col cols="12" class="text-center">
            <img width="100px" src="~/assets/images/reseta-form-img.png" />
          </v-col>
          <v-col cols="12" class="text-center py-0">
            <h1 class="my-0">
              {{ headerText }}
            </h1>
          </v-col>
          <slot name="header">
            <v-col class="text-center py-0">
              <p class="text-black no-margin">Don't have an Account?</p>
              <NuxtLink to="/register">Click Here!</NuxtLink>
            </v-col>
          </slot>
        </v-row>
        <slot>
          <div class="form-inputs">
            <slot name="inputs"></slot>

            <v-text-field
              v-model="login.email"
              :rules="emailRules"
              label="E-mail"
              required
            >
              <v-icon slot="prepend" color="#1ac6b6" medium>
                mdi-account
              </v-icon>
            </v-text-field>
            <v-text-field
              v-model="login.password"
              type="password"
              label="Password"
              required
            >
              <v-icon slot="prepend" color="#1ac6b6" medium> mdi-lock </v-icon>
            </v-text-field>
            <v-text-field
              v-if="registration"
              v-model="register.password_confirmation"
              type="password"
              label="Confirm Password"
              required
            >
              <v-icon slot="prepend" color="#1ac6b6" medium> mdi-lock </v-icon>
            </v-text-field>
          </div>
          <v-row class="center form-action">
            <v-btn class="qrx-btn" type="submit">{{ buttonText }}</v-btn>
          </v-row>
        </slot>
      </div>
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
      login: {
        email: '',
        password: '',
      },
      register: {
        confirm_password: '',
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
  methods: {
    submit() {
      if (!this.registration) this.userLogin()
    },
    async userLogin() {
      try {
        await this.$auth.loginWith('laravelSanctum', {
          data: {
            email: this.login.email,
            password: this.login.password,
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
  margin-top: 90px;
  min-height: 70%;
}
.form-card {
  background: #ffffff;
  margin: 10px 20px;
  padding: 20px;
  position: fixed;
  top: 25px;
  width: -webkit-fill-available;
  border-radius: 28px 2px;
  box-shadow: 1px 1px 5px #8f8f8f;
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
    top: 10px !important;
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
    button {
      margin: 20px;
    }
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
