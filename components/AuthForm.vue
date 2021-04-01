<template>
  <v-form class="main-form" @submit.prevent="submit">
    <div class="form-card">
      <div class="form-card-content">
        <v-row class="center form-header">
          <slot name="header"></slot>
        </v-row>
        <div class="form-inputs">
          <slot name="inputs"></slot>
          <v-text-field
            v-model="login.email"
            :rules="emailRules"
            label="E-mail"
            required
          >
            <v-icon slot="prepend" color="#1ac6b6" medium> mdi-account </v-icon>
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
            v-model="register.confirm_password"
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
</style>
