<template>
  <div class="main-medication-page">
    <v-row class="justify-center padding-bottom-sm">
      <h3>MEDICATION</h3>
    </v-row>
    <div
      v-for="doctor in medication"
      :key="doctor.id"
      class="main-medication-content"
    >
      <v-divider style="border-width: 3px"></v-divider>
      <div class="main-medication-content-header d-flex">
        <div class="medication-header-image">
          <div class="user d-flex">
            <img
              class="user-icon"
              :src="require(`~/assets/images/Muzan_Anime_Profile.png`)"
              alt="Alvin Pacot"
            />
          </div>
        </div>
        <div class="medication-header-name d-flex align-center">
          DR. NEIL LAQUIHON
        </div>
        <div class="medication-header-button">
          <v-btn color="grey" icon>
            <v-icon>mdi-dots-horizontal</v-icon>
          </v-btn>
        </div>
      </div>
      <v-divider></v-divider>
      <div class="medication-content">
        <div class="main-medication-content-tag d-flex">
          <div class="tagged">{{ doctor.tag }}</div>
          <div class="created">{{ doctor.created_at }}</div>
        </div>
        <div class="main-medication-main-content">
          {{ doctor.content }}
        </div>
        <div class="medication-time-consume d-flex padding-top-sm">
          <div class="main-medication-main-time-one padding-right-sm">
            <span class="medication-time">7</span> AM
          </div>
          <div class="main-medication-main-time-one padding-right-sm">
            <span class="medication-time">12</span> NN
          </div>
          <div class="main-medication-main-time-one padding-right-sm">
            <span class="medication-time">7</span> PM
          </div>
        </div>
        <div class="main-medication-main-note d-flex">
          <div class="main-medication-main-note-title">NOTE</div>
          <div class="main-medication-main-note-content">{{ doctor.note }}</div>
        </div>
        <div class="main-medication-main-content">
          2) Celecovib 200mg 1 capsule 2x a day
        </div>
        <div class="medication-time-consume d-flex padding-top-sm">
          <div class="main-medication-main-time-one padding-right-sm">
            <span class="medication-time">7</span> AM
          </div>
          <div class="main-medication-main-time-one padding-right-sm">
            <span class="medication-time">7</span> PM
          </div>
        </div>
        <div class="main-medication-main-note d-flex">
          <div class="main-medication-main-note-title">NOTE</div>
          <div class="main-medication-main-note-content">Take after meals</div>
        </div>
      </div>
      <div
        class="medication-buy-btn d-flex justify-space-around padding-top-md"
      >
        <nuxt-link to="/drugs">
          <v-btn
            depressed
            color="#1ac6b6"
            width="100%"
            class="btn-radius"
            style="color: white"
          >
            Buy Medicine
          </v-btn>
        </nuxt-link>
        <nuxt-link to="/pharmacy">
          <v-btn
            depressed
            color="#1ac6b6"
            width="100%"
            class="btn-radius"
            style="color: white"
          >
            Find Pharmacy
          </v-btn>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script src="./medication.js"></script>

<style src="./medication.scss" lang="scss"></style>
