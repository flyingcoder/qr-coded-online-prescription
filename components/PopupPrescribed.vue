<template>
  <div class="popup-prescribed">
    <v-dialog v-model="dialog" fullscreen>
      <template #activator="{ on, attrs }">
        <v-btn
          class="patient-prescribed-button-prescribe"
          v-bind="attrs"
          v-on="on"
        >
          View
        </v-btn>
      </template>

      <v-card class="view-prescription-data">
        <div class="popup-prescribed-header">
          <div class="reseta-logo">
            <img src="~/assets/images/main-logo.png" alt="" />
          </div>
          <div class="patient-info d-flex">
            <div class="prescription-form-image">
              <img class="user-icon" :src="$auth.user.avatar" />
            </div>
            <div class="prescription-form-info">
              <div class="prescription-patient-name">
                {{ $auth.user.fname }} {{ $auth.user.lname }}
              </div>
              <div class="prescription-patient-use">
                {{ $auth.user.experties }}
              </div>
              <div class="prescription-patient-clinic">
                {{ $auth.user.licence_number }}
              </div>
              <div class="prescription-patient-number">
                {{ $auth.user.phone }}
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
                {{ patient.fullname }}
              </div>
            </div>
            <div class="prescribed-patient-address">
              {{ patient.address }}
            </div>
          </div>
          <div class="send-prescribed">
            <v-btn @click="submit">Prescribed</v-btn>
          </div>
        </div>
        <div class="prescription-popup-body">
          <div
            v-for="(prescription, index) in prescriptions"
            :key="prescription.id"
            class="popup-prescribed-content"
          >
            <div class="prescription-content-header d-flex">
              <div class="prescription-id">{{ index + 1 }}.)</div>
              &nbsp;
              <div class="medicine-name">
                {{ prescription.drug_info.medicine }}
              </div>
              <div class="medicine-tab-id">
                #
                {{
                  prescription.sig.until *
                  prescription.sig.repeat *
                  prescription.sig.amount
                }}
              </div>
            </div>
            <div class="prescription-content-body">
              <div class="prescription-body-main-content">
                Sig: {{ prescription.sig.intake }}
                {{ prescription.sig.amount }}
                {{ prescription.drug_info.type }}
                {{ prescription.sig.repeat }} x a
                {{ prescription.sig.cycle }}
              </div>
              <div class="prescription-body-date-consumation">
                for {{ prescription.sig.until }} {{ prescription.sig.cycle }}/s
              </div>
              <div class="prescription-body-time-consumation">
                {{ prescription.time_consumation }}
              </div>
            </div>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'PopupPrescribed',
  props: {
    patient: {
      type: Object,
      required: true,
    },
    prescriptions: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      dialog: false,
    }
  },
  mounted() {
    console.log(this.prescriptions)
  },
  methods: {
    submit() {
      const datus = {
        patient_info: this.patient_info,
        drug_info: this.data,
        sig: this.sig,
      }
      this.$axios.post('prescription-form', datus).then((data) => {
        this.$store.dispatch('snackbar/setSnackbar', {
          text: `You have successfully created the prescrition`,
        })
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.prescription-form-image {
  width: 25%;
  text-align: center;
}
.prescription-form-info {
  width: 75%;
}
.prescription-patient-name {
  font-size: 16px;
  font-weight: 400;
}
.prescription-patient-use,
.prescription-patient-clinic,
.prescription-patient-number {
  font-size: 14px;
  height: 15px;
}
.top-patient-info,
.center-patient-info,
.bottom-patient-info,
.medicine-top,
.medicine-bottom,
.patient-day-uses-prescription {
  height: 50px;
}
.prescription-popup-body {
  height: 430px;
  overflow-y: scroll;
}
.reseta-logo {
  width: 13% !important;
  margin: auto;
  img {
    width: 100%;
  }
}
.prescription-content-header {
  font-size: 18px;
  .medicine-name {
    width: 70%;
  }
  .medicine-dosage {
    width: 30%;
  }
}
.prescribed-left-info {
  margin-top: 20px;
}
.prescription-body-main-content,
.prescription-body-date-consumation,
.prescription-body-time-consumation {
  padding: 15px 0 0 20px;
  font-size: 17px;
}
.prescribed-patient-name {
  width: 70%;
  font-weight: 700;
  font-size: 20px;
}
.prescribed-age_gender {
  width: 30%;
  font-size: 18px;
  .prescribed-patient-age {
    font-weight: 700;
  }
  .prescribed-patient-gender {
    font-weight: 700;
  }
}
.prescribed-patient-address {
  font-size: 17px;
  font-weight: 400;
}
.send-prescribed {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  margin-bottom: 15px;
}
.prescribed-created {
  text-align: right;
  font-size: 17px;
  font-weight: 500;
}
.popup-prescribed-header,
.popup-prescribed-content {
  padding: 17px;
}
</style>
