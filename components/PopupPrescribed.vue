<template>
  <div class="popup-prescribed">
    <v-card class="view-prescription-data">
      <div class="popup-prescribed-header">
        <div class="popup-prescribed-back">
          <v-icon @click="closed(prescribed)">mdi-arrow-left</v-icon>
        </div>
        <div class="reseta-logo">
          <img
            class="logo-wide"
            src="~/assets/images/white-main-logo.png"
            alt=""
            style="width: 5%"
          />
          <div class="reseta-logo-text">Reseta QRx</div>
        </div>
      </div>
      <div class="content-wrapper">
        <div class="patient-info d-flex justify-center text-center">
          <div class="prescription-form-info">
            <div class="prescription-doctor-name">
              {{ $auth.user.fname }} {{ $auth.user.lname }}
            </div>
            <div class="prescription-doctor-use">
              {{ $auth.user.address }}
            </div>
          </div>
        </div>

        <div class="medicine-badge">
          <div class="prescribed-created">
            {{ $moment().format('MM/DD/YY') }}
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
                {{ prescription.drug_info.type }},
                {{ prescription.sig.repeat }} x a
                {{ prescription.sig.cycle }}
              </div>
              <div class="prescription-body-date-consumation">
                for {{ prescription.sig.duration }}
                {{ prescription.sig.cycle }}/s
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
        <div class="prescriber-info">
          <ul>
            <li class="prescriber-fullname">
              {{ $auth.user.fname }} {{ $auth.user.lname }}
            </li>
            <li>{{ $auth.user.experties }}</li>
            <li>{{ $auth.user.license_number }}</li>
          </ul>
        </div>
        <div class="d-flex" style="padding-top: 25px; justify-content: center">
          <div class="add-prescription">
            <v-btn small fab dark color="green" @click="back">
              <v-icon white> mdi-plus </v-icon>
            </v-btn>
          </div>
          <div class="send-prescribed">
            <v-btn v-if="!btnhide" class="dark" @click="submit"
              >Prescribed</v-btn
            >
          </div>
        </div>
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
      prescribed: this.prescriptions,
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
    closed(data) {
      this.$emit('closed')
      this.$emit('delAllMeds', data)
    },
    back() {
      this.$emit('closed')
    },
  },
}
</script>

<style lang="scss" scoped>
.patient-info {
  margin-bottom: 0;
}
.popup-prescribed {
  .view-prescription-data {
    height: 100%;
    overflow-y: hidden;
  }
  .prescription-popup-body {
    background: white;
    height: 430px;
    padding-right: 20px;
    overflow-y: scroll;
  }
}
.prescribed-created {
  text-align: right;
  font-size: 20px;
}
.prescriber-info {
  display: flex;
  justify-content: end;
  padding: 20px 30px 5px;

  ul {
    list-style: none;

    .prescriber-fullname {
      font-weight: 600;
    }
  }
}
.popup-prescribed-header {
  background-color: $primary-color;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.content-wrapper {
  padding: 16px;
}
.prescription-notes {
  border: 1px solid $primary-color;
  padding: 12px;
  color: $black !important;
}
.time-take-span {
  border: 1px solid #1ac6b6;
  margin-right: 5px;
  padding: 4px 5px;
}
.prescription-form-info {
  width: 75%;
}
.popup-prescribed-back {
  position: absolute;
  left: 1rem;
}
.popup-prescribed-back button {
  color: $white;
}
.reseta-logo {
  margin: auto;
  padding: 15px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    width: 11%;
  }
  .reseta-logo-text {
    display: flex;
    align-self: center;
    padding-left: 10px;
  }
}
.prescription-content-header {
  font-size: 16px;
  .medicine-name {
    width: 70%;
    font-weight: 400;
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
  padding: 8px 0 0 20px;
  font-size: 16px;
  color: $black !important;
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
  font-size: 16px;
  font-weight: 400;
  color: $black !important;
}
.send-prescribed {
  background: white;
  text-align: center;
  padding-left: 30px;
}
.medicine-tab-id {
  margin-left: auto;
}
</style>
