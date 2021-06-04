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
