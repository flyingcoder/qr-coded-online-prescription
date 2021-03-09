<template>
  <div class="patient-main-section">
    <v-container>
      <v-row v-for="result in results" :key="result" class="patient-messages">
        <v-col cols="2">
          <v-icon class="outlined">
            {{ result.icon }}
          </v-icon>
        </v-col>
        <v-col cols="10">
          <div class="patient-title">{{ result.name }}</div>
          <div class="patient-date">
            {{ result.date }}
          </div>
          {{ result.content }}
          <div v-if="result.swiper" class="swiper-text" @click="swiper">
            <v-carousel
              :show-arrows="false"
              hide-delimiter-background
              height="30px"
            >
              <v-carousel-item v-for="(item, i) in items" :key="i">
                <div style="color: red">{{ item.src }}</div>
              </v-carousel-item>
            </v-carousel>
          </div>
        </v-col>
        <v-divider inset></v-divider>
      </v-row>
    </v-container>
  </div>
</template>

<script src="./patient.js"></script>

<style src="./patient.scss" lang="scss"></style>
