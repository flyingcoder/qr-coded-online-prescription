<template>
  <div>
    <div>
      <v-card elevation="3" class="padding-bottom-sm">
        <div class="user-profile text-center">
          <img
            :src="profile.avatar"
            style="
              border-radius: 100%;
              width: 30%;
              border: 2px solid #1ac6b6;
              margin-top: 10px;
            "
            :alt="profile.fname"
          />
        </div>
        <div class="doctor-information padding-content text-center-pd">
          <div
            class="name padding-bottom-sm"
            style="font-size: 21px !important; font-weight: 600 !important"
          >
            {{ profile.fullname }}
          </div>
          <div class="pharmacy-top-info">
            {{ profile.address }}
          </div>
          <div class="pharmacy-top-info">
            {{ profile.phone }}
          </div>
          <div
            class="content"
            style="position: relative; top: 20px; padding-bottom: 20px"
          >
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
          @click="profile.id"
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
.patient-top-info {
  position: relative !important;
  top: -6px;
  font-size: 15px;
}
</style>
