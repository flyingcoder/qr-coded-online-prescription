<template>
  <div>
    <div>
      <v-card elevation="3" class="padding-bottom-sm">
        <div class="doctor-profile text-center">
          <img
            style="
              border-radius: 100%;
              width: 30%;
              border: 2px solid #1ac6b6;
              margin-top: 10px;
            "
            :src="profile.avatar"
            :alt="profile.fname"
          />
        </div>
        <div class="doctor-information padding-content text-center-pd">
          <div class="name padding-bottom-sm">
            {{ profile.name }}
          </div>
          <div id="word-related" class="margin-top-pull padding-bottom-sm">
            <b>PHARMACY</b>
          </div>
          <div class="address">
            {{ profile.address }}
          </div>
          <div class="contact">
            {{ profile.number }}
          </div>
          <div class="content">
            {{ profile.description }}
          </div>
        </div>
      </v-card>
      <div class="text-center-pd padding-top-md">
        <v-btn
          depressed
          color="#1ac6b6"
          width="60%"
          class="btn-radius find-doctors-btn"
          style="color: white"
          @click="$route.push('chatbox/' + profile.id)"
        >
          Contact
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  middleware: 'auth',
  data() {
    return {
      profile: {},
    }
  },
  mounted() {
    this.getUser()
  },
  methods: {
    async getUser() {
      await this.$axios.get('user/' + this.$route.params.id).then((data) => {
        this.profile = data.data
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
