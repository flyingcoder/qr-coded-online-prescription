<template>
  <div class="main-patients-page">
    <Preloader v-if="loading" />
    <div class="search-patients-input">
      <v-text-field
        v-model="search"
        label="Search"
        placeholder="Search Patient"
        prepend-inner-icon="mdi-magnify"
        outlined
        dense
        class="main-search-input"
        @keyup="filterPatients"
      ></v-text-field>
    </div>
    <div class="list-grid-btn text-right" style="right: 10px">
      <v-icon :class="{ active: grid }" large @click="grid = true">
        mdi-format-list-bulleted-square
      </v-icon>
      <v-icon :class="{ active: !grid }" large @click="grid = false">
        mdi-view-grid
      </v-icon>
    </div>

    <div v-if="!grid" class="patients-grid-view">
      <v-card
        class="patients patients-background-color"
        :class="{ 'prop-name': !grid }"
      >
        <div class="v-subheader patients-grid-title page-item page-list-title">
          Patients
        </div>

        <v-divider></v-divider>
        <v-row no-gutters style="height: 100%" class="patients-grid">
          <v-col
            v-for="item in filtered"
            :key="item.id"
            class="patients-grid-main-view"
            cols="6"
          >
            <div>
              <v-card
                class="pa-2"
                elevation="2"
                width="95%"
                style="margin: 5px"
              >
                <div class="grid-single-image text-center-pd">
                  <img
                    v-if="
                      item.avatar == 'avatar.png' ||
                      item.avatar ==
                        'https://api.resetaqrx.com/storage/users/user-default.png'
                    "
                    class="user-icon"
                    :src="require(`~/assets/images/avatar.png`)"
                    :alt="item.fname"
                  />
                  <img
                    v-else
                    class="user-icon"
                    :src="item.avatar"
                    :alt="item.fname"
                  />
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
                <div class="d-flex justify-center" style="margin-top: 5px">
                  <v-btn
                    class="ma-2 grid-contact-patient"
                    outlined
                    x-small
                    fab
                    color="#1ac6b6"
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
                    color="#1ac6b6"
                    @click="viewProfile(item.id)"
                  >
                    <v-icon>mdi-account</v-icon>
                  </v-btn>
                </div>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </div>

    <div v-if="grid" class="patient-list-view">
      <v-card class="doctors">
        <div class="patient-list-main-btn">
          <v-list three-line class="patient-background-color">
            <template v-for="(item, index) in filtered">
              <v-subheader
                v-if="index == 0"
                :key="item.id"
                class="page-item page-list-title"
                >Patients</v-subheader
              >

              <v-divider :key="index + 'div' + item.id"></v-divider>

              <v-list-item :key="item.fname" style="padding: 0">
                <v-list-item-avatar
                  class="table-avatar cursor-pointer"
                  @click="viewProfile(item.id)"
                >
                  <img
                    v-if="
                      item.avatar == 'avatar.png' ||
                      item.avatar ==
                        'https://api.resetaqrx.com/storage/users/user-default.png'
                    "
                    class="user-icon"
                    :src="require(`~/assets/images/avatar.png`)"
                    :alt="item.fname"
                  />
                  <img
                    v-else
                    class="user-icon"
                    :src="item.avatar"
                    :alt="item.fname"
                  />
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title class="d-flex">
                    <div
                      class="cursor-pointer"
                      style="width: 60%"
                      @click="viewProfile(item.id)"
                    >
                      {{ item.fullname }}
                      <div class="patient-content">
                        {{ item.address }}
                      </div>
                    </div>
                    <v-divider
                      :key="index + 'div' + item.id"
                      vertical
                    ></v-divider>
                    <div class="d-flex">
                      <v-btn
                        class="list-profile-patient"
                        outlined
                        small
                        fab
                        color="#1ac6b6"
                        @click="contact(item.id)"
                      >
                        <v-icon>mdi-message-processing-outline</v-icon>
                      </v-btn>
                      <a :href="'tel: ' + item.phone">
                        <v-btn
                          class="list-contact-patient"
                          outlined
                          small
                          fab
                          color="#1ac6b6"
                        >
                          <v-icon>mdi-phone</v-icon>
                        </v-btn>
                      </a>
                    </div>
                  </v-list-item-title>
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
