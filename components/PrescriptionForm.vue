<template>
  <div class="prescription-form-page">
    <v-dialog v-model="med_type" fullscreen>
      <MedType :defaulttype="sig.type" @selected="medTypeSelected" />
    </v-dialog>
    <v-dialog v-model="med_method" fullscreen>
      <MedApplyMethod @selected="intakeSelected" />
    </v-dialog>
    <v-dialog v-model="popup_prescribed" fullscreen scrollable>
      <PopupPrescribed
        :patient="patient_info"
        :prescriptions="meds"
        @closed="closePrescription"
        @delmeds="removeMeds"
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
          <label :for="patient_info" class="prescription-medicine-label"
            >Patient Information</label
          >
          <v-autocomplete
            v-model="patient_info"
            item-text="fullname"
            :items="patients"
            outlined
            return-object
            dense
            solo
            prepend-inner-icon="mdi-magnify"
            chips
            small-chips
            placeholder="Search Any Patient"
            @change="patientSelected"
          >
            <!-- :disabled="$route.params.id ? '' : disabled" -->
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
          <label :for="drug_info" class="prescription-medicine-label"
            >Medicine Name</label
          >
          <v-autocomplete
            v-model="drug_info"
            :items="medicines"
            item-text="medicine"
            return-object
            outlined
            dense
            solo
            prepend-inner-icon="mdi-magnify"
            chips
            small-chips
            placeholder="Search Any Medicine"
            @change="medicineSelected"
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
            {{ sig.type }}
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
              label="Quantity"
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
              {{ sig.type }}
            </v-btn>
          </div>
          <div class="patient-sig-button-bottom d-flex">
            <v-text-field
              v-model="sig.repeat"
              outlined
              type="number"
              dense
              label="Dosage"
              style="width: 25%; margin-right: 10px"
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
              style="width: 30%"
              clear-icon
              outlined
            ></v-select>
          </div>
        </div>
        <div v-if="sig.repeat.length === 1" class="patient-sig-hours" v->
          <div class="patient-sig-am">
            <v-item-group v-model="sig.hours_time" multiple :max="sig.repeat">
              <v-item
                v-for="n in 24"
                :key="n.id"
                v-slot="{ active, toggle }"
                disabled
              >
                <v-chip
                  class="sig-time-pick"
                  style="
                    width: 46px;
                    padding: 0;
                    justify-content: center;
                    margin-right: 4px;
                    margin-top: 5px;
                  "
                  label
                  active-class="active-hour-time"
                  :input-value="active"
                  @click="toggle"
                >
                  <span v-if="n <= 12">{{ n }}am</span>
                  <span v-else>{{ n - 12 }}pm</span>
                </v-chip>
              </v-item>
            </v-item-group>
          </div>
        </div>
      </div>
      <div class="patient-day-uses-prescription d-flex">
        <div class="patient-duration d-flex">
          <v-text-field
            v-model="sig.duration"
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
      sig_hours: [],
      popup_prescribed: false,
      allprescriptions: '',
      medicines: [],
      drug_info: '',
      medCounter: 0,
      numberRule: (v) => {
        if (!isNaN(parseFloat(v)) && v >= 1 && v <= 99) return true
        return 'Invalid'
      },
      sig: {
        intake: 'Take',
        hours_time: [],
        amount: 1,
        repeat: '',
        duration: '',
        cycle: 'Day',
        note: '',
        type: 'Tablet',
      },
      med_type: false,
      med_method: false,
      active: false,
      amount: '1',
      take: '2',
      items: ['1', '2', '3', '4'],
      duration: ['Day', 'Week', 'Month', 'Year'],
      meds: [],
      patients: [],
      patient_info: {},
    }
  },
  computed: {},
  watch: {},
  mounted() {
    if (this.$route.params.id) this.getPatient()
    this.prescribeData = JSON.parse(
      window.localStorage.getItem('prescribeData')
    )
    if (this.prescribeData) {
      this.meds = this.prescribeData.meds
      if (!this.$route.params.id) {
        this.patient_info = this.prescribeData.patient
        this.patient = this.patient_info
      }
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
    this.getAllPrescription()
    this.getPatients()
  },
  methods: {
    removeMeds(data) {
      this.medCounter = this.medCounter - 1
      this.meds.splice(this.meds.indexOf(data), 1)
      const parseMed = {
        patient: this.patient_info,
        meds: this.meds,
      }
      window.localStorage.setItem('medCounter', this.medCounter)
      window.localStorage.setItem('prescribeData', JSON.stringify(parseMed))
      this.$store.dispatch('snackbar/setSnackbar', {
        text: `A medicine is removed to prescription pad.`,
      })
    },
    closePrescription() {
      this.popup_prescribed = false
    },
    patientSelected() {
      this.patient = this.patient_info
    },
    cycleValue() {
      console.log(this.sig.repeat)
    },
    medicineSelected() {
      this.sig.type = this.drug_info.type
    },
    getPatients() {
      this.$axios.get('users/patient').then((data) => {
        this.patients = data.data
      })
    },
    getAllMedicines() {
      this.$axios.get('medicines').then((data) => {
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

      if (this.sig.duration === '') {
        this.$store.dispatch('snackbar/setSnackbar', {
          text: `Please input the duration.`,
          color: 'red',
        })
        return false
      }
      return true
    },

    addMedicine() {
      console.log(this)
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
        // this.sig.repeat = ''
        // this.sig.hours_time = ''
        // this.sig.duration = ''
        // this.sig.amount = ''
        // this.sig.note = ''
        window.location.reload()
        this.medCounter = this.medCounter + 1
        window.localStorage.setItem('medCounter', this.medCounter)
        this.$store.dispatch('snackbar/setSnackbar', {
          text: `A medicine is added to prescription pad.`,
        })
      }
    },
    medTypeSelected(type) {
      this.sig.type = type
      this.med_type = false
    },
    intakeSelected(type) {
      this.sig.intake = type
      this.med_method = false
    },
    getPatient() {
      this.$axios.get('user/' + this.$route.params.id).then((data) => {
        this.patient_info = data.data
      })
    },
    getAllPrescription() {
      this.$axios.get('prescriptions').then((data) => {
        this.allprescriptions = data.data
      })
    },
    getMedicine() {
      this.$axios.get('medicines' + this.$route.params.id).then((data) => {
        this.medicine_name = data.data
      })
    },
  },
}
</script>
<style>
.active-hour-time {
  background: #1ac6b6;
  color: white !important;
}
</style>
<style lang="scss" scoped>
.patient-sig-hours {
  label {
    position: absolute !important;
    top: -15px;
  }
}
.patient-sig-am {
  text-align: center;
}
span.v-chip.active-hours-cycle.v-chip--active.v-chip--clickable.v-chip--label.v-chip--no-color.v-chip--outlined.theme--light.v-size--default.v-item--active {
  background-color: #1ac6b6 !important;
  color: white;
  font-weight: 500;
}
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
  margin-top: 35px;
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
