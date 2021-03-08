<template>
  <div class="doctor-main-section">
    <v-container>
      <v-row v-for="result in results" :key="result">
        <v-col cols="2">
          <v-icon class="outlined">
            <h2>{{ result.icon }}</h2>
          </v-icon>
        </v-col>
        <v-col cols="8">
          {{ result.name }}
          <div v-if="result.prescribe" class="prescribed-text">
            {{ result.prescribe }}
          </div>
          {{ result.content }}
        </v-col>
        <v-col cols="2">
          {{ result.date }}
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script src="./doctor.js"></script>

<style src="./doctor.scss" lang="scss" scoped></style>
