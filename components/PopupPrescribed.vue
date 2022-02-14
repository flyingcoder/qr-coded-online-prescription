<template>
  <div class="popup-prescribed">
    <v-card class="view-prescription-data">
      <div class="popup-prescribed-header">
        <div class="popup-prescribed-back">
          <v-icon @click="close">mdi-arrow-left</v-icon>
        </div>
        <div class="reseta-logo">
          <img src="~/assets/images/main-logo.png" alt="" />
          <div class="reseta-logo-text">Reseta QRx</div>
        </div>
        <div class="patient-info d-flex">
          <div class="prescription-form-image">
            <img
              v-if="$auth.user.avatar == 'avatar.png'"
              class="user-icon"
              :src="require(`~/assets/images/avatar.png`)"
              :alt="$auth.user.fname"
            />
            <img
              v-else
              class="user-icon"
              :src="$auth.user.avatar"
              :alt="$auth.user.fname"
            />
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
      </div>
      <div class="prescription-popup-body">
        <div
          v-for="(prescription, index) in prescriptions"
          :key="prescription.id"
          class="popup-prescribed-content"
        >
          <div class="text-right">
            <v-btn icon color="red">
              <v-icon @click="removePrescription(prescription)"
                >mdi-close</v-icon
              >
            </v-btn>
          </div>
          <div class="prescription-content-header d-flex">
            <div class="prescription-id">{{ index + 1 }}.)</div>
            &nbsp;
            <div class="medicine-name">
              {{ prescription.drug_info.medicine }}
            </div>
            <div class="medicine-tab-id">
              #
              {{
                prescription.sig.duration *
                prescription.sig.repeat *
                prescription.sig.amount
              }}
            </div>
          </div>
          <div class="prescription-content-body">
            <div class="prescription-body-main-content">
              Sig: {{ prescription.sig.intake }}
              {{ prescription.sig.amount }}
              {{ prescription.drug_info.type }}, {{ prescription.sig.repeat }} x
              a
              {{ prescription.sig.cycle }}
            </div>
            <div class="prescription-body-date-consumation">
              for {{ prescription.sig.duration }} {{ prescription.sig.cycle }}/s
            </div>
            <div
              style="
                padding: 15px 0 0 20px;
                display: grid;
                grid-template-columns: repeat(6, 1fr);
              "
            >
              <div
                v-for="n in prescription.sig.hours_time"
                :key="n"
                style="color: #1ac6b6 !important; margin-bottom: 10px"
              >
                <span v-if="n <= 12" class="time-take-span">
                  {{ n + 1 }}am
                </span>
                <span v-else class="time-take-span"> {{ n - 11 }}pm</span>
              </div>
            </div>
            <div class="prescription-body-time-consumation"></div>
            <div class="prescription-notes">
              Notes: {{ prescription.sig.note }}
            </div>
          </div>
        </div>
      </div>
      <div class="send-prescribed">
        <v-btn v-if="!btnhide" @click="submit">Prescribed</v-btn>
      </div>
    </v-card>
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
      btnhide: false,
    }
  },
  mounted() {},
  methods: {
    submit() {
      const datus = {
        patient_id: this.patient.id,
        doctor_id: this.$auth.user.id,
        drugs: this.prescriptions,
      }
      this.btnhide = true
      this.$axios.post('prescriptions', datus).then((data) => {
        this.$store.dispatch('snackbar/setSnackbar', {
          text: `You have successfully created the prescrition`,
        })
        window.localStorage.removeItem('medCounter')
        window.localStorage.removeItem('prescribeData')
        this.$router.push('/chatbox/' + this.patient.id)
      })
    },
    removePrescription(data) {
      this.$emit('delmeds', data)
    },
    close() {
      this.$emit('closed')
    },
  },
}
</script>

<style lang="scss" scoped>
.popup-prescribed {
  .view-prescription-data {
    height: 100%;
  }
  .prescription-popup-body {
    background: white;
  }
}
.prescription-notes {
  border: 1px solid #1ac6b6;
  padding: 12px;
}
.time-take-span {
  border: 1px solid #1ac6b6;
  margin-right: 5px;
  padding: 4px 5px;
}
.prescription-form-image {
  width: 25%;
  text-align: center;
}
.prescription-form-info {
  width: 75%;
}
.medicine-badge {
  margin-right: 17px;
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
.popup-prescribed-content {
  padding: 10px 10px 10px 17px;
}
.top-patient-info,
.center-patient-info,
.bottom-patient-info,
.medicine-top,
.medicine-bottom,
.patient-day-uses-prescription {
  height: 50px;
}
.popup-prescribed-back {
  position: absolute;
  top: 25px;
  left: 30px;
}
.reseta-logo {
  margin: auto;
  padding-top: 15px;
  width: 100%;
  margin-bottom: 25px;
  display: flex;
  justify-content: center;
  img {
    width: 11%;
  }
  .reseta-logo-text {
    display: flex;
    align-self: center;
    color: black !important;
    padding-left: 10px;
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
  padding-left: 17px;
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
  padding-left: 17px;
  font-size: 17px;
  font-weight: 400;
}
.send-prescribed {
  width: 100%;
  padding-top: 15px;
  background: white;
  text-align: center;
  padding-bottom: 30px;
}
</style>
