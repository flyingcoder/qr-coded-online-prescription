<template>
  <div>
    <Preloader v-if="loading" />
    <div>
      <div class="padding-bottom-sm">
        <div class="user-profile text-center">
          <img
            v-if="
              profile.avatar == 'avatar.png' ||
              profile.avatar ==
                'https://api.resetaqrx.com/storage/users/user-default.png'
            "
            :src="require(`~/assets/images/avatar.png`)"
            :alt="profile.fname"
          />
          <img v-else :src="profile.avatar" :alt="profile.fname" />
        </div>
        <div class="doctor-information padding-content text-center-pd">
          <div
            class="name padding-bottom-sm"
            style="font-size: 21px !important; font-weight: 600 !important"
          >
            {{ profile.fullname }}
          </div>
          <div class="profile-top-info">
            {{ profile.address }}
          </div>
          <div class="profile-top-info">
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
      </div>
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
      loading: false,
      profile: {},
    }
  },
  mounted() {
    this.getUser()
  },
  methods: {
    async getUser() {
      this.loading = true
      await this.$axios.get('user/' + this.$route.params.id).then((data) => {
        this.profile = data.data
        this.loading = false
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
