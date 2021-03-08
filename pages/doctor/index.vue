<template>
  <div class="doctor-main-section">
    <v-container>
      <v-row
        v-for="result in results"
        :key="result"
        class="doctor-patient-messages"
      >
        <v-col cols="2">
          <v-icon class="outlined">
            {{ result.icon }}
          </v-icon>
        </v-col>
        <v-col cols="10">
          <div class="doctor-patient-title">{{ result.name }}</div>
          <div class="doctor-date">
            {{ result.date }}
          </div>

          <div v-if="result.prescribe" class="prescribed-text">
            {{ result.prescribe }}
          </div>
          {{ result.content }}
        </v-col>
        <v-divider inset></v-divider>
      </v-row>
    </v-container>
  </div>
</template>

<script src="./doctor.js"></script>

<style src="./doctor.scss" lang="scss" scoped></style>
