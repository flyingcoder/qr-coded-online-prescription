<template>
  <div class="prescription-pad">
    <v-dialog v-model="prescription_payment">
      <PayPrescription />
    </v-dialog>
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
      v-for="(pres, index) in prescriptions.prescribe"
      :key="pres"
      class="prescription-pad-content"
    >
      <div class="prescription-pad-content-header d-flex">
        <div class="left d-block">
          <div class="top">
            {{ index + 1 }}.) {{ pres.generic_name }} {{ pres.brand }}
          </div>
          <div class="bottom">
            {{ pres.dosage }}
          </div>
        </div>
        <div class="right"># {{}}</div>
      </div>
      <div class="prescription-pad-content-body">
        <div class="prescription-sig-content">
          Sig {{ pres.pivot.intake }} {{ pres.pivot.type }}, {{ pres.repeat }}x
          a {{ pres.cycle }}
        </div>
        <div class="prescription-till-intake">
          for {{ pres.until }} {{ pres.cycle }}/s
        </div>
        <div class="prescription-hours">
          {{ pres.hourAM }} AM - {{ pres.hourPM }} PM
        </div>
        <div class="prescription-notes">Notes: {{ pres.notes }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrescriptionPad',
  layout: 'search-notification',
  props: {},
  data() {
    return {
      prescription_payment: true,
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
    this.getPrescription()
  },
  methods: {
    getPrescription() {
      this.$axios.get('prescriptions/' + this.$route.params.id).then((data) => {
        this.prescriptions = data.data
        console.log(data)
      })
    },
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
.prescription-pad-header {
  margin-bottom: 14px;
}
</style>
