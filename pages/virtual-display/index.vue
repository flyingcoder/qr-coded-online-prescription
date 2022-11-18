<template>
  <div class="prescription-list">
    <Preloader v-if="loading" />
    <div class="d-flex justify-center pb-8">
      <div class="store-img d-flex align-center">
        <img
          src="/_nuxt/assets/images/avatar.png"
          style="width: 60px !important; height: 60px !important"
          class="user-icon mr-5"
          alt=""
        />
      </div>
      <div class="store-info">
        <div class="d-flex" style="font-size: 23px; font-weight: bold">
          Mercury Drug
        </div>
        <div class="d-flex">Kidapawan City</div>
      </div>
    </div>
    <v-row class="justify-center">
      <h3 class="wallet-title">Virtual Display</h3>
    </v-row>
    <v-row class="justify-center">
      <div>
        <v-icon slot="prepend" color="#1ac6b6" large> mdi-image </v-icon>
      </div>
      <div class="px-15">
        <v-icon slot="prepend" color="#1ac6b6" large>
          mdi-list-box-outline
        </v-icon>
      </div>
      <div>
        <v-icon slot="prepend" color="#1ac6b6" large>
          mdi-tray-arrow-up
        </v-icon>
      </div>
    </v-row>
    <v-row>
      <div class="search-pharmacy-input pt-5" style="width: 90%; margin: auto">
        <v-text-field
          v-model="search"
          label="Search"
          placeholder="Search Medicine"
          prepend-inner-icon="mdi-magnify"
          outlined
          style="width: 100%"
          dense
          class="main-search-input"
        ></v-text-field>
      </div>
    </v-row>
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

<script src="./virtual.js"></script>

<style lang="scss" scoped src="./virtual.scss"></style>
