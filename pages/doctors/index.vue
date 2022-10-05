<template>
  <div class="main-doctors-page">
    <Preloader v-if="loading" />
    <div class="search-doctors-input">
      <v-text-field
        v-model="search"
        label="Search"
        placeholder="Search Doctor"
        prepend-inner-icon="mdi-magnify"
        outlined
        dense
        class="main-search-input"
        @keyup="filterDoc"
      ></v-text-field>
    </div>
    <div class="list-grid-btn text-right">
      <v-icon :class="{ active: grid }" large @click="grid = true">
        mdi-format-list-bulleted-square
      </v-icon>
      <v-icon :class="{ active: !grid }" large @click="grid = false">
        mdi-view-grid
      </v-icon>
    </div>

    <div v-if="!grid" class="doctors-grid-view">
      <v-card
        class="doctors doctors-background-color"
        :class="{ 'prop-name': !grid }"
      >
        <v-subheader class="page-list-title">Doctors</v-subheader>
        <v-divider></v-divider>
        <v-row no-gutters style="height: 100%" class="doctors-grid">
          <v-col
            v-for="item in filtered"
            :key="item.id"
            class="doctors-grid-main-view"
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
                  <strong>Dr. {{ item.fname + ' ' + item.lname }}</strong>
                </div>
                <div class="grid-single-content d-flex justify-center">
                  {{ item.address }}
                </div>
                <div class="grid-single-number d-flex justify-center">
                  {{ item.phone }}
                </div>
                <v-btn
                  class="ma-2 grid-contact-doctor"
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
                  class="ma-2 grid-profile-doctor"
                  outlined
                  x-small
                  fab
                  color="#1ac6b6"
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

    <div v-if="grid" class="doctor-list-view">
      <v-card class="doctors">
        <div class="doctor-list-main-btn">
          <v-list three-line class="doctors-background-color">
            <template v-for="(item, index) in filtered">
              <v-subheader
                v-if="index == 0"
                :key="item.id"
                class="page-list-title"
                >Doctors</v-subheader
              >

              <v-divider :key="index + 'div' + item.id"></v-divider>

              <v-list-item :key="item.fname">
                <v-list-item-avatar @click="viewProfile(item.id)">
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

                <v-list-item-content
                  class="d-flex"
                  @click="viewProfile(item.id)"
                >
                  <v-list-item-title style="position: relative; z-index: 1">
                    <strong>Dr. {{ item.fname + ' ' + item.lname }}</strong>
                  </v-list-item-title>
                  <!-- <v-btn
                    class="ma-2 list-profile-doctor"
                    outlined
                    x-small
                    fab
                    color="#1ac6b6"
                    @click="viewProfile(item.id)"
                  >
                    <v-icon>mdi-account</v-icon>
                  </v-btn> -->
                  <v-list-item-subtitle>
                    <div class="doctor-content">
                      {{ item.address }}
                    </div>
                    <div class="doctor-number">
                      {{ item.phone }}
                    </div>
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn
                    class="ma-2"
                    outlined
                    x-small
                    fab
                    color="#1ac6b6"
                    @click="contact(item.id)"
                  >
                    <v-icon>mdi-phone</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </template>
          </v-list>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script src="./doctors.js"></script>

<style src="./doctors.scss" lang="scss" scoped></style>
