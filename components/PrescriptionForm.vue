<template>
  <div class="prescription-form-page">
    <v-dialog v-model="med_type" fullscreen>
      <MedType @selected="medTypeSelected" />
    </v-dialog>
    <v-dialog v-model="med_method" fullscreen>
      <MedApplyMethod @selected="intakeSelected" />
    </v-dialog>
    <v-dialog v-model="popup_prescribed" fullscreen>
      <PopupPrescribed
        :patient="patient_info"
        :prescriptions="meds"
        @closed="closePrescription"
      />
    </v-dialog>
    <v-form id="main-prescription-form">
      <div class="patient-info d-flex">
        <div class="prescription-form-image">
          <img class="user-icon" :src="$auth.user.avatar" />
        </div>
        <div class="prescription-form-info">
          <div class="prescription-patient-name">
            {{ $auth.user.fname }} {{ $auth.user.lname }}
          </div>
          <div class="prescription-patient-use">{{ $auth.user.experties }}</div>
          <div class="prescription-patient-number">
            {{ $auth.user.phone }}
          </div>
        </div>
        <div class="medicine-badge">
          <v-badge color="#223A6B" :content="medCounter">
            <v-btn
              class="mx-2"
              fab
              dark
              small
              color="#1db3a6"
              @click="popup_prescribed = !popup_prescribed"
            >
              <v-icon dark> mdi-prescription </v-icon>
            </v-btn>
          </v-badge>
        </div>
      </div>
      <div class="patient-secondary-info">
        <div class="patient-main-info">
          <label
            :for="data.patient_full_info"
            class="prescription-medicine-label"
            >Patient Information</label
          >
          <v-autocomplete
            v-model="patient_info"
            item-text="fullname"
            :items="patients"
            outlined
            return-object
            dense
            prepend-inner-icon="mdi-magnify"
            chips
            small-chips
            placeholder="Search Any Patient"
            @change="patientSelected"
          >
          </v-autocomplete>
        </div>
      </div>
      <div class="patient-date-prescription d-flex">
        <div
          class="
            d-block
            prescription-date
            full-width
            text-right
            align-self-center
          "
        >
          <div class="patient-info-date"></div>
          <div class="patient-info-time"></div>
        </div>
      </div>
      <div class="patient-medicine-prescription">
        <div class="medicine-top">
          <label :for="data.medicine_name" class="prescription-medicine-label"
            >Medicine Name</label
          >
          <v-autocomplete
            v-model="drug_info"
            :items="medicines"
            item-text="medicine"
            return-object
            outlined
            dense
            prepend-inner-icon="mdi-magnify"
            chips
            small-chips
            placeholder="Search Any Medicine"
          ></v-autocomplete>
        </div>
        <div class="medicine-bottom">
          <label for="" class="prescription-medicine-label"
            >Medicine Type</label
          >
          <v-btn
            depressed
            height="40px"
            width="100%"
            @click="med_type = !med_type"
          >
            {{ data.drug_type }}
          </v-btn>
        </div>
      </div>
      <div class="patient-sig-prescription">
        <div class="patient-sig-title"><h2>Sig</h2></div>
        <div class="patient-sig-buttons">
          <div class="patient-sig-button-top d-flex">
            <v-btn
              depressed
              height="40px"
              style="width: 50%; margin-right: 10px"
              @click="med_method = !med_method"
            >
              {{ sig.intake }}
            </v-btn>
            <v-text-field
              v-model="sig.amount"
              style="width: 50%; margin-right: 10px"
              outlined
              dense
              label="# of meds"
              type="number"
              :rules="[numberRule]"
            ></v-text-field>
          </div>
          <div class="patient-sig-button-top d-flex">
            <v-btn
              disabled
              depressed
              height="40px"
              width="100%"
              style="margin-bottom: 20px"
            >
              {{ data.drug_type }}
            </v-btn>
          </div>
          <div class="patient-sig-button-bottom d-flex">
            <v-text-field
              v-model="sig.repeat"
              outlined
              dense
              label="# per cycle"
              style="width: 25%; margin-right: 10px"
              type="number"
              :rules="[numberRule]"
            ></v-text-field>
            <v-btn
              disabled
              depressed
              height="40px"
              style="width: 30%; margin-right: 10px"
            >
              Times
            </v-btn>
            <v-select
              v-model="sig.cycle"
              :items="duration"
              dense
              append-icon=""
              style="width: 30%"
              clear-icon
              outlined
            ></v-select>
          </div>
        </div>
        <div class="patient-sig-hours">
          <div class="patient-sig-hours-AM">
            <v-slider
              v-model="sig.hourAM"
              :tick-labels="hoursLabelAM"
              :max="11"
              step="1"
              label="AM"
              ticks="always"
              tick-size="2"
            ></v-slider>
          </div>
          <div class="patient-sig-hours-PM padding-top-sm">
            <v-slider
              v-model="sig.hourPM"
              :tick-labels="hoursLabelPM"
              max="11"
              step="1"
              label="PM"
              ticks="always"
              tick-size="2"
            ></v-slider>
          </div>
        </div>
      </div>
      <div class="patient-day-uses-prescription d-flex">
        <div class="patient-duration d-flex">
          <v-text-field
            v-model="sig.until"
            type="number"
            min="1"
            max="31"
            dense
            label="Duration"
            append-icon=""
            clear-icon
            outlined
            style="width: 50%"
          ></v-text-field>
          <div class="duration-day">
            <h3>{{ sig.cycle }}/s</h3>
          </div>
        </div>
        <!-- div class="patient-duration-total d-flex">
          <div class="duration-total margin-right-sm"><h3>TOTAL</h3></div>
          <v-text-field outlined dense class="margin-right-sm"></v-text-field>
          <v-btn depressed height="40px" style="width: 20%"> Tablet </v-btn>
        </!-->
      </div>
      <div class="patient-note-prescription">
        <v-textarea
          v-model="sig.note"
          label="Note"
          auto-grow
          outlined
          rows="3"
          row-height="25"
        ></v-textarea>
      </div>
      <!-- div class="patient-add-prescription padding-bottom-sm">
        <v-btn tile>
          <v-icon left large color="green"> mdi-hospital </v-icon>
          Add
        </v-btn>
      </!-->
      <v-divider></v-divider>
      <div class="patient-prescribed-buttons d-flex justify-center">
        <v-btn class="patient-add-medicine-button" @click="addMedicine">
          <v-icon left size="30px" color="green"> mdi-plus </v-icon>
          Medicine
        </v-btn>
        <v-btn
          class="patient-prescribed-button-prescribe"
          @click="popup_prescribed = !popup_prescribed"
        >
          View
        </v-btn>
      </div>
    </v-form>
  </div>
</template>
<script>
export default {
  layout: 'dashboard',
  auth: true,
  data() {
    return {
      popup_prescribed: false,
      medicines: [],
      data: {
        medicine_name: '',
        medicine_dosage: '',
        patient_full_info: '',
        medicine_brand: '',
        drug_type: 'tablet',
      },
      drug_info: '',
      medCounter: 0,
      numberRule: (v) => {
        if (!isNaN(parseFloat(v)) && v >= 1 && v <= 99) return true
        return 'Invalid'
      },
      sig: {
        intake: 'Take',
        amount: 1,
        hourAM: '',
        hourPM: '',
        repeat: 1,
        until: '',
        cycle: 'Day',
        note: '',
      },
      med_type: false,
      med_method: false,
      amount: '1',
      take: '2',
      items: ['1', '2', '3', '4'],
      minimumAM: 0,
      minimumPM: 0,
      duration: ['Day', 'Week', 'Month', 'Year'],
      hoursLabelAM: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
      ],
      hoursLabelPM: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
      ],
      meds: [],
      patients: [],
      patient_info: {},
    }
  },
  mounted() {
    this.prescribeData = JSON.parse(
      window.localStorage.getItem('prescribeData')
    )
    if (this.prescribeData) {
      this.meds = this.prescribeData.meds
      this.patient_info = this.prescribeData.patient
      this.patient = this.patient_info
    } else {
      this.meds = []
      this.patient = {
        id: 1,
        fullname: '',
        address: 'Quezon Ave, Kidapawan City',
      }
    }
    this.medCounter = parseInt(window.localStorage.getItem('medCounter'))
    if (!this.medCounter) this.medCounter = 0
    this.getAllMedicines()
    if (this.id) this.getPatient()
    this.getPatients()
  },
  methods: {
    closePrescription() {
      this.popup_prescribed = false
    },
    patientSelected() {
      this.patient = this.patient_info
    },
    getPatients() {
      this.$axios.get('users/patient').then((data) => {
        this.patients = data.data
      })
    },
    getAllMedicines() {
      this.$axios.get('allmedicines').then((data) => {
        this.medicines = data.data
      })
    },

    validateForm() {
      if (this.patient_info === '') {
        this.$store.dispatch('snackbar/setSnackbar', {
          text: `Please select a patient.`,
          color: 'red',
        })
        return false
      }

      if (this.drug_info === '') {
        this.$store.dispatch('snackbar/setSnackbar', {
          text: `Please select a medicine.`,
          color: 'red',
        })
        return false
      }

      if (this.data.until === '') {
        this.$store.dispatch('snackbar/setSnackbar', {
          text: `Please input the duration.`,
          color: 'red',
        })
        return false
      }

      return true
    },
    addMedicine() {
      if (this.validateForm()) {
        const datus = {
          drug_info: this.drug_info,
          sig: this.sig,
        }
        const prescribeData = JSON.parse(
          window.localStorage.getItem('prescribeData')
        )
        const parseMed = {
          patient: this.patient_info,
          meds: [],
        }
        if (prescribeData) {
          parseMed.meds = prescribeData.meds
          console.log(parseMed)
          parseMed.meds.push(datus)
        } else {
          parseMed.meds = [datus]
        }
        this.meds = parseMed.meds
        window.localStorage.setItem('prescribeData', JSON.stringify(parseMed))
        this.drug_info = ''
        this.medCounter = this.medCounter + 1
        window.localStorage.setItem('medCounter', this.medCounter)
      }
    },
    medTypeSelected(type) {
      this.data.drug_type = type
      this.med_type = false
    },
    intakeSelected(type) {
      this.sig.intake = type
      this.med_method = false
    },
    prescribe() {
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
    getPatient() {
      this.$axios.get('user/' + this.$route.params.id).then((data) => {
        this.patient_info = data.data
        this.data.fname = this.data.fname + ' ' + data.data.lname
      })
    },
    getMedicine() {
      this.$axios.get('medicines' + this.$route.params.id).then((data) => {
        this.medicine_name = data.data
      })
    },
    cancel() {},
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
.prescription-patient-use {
  margin-bottom: 4px;
}
.prescription-patient-use,
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
.medicine-bottom {
  margin-top: 20px;
}
.patient-day-uses-prescription {
  margin: 20px 0 20px 0;
}
.patient-secondary-info {
  margin-top: 20px;
}
.patient-medicine-prescription {
  margin-top: 0px;
}

.medicine-badge {
  margin-right: 20px;
  margin-top: 10px;
}
.patient-date-prescription {
  .logo-wide {
    width: 25%;
  }
}
.patient-info-time {
  font-size: 13px;
}
.patient-sig-hours {
  label {
    position: absolute !important;
    top: -15px;
  }
}
.patient-duration-input {
  #input-60 {
    display: none;
  }
  .v-select__selections {
    display: flex;
    justify-content: center;
  }
}
.patient-duration-total {
  width: 56%;
  .duration-total {
    padding-top: 5px;
  }
}
.patient-note-prescription {
  height: 95px;
}
.patient-duration {
  width: 100%;
  margin-right: 17%;
  .duration-day {
    padding: 5px 0px 0px 11px;
    display: flex;
    align-self: flex-end;
  }
}
.patient-prescribed-buttons {
  padding-top: 20px;
  .patient-prescribed-button-prescribe {
    margin-right: 25px;
  }
}
.prescription-medicine-label {
  font-size: 15px;
  font-weight: 400;
}
.patient-add-medicine-button {
  margin-right: 15px;
}
</style>
