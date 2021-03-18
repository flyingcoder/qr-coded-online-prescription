<template>
  <div class="main-medication-page">
    <v-row class="justify-center padding-bottom-sm">
      <h3>MEDICATIONS</h3>
    </v-row>
    <div
      v-for="doctor in doctors"
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
          {{ doctor.name }}
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
        <div class="main-medication-main-time">
          <span class="medication-time">{{ doctor.time }}</span> AM
        </div>
        <div class="main-medication-main-note d-flex">
          <div class="main-medication-main-note-title">NOTE</div>
          <div class="main-medication-main-note-content">{{ doctor.note }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./medication.js"></script>

<style src="./medication.scss" lang="scss"></style>
