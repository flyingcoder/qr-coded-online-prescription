<template>
    <div class="login-main-form">
        <v-form>
            <div class="login-input-card" :class="{ 'register-input-card' : $nuxt.$route.path == '/register/pharmacy'}">
                <v-text-field
                label="First Name"
                class="login-input"
                v-if="$nuxt.$route.path == '/register/doctor' || $nuxt.$route.path == '/register/patient' || $nuxt.$route.path == '/register/pharmacy'"
                >
                <v-icon
                    slot="prepend"
                    color="#1ac6b6"
                    medium
                >
                mdi-account
                </v-icon>
                </v-text-field>
                <v-text-field
                label="Email"
                class="login-input"
                v-if="$nuxt.$route.path == '/register/doctor' || $nuxt.$route.path == '/register/patient' || $nuxt.$route.path == '/register/pharmacy'"
                >
                <v-icon
                    slot="prepend"
                    color="#1ac6b6"
                    medium
                >
                    mdi-email-multiple
                </v-icon>
                </v-text-field>
                <v-text-field
                label="Password"
                class="login-input"
                v-if="$nuxt.$route.path == '/register/doctor' || $nuxt.$route.path == '/register/patient' || $nuxt.$route.path == '/register/pharmacy'"
                >
                <v-icon
                    slot="prepend"
                    color="#1ac6b6"
                    medium
                >
                    mdi-lock
                </v-icon>
                </v-text-field>
                <v-text-field
                label="Confirm Password"
                class="login-input"
                v-if="$nuxt.$route.path == '/register/doctor' || $nuxt.$route.path == '/register/patient' || $nuxt.$route.path == '/register/pharmacy'"
                >
                <v-icon
                    slot="prepend"
                    color="#1ac6b6"
                    medium
                >
                    mdi-lock
                </v-icon>
                </v-text-field>
                <v-text-field
                label="PRC Number"
                class="login-input"
                v-if="$nuxt.$route.path == '/register/doctor' || $nuxt.$route.path == '/register/pharmacy'"
                >
                <v-icon
                    slot="prepend"
                    color="#1ac6b6"
                    medium
                >
                    mdi-card-bulleted
                </v-icon>
                </v-text-field>
                <v-text-field
                label="Business Number"
                class="login-input"
                v-if="$nuxt.$route.path == '/register/pharmacy'"
                >
                <v-icon
                    slot="prepend"
                    color="#1ac6b6"
                    medium
                >
                    mdi-card-account-details
                </v-icon>
                </v-text-field>
            </div>
            <v-row class="center">
                <a class="login-main-btn" href="#" :class="{ 'register-main-btn' : $nuxt.$route.path == '/register/pharmacy', 'patient-register-btn' : $nuxt.$route.path == '/register/patient'}">REGISTER</a>
            </v-row>
        </v-form>
    </div>
</template>

<script>
    export default {
        auth: false,
        layout: 'form',
        mounted() {
            console.log($nuxt.$route.path);
        }
    }
</script>

<style scoped>
.login-input-card {
    background: #ffffff;
    position: relative;
    top: -25px;
    margin: 10px 30px;
    padding: 20px;
    border-radius: 28px 2px;
    box-shadow: 1px 1px 5px #8f8f8f;
}
.login-logo {
  padding: 35px 15px;
}
.login-main-btn {
  border-radius: 20px;
  margin-bottom: 10px !important;
  padding: 10px 55px;
  background: #1ac6b6;
  position: relative;
  color: white;
  text-align: center;
  text-decoration: none;
}
.register-input-card {
    top: -90px !important;
}
.register-main-btn {
    top: -75px !important;
}
.patient-register-btn {
    margin-top: 65px;
}
</style>