<template>
  <div class="pharmacy-main-list">
    <Preloader v-if="loading" />
    <div class="search-pharmacy-input">
      <v-text-field
        v-model="search"
        label="Search Pharmacy"
        prepend-inner-icon="mdi-magnify"
        outlined
        dense
        class="main-search-input"
        @keyup="filterPharmacy"
      ></v-text-field>
    </div>
    <div v-if="$auth.user.role == 'pharmacy'" class="list-grid-btn text-right">
      <v-btn
        class="mx-2 add-product-btn"
        fab
        dark
        small
        x-small
        color="#1ac6b6"
        to="drugs/add-drugs"
      >
        <v-icon color="white"> mdi-plus </v-icon>
      </v-btn>
    </div>
    <div class="pharmacy-list-view">
      <div class="pharmacy">
        <div class="pharmacy-list-main-btn">
          <v-list three-line class="flow-dashboard pharmacys-background-color">
            <template v-for="(item, index) in filtered">
              <v-subheader
                v-if="index == 0"
                :key="item.id"
                :class="{
                  'page-item': true,
                  patient_pharmacy_title: $auth.user.role == 'patient',
                  patient_pharmacy_title: $auth.user.role == 'doctor',
                }"
                class="page-list-title"
                >Pharmacy List</v-subheader
              >

              <v-divider :key="index + 'div' + item.id"></v-divider>

              <pharma-list-item :key="item.id + 'pharma'" :item="item">
              </pharma-list-item>
            </template>
          </v-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./pharmacy.js"></script>

<style src="./pharmacy.scss" lang="scss" scoped></style>
