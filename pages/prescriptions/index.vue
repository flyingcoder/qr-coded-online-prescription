<template>
  <div class="prescription-list">
    <div class="search-pharmacy-input">
      <v-text-field
        v-model="search"
        label="Search"
        placeholder="Search Prescription"
        prepend-inner-icon="mdi-magnify"
        outlined
        dense
        class="main-search-input"
        @keyup="filterPrescriptions"
      ></v-text-field>
    </div>
    <v-list
      v-if="prescriptions.length > 0"
      three-line
      class="pharmacys-background-color"
    >
      <template v-for="(item, index) in filtered">
        <v-subheader
          v-if="index == 0"
          :key="index + item.created_at"
          :class="{
            'page-item': true,
            patient_pharmacy_title: $auth.user.role == 'patient',
            patient_pharmacy_title: $auth.user.role == 'doctor',
          }"
          class="page-list-title"
          >My Prescriptions</v-subheader
        >

        <v-divider :key="index + 'div'"></v-divider>

        <v-list-item
          :key="index + 'span'"
          class="pharmacy-list-section"
          @click="viewPrescription(item.id)"
        >
          <v-list-item-avatar>
            <v-icon class="user-icon" color="#1ac6b6">mdi-prescription</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>
              <strong>From:</strong>
              {{ item.doctor.prefix ? item.doctor.prefix : 'Dr.' }}
              {{ item.doctor.fname }} {{ item.doctor.lname }} <br />
              <strong>Given:</strong>
              {{ $moment(item.created_at).format('ll') }}
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

<script src="./prescriptions.js"></script>

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
