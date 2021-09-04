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
          <div id="word-related" class="margin-top-pull padding-bottom-sm">
            <b
              style="font-size: 21px !important; font-weight: 600 !important"
              >{{ profile.fullname }}</b
            ><br />
            <span class="pharmacy-top-info">{{ profile.experties }}</span
            ><br />
            <span class="pharmacy-top-info" style="top: -12px">{{
              profile.address
            }}</span
            ><br />
            <span class="pharmacy-top-info" style="top: -17px">{{
              profile.phone
            }}</span>
          </div>

          <div>
            {{ profile.bio }}
          </div>
          <div style="margin-top: 24px; font-weight: 900; font-size: 16px">
            {{ profile.email }}
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

<style lang="scss" scoped>
.pharmacy-top-info {
  position: relative !important;
  top: -6px;
  font-size: 15px;
}
</style>
