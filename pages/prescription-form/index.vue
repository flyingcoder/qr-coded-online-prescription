<template>
  <div class="prescription-form-page">
    <div class="patient-info d-flex">
      <div class="prescription-form-image">
        <img
          class="user-icon"
          :src="require(`~/assets/images/medical-pharmacy-logo.jpg`)"
          alt="Alvin Pacot"
        />
      </div>
      <div class="prescription-form-info">
        <div class="prescription-patient-name">
          {{ patient_info.name }}
        </div>
        <div class="prescription-patient-use">{{ patient_info.use }}</div>
        <div class="prescription-patient-clinic">{{ patient_info.clinic }}</div>
        <div class="prescription-patient-number">{{ patient_info.number }}</div>
      </div>
    </div>
    <div class="patient-secondary-info">
      <div class="patient-main-info">
        <div class="top-patient-info">
          <v-text-field
            outlined
            dense
            label="Name"
            prepend-inner-icon="mdi-magnify"
          ></v-text-field>
        </div>
        <div class="center-patient-info d-flex">
          <v-text-field
            label="Age"
            outlined
            dense
            style="width: 22%; margin-right: 10px"
          ></v-text-field>
          <v-text-field
            label="Sex"
            outlined
            dense
            style="width: 22%; margin-right: 10px"
          ></v-text-field>
          <v-text-field
            label="Telephone Number"
            outlined
            dense
            style="width: 56%"
          ></v-text-field>
        </div>
        <div class="bottom-patient-info">
          <v-text-field label="Address" outlined dense></v-text-field>
        </div>
      </div>
    </div>
    <div class="patient-date-prescription d-flex">
      <div
        class="d-block prescription-date full-width text-right align-self-center"
      >
        <div class="patient-info-date">{{ patient_info.date }}</div>
        <div class="patient-info-time">{{ patient_info.time }}</div>
      </div>
    </div>
    <div class="patient-medicine-prescription">
      <div class="medicine-top d-flex">
        <v-text-field
          outlined
          dense
          label="Generic Name"
          prepend-inner-icon="mdi-magnify"
          style="width: 70%; margin-right: 10px"
        ></v-text-field>
        <v-text-field
          outlined
          dense
          label="Dosage"
          style="width: 30%"
        ></v-text-field>
      </div>
      <div class="medicine-bottom d-flex">
        <v-text-field
          outlined
          dense
          label="Brand Name"
          prepend-inner-icon="mdi-magnify"
          style="width: 70%; margin-right: 10px"
        ></v-text-field>
        <v-btn depressed height="40px" style="width: 30%"> Tablet </v-btn>
      </div>
    </div>
    <div class="patient-sig-prescription">
      <div class="patient-sig-title"><h2>Sig</h2></div>
      <div class="patient-sig-buttons d-flex">
        <v-btn depressed height="40px" style="width: 20%"> Take </v-btn>
        <v-select
          :items="items"
          label="2"
          dense
          outlined
          style="width: 10%"
        ></v-select>
        <v-btn depressed height="40px" style="width: 20%"> Tablet </v-btn>
        <v-select
          :items="items"
          label="2"
          dense
          outlined
          style="width: 10%"
        ></v-select>
        <v-btn depressed height="40px" style="width: 20%"> Times </v-btn>
      </div>
    </div>
  </div>
</template>

<script src="./prescription-form.js"></script>

<style src="./prescription-form.scss" lang="scss"></style>
