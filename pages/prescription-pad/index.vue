<template>
  <div class="prescription-pad">
    <div class="prescription-pad-header d-flex">
      <div class="reseta-logo">
        <img src="~/assets/images/main-logo.png" />
        <div class="reseta-logo-text">Reseta QRx</div>
      </div>
      <div class="back-button">
        <v-icon size="30px" @click="close">mdi-close</v-icon>
      </div>
    </div>
    <div
      v-for="prescription in prescriptions"
      :key="prescription"
      class="prescription-pad-content"
    >
      <div class="prescription-pad-content-header d-flex">
        <div class="left d-block">
          <div class="top">
            {{ prescription.id }}.) {{ prescription.medicine_name }}
          </div>
          <div class="bottom">
            {{ prescription.dosage }}
          </div>
        </div>
        <div class="right"># {{ prescription.id }}</div>
      </div>
      <div class="prescription-pad-content-body">
        <div class="prescription-sig-content">
          Sig Take {{ prescription.intake }} {{ prescription.type }},
          {{ prescription.repeat }}x a {{ prescription.cycle }}
        </div>
        <div class="prescription-till-intake">
          for {{ prescription.until }} {{ prescription.cycle }}/s
        </div>
        <div class="prescription-hours">
          {{ prescription.hourAM }} AM - {{ prescription.hourPM }} PM
        </div>
        <div class="prescription-notes">Notes: {{ prescription.notes }}</div>
      </div>
    </div>
  </div>
</template>

<script src="./prescription-pad.js"></script>

<style src="./prescription-pad.scss" lang="scss" scoped></style>
