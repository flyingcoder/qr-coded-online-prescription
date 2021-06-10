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

<script>
export default {
  name: 'Prescription Pad',
  layout: 'search-notification',
  props: {
    // prescriptions: {
    //   type: Array,
    //   default() {
    //     return []
    //   },
    // },
  },
  data() {
    return {
      prescriptions: [
        {
          id: 1,
          medicine_name: 'Paracetamol (Biogesic)',
          dosage: '500mg',
          intake: '2',
          type: 'Tablet',
          notes: 'This is just a test',
          repeat: '2',
          until: '2',
          hourAM: '6',
          hourPM: '8',
          cycle: 'Day',
        },
        {
          id: 2,
          medicine_name: 'Paracetamol (Biogesic)',
          dosage: '500mg',
          intake: '2',
          type: 'Tablet',
          notes: 'This is just a test',
          repeat: '2',
          until: '2',
          hourAM: '6',
          hourPM: '8',
          cycle: 'Day',
        },
        {
          id: 3,
          medicine_name: 'Paracetamol (Biogesic)',
          dosage: '500mg',
          intake: '2',
          type: 'Tablet',
          notes: 'This is just a test',
          repeat: '2',
          until: '2',
          hourAM: '6',
          hourPM: '8',
          cycle: 'month',
        },
      ],
    }
  },

  mounted() {
    // this.getPrescriptions()
  },
  methods: {
    // getPrescriptions() {
    //   this.$axios.get('prescriptions').then((data) => {
    //     this.prescriptions = data.data
    //     console.log(data)
    //   })
    // },
    close() {
      this.$nuxt.back()
    },
  },
}
</script>

<style lang="scss" scoped>
.reseta-logo {
  width: 80%;
  display: flex;
  justify-content: center;
  margin-top: 15px;
  img {
    width: 15%;
  }
  .reseta-logo-text {
    display: flex;
    align-self: center;
    margin-left: 10px;
  }
}
.back-button {
  width: 20%;
  display: flex;
  justify-content: center;
  align-self: center;
}
.prescription-pad-content-header {
  .left {
    width: 80%;
    .bottom {
      padding-left: 20px;
      padding-top: 10px;
    }
  }
}
.prescription-pad-content {
  padding: 10px 15px 10px 20px;
}
.prescription-pad-content-body {
  .prescription-notes {
    border: 1px solid #1ac6b6;
    padding: 12px;
  }
  .prescription-sig-content,
  .prescription-till-intake,
  .prescription-hours {
    padding-left: 20px;
    padding-top: 10px;
  }
  .prescription-hours {
    padding-bottom: 15px;
  }
}
</style>
