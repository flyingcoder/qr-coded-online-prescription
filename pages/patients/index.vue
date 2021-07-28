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
    <div class="list-grid-btn text-right" style="right: 10px">
      <v-icon :class="{ active: grid }" large color="grey" @click="grid = true">
        mdi-format-list-bulleted-square
      </v-icon>
      <v-icon
        :class="{ active: !grid }"
        large
        color="grey"
        @click="grid = false"
      >
        mdi-view-grid
      </v-icon>
    </div>

    <div v-if="!grid" class="patients-grid-view">
      <v-card
        max-width="450"
        class="mx-auto patients patients-background-color"
        :class="{ 'prop-name': !grid }"
      >
        <div class="v-subheader patients-grid-title">Patients</div>
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

    <div v-if="grid" class="patient-list-view">
      <v-card max-width="450" class="mx-auto doctors">
        <div class="patient-list-main-btn">
          <v-list three-line class="patient-background-color">
            <template v-for="(item, index) in patients">
              <v-subheader
                v-if="index == 0"
                :key="item.id"
                class="patients-list-title"
                >Patients</v-subheader
              >

              <v-divider :key="index + 'div' + item.id"></v-divider>

              <v-list-item :key="item.fname" style="padding: 0">
                <v-list-item-avatar>
                  <img class="user-icon" :src="item.avatar" :alt="item.fname" />
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>
                    {{ item.fullname }}
                    <div class="patient-content">
                      {{ item.address }}
                    </div>
                  </v-list-item-title>
                  <v-btn
                    class="ma-2 list-contact-patient"
                    outlined
                    x-small
                    fab
                    color="indigo"
                    @click="contact(item.id)"
                  >
                    <v-icon>mdi-phone</v-icon>
                  </v-btn>
                  <v-btn
                    class="ma-2 list-profile-patient"
                    outlined
                    x-small
                    fab
                    color="indigo"
                    @click="viewProfile(item.id)"
                  >
                    <v-icon>mdi-account</v-icon>
                  </v-btn>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script src="./patients.js"></script>

<style lang="scss" src="./patients.scss"></style>
