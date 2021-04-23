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
            :src="pharmacy.avatar"
            :alt="pharmacy.fname"
          />
        </div>
        <div class="doctor-information padding-content text-center-pd">
          <div class="name padding-bottom-sm">
            {{ pharmacy.name }}
          </div>
          <div id="word-related" class="margin-top-pull padding-bottom-sm">
            <b>PHARMACY</b>
          </div>
          <div class="address">
            {{ pharmacy.address }}
          </div>
          <div class="contact">
            {{ pharmacy.number }}
          </div>
          <div class="content">
            {{ pharmacy.description }}
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
          to="/chatbox/2"
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
      pharmacy: {
        id: 0,
        avatar: '/_nuxt/assets/images/pharmacy-logo.jpg',
        name: 'Brennen Drugs CO.',
        address: `Davao Del Sur`,
        number: '09187829876',
        description:
          'Pharmacy is the clinical health science that links medical science with chemistry and it is charged with the discovery',
      },
    }
  },
}
</script>

<style lang="scss" scoped></style>
