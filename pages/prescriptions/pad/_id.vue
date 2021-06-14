<template>
  <div class="prescription-pad">
    <!-- v-dialog v-model="prescription_payment">
      <PayPrescription />
    </!-->
    <div class="prescription-pad-header d-flex">
      <div class="reseta-logo">
        <img src="~/assets/images/main-logo.png" />
        <div class="reseta-logo-text">Reseta QRx</div>
      </div>
      <div class="back-button">
        <v-icon size="30px" @click="close">mdi-close</v-icon>
      </div>
    </div>
    <div class="patient-info d-flex">
      <div class="prescription-form-image">
        <img class="user-icon" :src="prescriptions.doctor.avatar" />
      </div>
      <div class="prescription-form-info">
        <div class="prescription-patient-name">
          {{ prescriptions.doctor.fname }} {{ prescriptions.doctor.lname }}
        </div>
        <div class="prescription-patient-use">
          {{ prescriptions.doctor.experties }}
        </div>
        <div class="prescription-patient-clinic">
          {{ prescriptions.doctor.licence_number }}
        </div>
        <div class="prescription-patient-number">
          {{ prescriptions.doctor.phone }}
        </div>
      </div>
      <div class="medicine-badge">
        <div class="prescribed-created">
          {{ $moment().format('MM/DD/YY') }}
        </div>
      </div>
    </div>

    <div class="prescribed-patient-info">
      <div class="prescribed-left-info d-flex">
        <div class="prescribed-patient-name">
          {{ prescriptions.patient.fname }} {{ prescriptions.patient.lname }}
          {{ prescriptions.patient.age + '/' + prescriptions.patient.sex }}
        </div>
      </div>
      <div class="prescribed-patient-address">
        {{ prescriptions.patient.address }}
      </div>
    </div>
    <div
      v-for="(pres, index) in prescriptions.prescribe"
      :key="index"
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
        <div class="right">
          # {{ pres.pivot.duration * pres.pivot.repeat * pres.pivot.amount }}
        </div>
      </div>
      <div class="prescription-pad-content-body">
        <div class="prescription-sig-content">
          Sig {{ pres.pivot.intake }} {{ pres.pivot.amount }}
          {{ pres.pivot.type }}, {{ pres.pivot.repeat }}x a {{ pres.cycle }}
        </div>
        <div class="prescription-till-intake">
          for {{ pres.pivot.duration }} {{ pres.pivot.cycle }}/s
        </div>
        <div class="prescription-hours"></div>
        <div class="prescription-notes">Notes: {{ pres.pivot.note }}</div>
      </div>
    </div>
    <div class="send-prescribed">
      <v-btn @click="buyMeds">Buy Medication</v-btn>
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
      prescriptions: {
        doctor: {},
        patient: {},
        prescribe: {},
      },
    }
  },

  mounted() {
    this.getPrescription()
  },
  methods: {
    getPrescription() {
      this.$axios.get('prescriptions/' + this.$route.params.id).then((data) => {
        this.prescriptions = data.data
      })
    },
    buyMeds() {
      this.$router.push('/drugs/' + this.$route.params.id)
    },
    close() {
      this.$router.back()
    },
  },
}
</script>

<style lang="scss" scoped>
.patient-info,
.prescribed-patient-address {
  padding: 0 17px;
}
.prescription-form-info {
  width: 55%;
  padding-left: 12px;
  margin-bottom: 20px;
}
.prescribed-left-info {
  padding-left: 20px;
  .prescribed-patient-name {
    font-weight: 500;
    font-size: 17px;
  }
}
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
.send-prescribed {
  width: 100%;
  margin-top: 15px;
  text-align: center;
  padding-bottom: 30px;
}
</style>
