<template>
  <div>
    <div>
      <v-card elevation="3" class="padding-bottom-sm">
        <div class="doctor-profile text-center">
          <img class="user-icon" :src="profile.avator" :alt="profile.fname" />
        </div>
        <div class="doctor-information padding-content text-center-pd">
          <div class="name padding-bottom-sm">
            {{ profile.name }}
          </div>
          <div id="word-related" class="margin-top-pull padding-bottom-sm">
            <b>PEDIATRICIAN</b>
          </div>
          <div class="address">
            {{ profile.address }}
          </div>
          <div class="contact">
            {{ profile.phone }}
          </div>
          <div class="content">
            {{ profile.bio }}
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
      profile: {
        id: 0,
        avatar: '~/assets/images/Muzan_Anime_Profile.png',
        name: 'DR NEIL LAQUIHON',
        content: `KDHI, DIKAPAWAN CITY`,
        number: '09187829876',
        description:
          'Doctors, also known as Physicians, are licensed health professionals who maintain and restore human health through the practice of medicine. They examine patients, review their medical history, diagnose illnesses or injuries, administer treatment, and counsel patients on their health and well being.',
      },
    }
  },
  mounted() {
    this.getDoctor()
  },
  methods: {
    getDoctor() {
      this.$axios.get('user/' + this.$route.params).then((data) => {
        console.log(data)
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
