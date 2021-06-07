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
          <div class="prescribed-created">06/06/21</div>
          <div class="prescribed-patient-info">
            <div class="prescribed-left-info d-flex">
              <div class="prescribed-patient-name">
                {{ prescribed.patient_name }}
              </div>
              <div class="prescribed-age_gender d-flex">
                <div class="prescribed-patient-age">
                  {{ prescribed.patient_age }}/
                </div>
                <div class="prescribed-patient-gender">
                  {{ prescribed.patient_gender }}
                </div>
              </div>
            </div>
            <div class="prescribed-patient-address">
              {{ prescribed.patient_address }}
            </div>
          </div>
          <div class="send-prescribed">
            <v-btn @click="prescription">Prescribed</v-btn>
          </div>
        </div>
        <div class="prescription-popup-body">
          <div
            v-for="prescription in prescriptions"
            :key="prescription.id"
            class="popup-prescribed-content"
          >
            <div class="prescription-content-header d-flex">
              <div class="prescription-id">{{ prescription.id }})</div>
              &nbsp;
              <div class="medicine-name">
                {{ prescription.medicine_name }}
              </div>
              <div class="medicine-dosage">
                {{ prescription.medicine_dosage }}
              </div>
              <div class="medicine-tab-id">tab # {{ prescription.tab_id }}</div>
            </div>
            <div class="prescription-content-body">
              <div class="prescription-body-main-content">
                Sig take {{ prescription.medicine_count }}
                {{ prescription.medicine_type }}
                {{ prescription.medicine_usage }}x a
                {{ prescription.medicine_take_time }}
              </div>
              <div class="prescription-body-date-consumation">
                {{ prescription.date_consumation }} Days
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
  data() {
    return {
      dialog: false,
      prescriptions: [
        {
          id: 1,
          medicine_name: 'Losartan',
          medicine_dosage: '100g',
          tab_id: 64,
          medicine_count: '1',
          medicine_type: 'tablet',
          medicine_usage: '2',
          medicine_take_time: 'day',
          date_consumation: '31',
          time_consumation: '6am -- 6pm',
        },
        {
          id: 2,
          medicine_name: 'Paracetamol',
          medicine_dosage: '500mg',
          tab_id: 31,
          medicine_count: '2',
          medicine_type: 'tablet',
          medicine_usage: '1',
          medicine_take_time: 'day',
          date_consumation: '31',
          time_consumation: '6am -- 6pm',
        },
      ],
      prescribed: {
        patient_name: 'Juan Delacruz',
        patient_address: 'Quezon Ave, Kidapawan City',
        patient_gender: 'Male',
        patient_age: '36',
      },
    }
  },
  method: {
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
  },
}
</script>

<style lang="scss" scoped>
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
    width: 35%;
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
