<template>
  <div class="main-patients-page">
    <div class="search-patients-input">
      <v-text-field
        label="Search"
        placeholder="Search Patient"
        prepend-inner-icon="mdi-magnify"
        outlined
        dense
        class="main-search-input"
      ></v-text-field>
    </div>

    <v-list three-line class="pharmacys-background-color">
      <template v-for="(item, index) in allmedicines">
        <v-subheader
          v-if="index == 0"
          :key="item.id"
          :class="{
            'page-item': true,
            patient_pharmacy_title: $auth.user.role == 'patient',
            patient_pharmacy_title: $auth.user.role == 'doctor',
          }"
          class="pharmacys-list-title"
          >All Medicine in the Database</v-subheader
        >

        <v-divider :key="index + 'div' + item.id"></v-divider>

        <v-list-item :key="index + item.id" class="pharmacy-list-section">
          <v-list-item-avatar>
            <img :src="$config.baseURL + '/storage/medicines/' + item.image" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>
              {{ item.generic_name }} &nbsp;&nbsp;{{ item.size }}
              <br />
              <span class="medicine-sub-info">
                Brand:
                {{ item.brand }}
              </span>
            </v-list-item-title>
            <v-btn
              class="ma-2 list-contact-pharmacy"
              outlined
              x-small
              fab
              color="indigo"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </div>
</template>

<script src="./all-medicines.js"></script>

<style scoped src="./all-medicines.css"></style>
