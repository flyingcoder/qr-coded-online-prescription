<template>
  <div>
    <div>
      <v-card elevation="3" class="padding-bottom-sm">
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
          <div class="name padding-bottom-sm">Dr. {{ profile.fullname }}</div>
          <div id="word-related" class="margin-top-pull doctors-list-info">
            {{ profile.experties }}
          </div>
          <div class="doctors-list-info" style="top: -10px">
            {{ profile.address }}
          </div>
          <div class="doctors-list-info" style="top: -15px">
            {{ profile.phone }}
          </div>
          <div class="content">
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
          @click="$router.push('/chatbox/' + profile.id)"
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
      await this.$axios
        .get('user/' + this.$route.params.doctor_id)
        .then((data) => {
          this.profile = data.data
        })
    },
  },
}
</script>

<style src="../doctors.scss" lang="scss" scoped></style>
