<template>
  <div class="prescription-pad">
    <!-- v-dialog v-model="prescription_payment">
      <PayPrescription />
    </!-->
    <div class="prescription-pad-header d-flex">
      <div class="reseta-logo">
        <img src="~/assets/images/white-main-logo.png" />
        <div class="reseta-logo-text">Reseta QRx</div>
      </div>
      <div class="back-button">
        <v-icon size="30px" @click="close">mdi-close</v-icon>
      </div>
    </div>
    <div class="patient-info d-flex">
      <div class="prescription-form-image">
        <img
          v-if="
            prescriptions.doctor.avatar == 'avatar.png' ||
            prescriptions.doctor.avatar ==
              'https://api.resetaqrx.com/storage/users/user-default.png'
          "
          class="user-icon"
          :src="require(`~/assets/images/avatar.png`)"
          :alt="prescriptions.doctor.fname"
        />
        <img
          v-else
          class="user-icon"
          :src="prescriptions.doctor.avatar"
          :alt="prescriptions.doctor.fname"
        />
      </div>
      <div class="prescription-form-info">
        <div class="prescription-doctor-name">
          {{ prescriptions.doctor.fname }} {{ prescriptions.doctor.lname }}
        </div>
        <div class="prescription-doctor-use">
          {{ prescriptions.doctor.experties }}
        </div>
        <div class="prescription-doctor-clinic">
          {{ prescriptions.doctor.licence_number }}
        </div>
        <div class="prescription-doctor-number">
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
        <div class="prescription-hours">
          <!-- <div class="d-flex" style="padding: 15px 0 0 20px">
            <div
              v-for="n in prescription.sig.hoursTime"
              :key="n"
              style="color: #1ac6b6 !important"
            >
              <span v-if="n <= 12" class="time-take-span">
                {{ n + 1 }}am
              </span>
              <span v-else class="time-take-span"> {{ n - 11 }}pm</span>
              </div>
            </div> -->
          <div v-for="time in pres.pivot.cycle_time" :key="time">
            <span v-if="time <= 12">{{ time + 1 }}am</span>
            <span v-else>{{ time - 11 }}pm</span>
          </div>
        </div>
        <div class="prescription-notes">Notes: {{ pres.pivot.note }}</div>
      </div>
    </div>
    <div v-if="$auth.user.role === 'patient'" class="send-prescribed">
      <v-btn class="dark" @click="buyMeds">Buy Medication</v-btn>
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
  computed: {},

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
  font-size: 16px;
  color: $black !important;
}
.prescription-form-info {
  width: 55%;
  padding-left: 12px;
}
.prescribed-left-info {
  padding-left: 20px;
  .prescribed-patient-name {
    font-weight: 500;
    font-size: 18px;
  }
}
.reseta-logo {
  width: 80%;
  display: flex;
  img {
    width: 15%;
  }
  .reseta-logo-text {
    display: flex;
    align-self: center;
  }
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
  color: $black !important;

  .top,
  .left,
  .right,
  .bottom {
    color: $black !important;
  }
}
.prescription-pad-content-body {
  .prescription-notes {
    border: 1px solid #1ac6b6;
    padding: 12px;
    color: $black !important;
  }
  .prescription-sig-content,
  .prescription-till-intake,
  .prescription-hours {
    padding-left: 20px;
    padding-top: 10px;
    color: $black !important;
  }
  .prescription-hours {
    display: flex;
    margin-bottom: 10px;
    div {
      border: 1px solid #1ac6b6;
      padding: 5px;
      margin-right: 10px;
    }
  }
}
.prescription-pad-header {
  margin-bottom: 14px;
  background: $primary-color;
  padding: 1rem;
  align-items: center;
}
.send-prescribed {
  width: 100%;
  margin-top: 15px;
  text-align: center;
  padding-bottom: 30px;
}
</style>
