<template>
  <div class="pharmacy-list">
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
    <div v-if="!grid" class="patients-grid-view">
      <v-card
        max-width="450"
        class="mx-auto patients patients-background-color"
        :class="{ 'prop-name': !grid }"
      >
        <div class="v-subheader patients-grid-title">Pharmacy</div>
        <v-row no-gutters style="height: 100%" class="patients-grid">
          <v-col
            v-for="item in patients"
            :key="item.id"
            class="patients-grid-main-view"
            cols="6"
          >
            <div>
              <v-card
                class="pa-2"
                height="150px"
                elevation="2"
                width="95%"
                style="margin: 5px"
              >
                <div class="grid-single-image text-center-pd">
                  <img class="user-icon" :src="item.avatar" :alt="item.fname" />
                </div>
                <v-divider></v-divider>
                <div class="grid-single-name d-flex justify-center">
                  {{ item.fname + ' ' + item.lname }}
                </div>
                <div class="grid-single-content d-flex justify-center">
                  {{ item.address }}
                </div>
                <div class="grid-single-number d-flex justify-center">
                  {{ item.phone }}
                </div>
                <v-btn
                  class="ma-2 grid-contact-patient"
                  outlined
                  x-small
                  fab
                  color="indigo"
                  background="red"
                  @click="contact(item.id)"
                >
                  <v-icon>mdi-phone</v-icon>
                </v-btn>
                <v-btn
                  class="ma-2 grid-profile-patient"
                  outlined
                  x-small
                  fab
                  color="indigo"
                  @click="viewProfile(item.id)"
                >
                  <v-icon>mdi-account</v-icon>
                </v-btn>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </div>
</template>

<script src="./pharmacy.js"></script>
<style src="./pharmacy.scss" lang="scss"></style>
