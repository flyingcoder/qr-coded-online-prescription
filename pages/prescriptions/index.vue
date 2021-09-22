<template>
  <div class="prescription-list">
    <div class="search-pharmacy-input">
      <v-text-field
        label="Search"
        placeholder="Search Patient"
        prepend-inner-icon="mdi-magnify"
        outlined
        dense
        class="main-search-input"
      ></v-text-field>
    </div>
    <v-list
      v-if="prescriptions.length > 0"
      three-line
      class="pharmacys-background-color"
    >
      <template v-for="(item, index) in prescriptions">
        <v-subheader
          v-if="index == 0"
          :key="index + item.created_at"
          :class="{
            'page-item': true,
            patient_pharmacy_title: $auth.user.role == 'patient',
            patient_pharmacy_title: $auth.user.role == 'doctor',
          }"
          class="pharmacys-list-title"
          >My Prescriptions</v-subheader
        >

        <v-divider :key="index + 'div'"></v-divider>

        <v-list-item
          :key="index + 'span'"
          class="pharmacy-list-section"
          @click="viewPrescription(item.id)"
        >
          <v-list-item-avatar>
            <v-icon>mdi-prescription</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>
              From: {{ item.doctor.prefix ? item.doctor.prefix : 'Dr.' }}
              {{ item.doctor.fname }} {{ item.doctor.lname }} <br />
              Given: {{ $moment(item.created_at).format('ll') }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
    <div v-else class="no-prescription">
      The prescriptions will display here.
    </div>
  </div>
</template>

<script>
export default {
  name: 'Prescriptions',
  layout: 'dashboard',
  data() {
    return {
      prescriptions: [],
    }
  },
  mounted() {
    this.getPrescriptions()
  },
  methods: {
    viewPrescription(id) {
      this.$router.push('/prescriptions/pad/' + id)
    },
    getPrescriptions() {
      this.$axios.get('prescriptions').then((data) => {
        this.prescriptions = data.data
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.search-pharmacy-input {
  height: 45px;
}
.no-prescription {
  padding-top: 100px;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
}
</style>
