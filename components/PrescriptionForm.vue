<template>
  <div class="prescription-form-page">
    <v-dialog v-model="med_type" fullscreen>
      <MedType @selected="medTypeSelected" />
    </v-dialog>
    <v-dialog v-model="med_method" fullscreen>
      <MedApplyMethod @selected="intakeSelected" />
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
          <div class="prescription-patient-clinic">
            {{ $auth.user.licence_number }}
          </div>
          <div class="prescription-patient-number">
            {{ $auth.user.phone }}
          </div>
        </div>
        <div class="medicine-badge">
          <v-badge color="#223A6B" content="6">
            <v-btn class="mx-2" fab dark small color="#1db3a6">
              <v-icon dark> mdi-prescription </v-icon>
            </v-btn>
          </v-badge>
        </div>
      </div>
      <div class="patient-secondary-info">
        <div class="patient-main-info">
          <div class="top-patient-info">
            <v-text-field
              v-model="patient_info.fname"
              outlined
              dense
              label="Name"
              prepend-inner-icon="mdi-magnify"
            ></v-text-field>
          </div>
          <div class="center-patient-info d-flex">
            <v-text-field
              v-model="patient_info.age"
              label="Age"
              outlined
              type="number"
              dense
              limit
              style="width: 22%; margin-right: 10px"
            ></v-text-field>
            <v-text-field
              v-model="patient_info.sex"
              label="Sex"
              outlined
              dense
              style="width: 22%; margin-right: 10px"
            ></v-text-field>
            <v-text-field
              v-model="patient_info.phone"
              label="Telephone Number"
              outlined
              dense
              style="width: 56%"
            ></v-text-field>
          </div>
          <div class="bottom-patient-info">
            <v-text-field
              v-model="patient_info.address"
              label="Address"
              outlined
              dense
            ></v-text-field>
          </div>
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
        <div class="medicine-top d-flex">
          <v-autocomplete
            v-model="data.medicine_name"
            outlined
            dense
            prepend-inner-icon="mdi-magnify"
            chips
            small-chips
            label="Generic Name"
            style="margin-right: 10px"
          ></v-autocomplete>
          <v-text-field
            v-model="data.medicine_dosage"
            outlined
            dense
            label="Dosage"
            style="margin-right: 10px"
          ></v-text-field>
          <v-autocomplete
            v-model="data.medicine_brand"
            outlined
            dense
            prepend-inner-icon="mdi-magnify"
            chips
            small-chips
            label="Brand Name"
            style="margin-right: 10px"
          ></v-autocomplete>
          <v-btn depressed height="40px" @click="med_type = !med_type">
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
              style="width: 30%; margin-right: 10px"
              @click="med_method = !med_method"
            >
              {{ sig.intake }}
            </v-btn>
            <v-text-field
              v-model="sig.amount"
              style="width: 25%; margin-right: 10px"
              outlined
              dense
              type="number"
              :rules="[numberRule]"
            ></v-text-field>
            <v-btn disabled depressed height="40px" style="width: 30%">
              {{ data.drug_type }}
            </v-btn>
          </div>
          <div class="patient-sig-button-bottom d-flex">
            <v-text-field
              v-model="sig.repeat"
              outlined
              dense
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
            v-model="data.until"
            type="number"
            min="1"
            max="31"
            dense
            append-icon=""
            class="patient-duration-input"
            clear-icon
            outlined
            style="width: 30%"
          ></v-text-field>
          <div class="duration-day"><h3>DAY/s</h3></div>
        </div>
        <!-- div class="patient-duration-total d-flex">
          <div class="duration-total margin-right-sm"><h3>TOTAL</h3></div>
          <v-text-field outlined dense class="margin-right-sm"></v-text-field>
          <v-btn depressed height="40px" style="width: 20%"> Tablet </v-btn>
        </!-->
      </div>
      <div class="patient-note-prescription">
        <v-textarea
          v-model="data.patient_note"
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
        <v-btn
          class="patient-prescribed-button-prescribe"
          @click="prescription"
        >
          PRESCRIBED
        </v-btn>
        <v-btn class="patient-prescribed-button-cancel" tile @click="cancel">
          CANCEL
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
      data: {
        medicine_name: '',
        medicine_dosage: '',
        medicine_brand: '',
        drug_type: 'tablet',
        patient_note: '',
        until: '',
      },
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
        cycle: 'Day',
      },
      patient_info: {
        fname: '',
        age: '',
        sex: '',
        phone: '',
        address: '',
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
    }
  },
  mounted() {
    this.getPatient()
  },
  methods: {
    addmedicine() {
      const datus = {
        patient_id: this.patient_info.id,
        drug_info: this.data,
        sig: this.sig,
      }
      this.$axios.post('add-medicine', datus).then((data) => {
        this.$store.dispatch('snackbar/setSnackbar', {
          text: `A medicine is added to the prescription.`,
        })
      })
    },
    medTypeSelected(type) {
      this.data.drug_type = type
      this.med_type = false
    },
    intakeSelected(type) {
      this.sig.intake = type
      this.med_method = false
    },
    prescription() {
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
  width: 27%;
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
</style>
