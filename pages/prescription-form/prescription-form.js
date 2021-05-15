export default {
  layout: 'dashboard',
  auth: false,
  data() {
    return {
      data: {
        patient_name: '',
        patient_age: '',
        patient_sex: '',
        patient_number: '',
        patient_address: '',
        medicine_name: '',
        medicine_dosage: '',
        medicine_brand: '',
        patient_note: '',
        duration: '',
      },

      patient_info: {
        image: 'medical-pharmacy-logo.jpg',
        name: 'Mel Ligoro',
        time: '12:30 PM',
        number: '09189789876',
        use: 'Skin',
        clinic: 'Pharmacy',
        message:
          'Cookie jelly cake lemon drops cotton candy lemon drops cake. Sweet roll chocolate pudding. Sweet dessert cheesecake topping cotton candy ice cream chocolate cake gummies.',
      },
      med_type: false,
      med_method: false,
      amount: '1',
      take: '2',
      items: ['1', '2', '3', '4'],
      minimumAM: 0,
      minimumPM: 0,
      durations: [
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
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
        '31',
      ],
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
    this.getPrescription()
  },
  methods: {
    prescription() {
      this.$axios.post('prescription-form', this.data).then((data) => {
        this.$store.dispatch('snackbar/setSnackbar', {
          text: `You have successfully created the prescrition`,
        })
      })
    },
    getPrescription() {
      this.$axios.get('prescriptions').then((data) => {
        this.prescriptions = data.data
        console.log(data)
      })
    },
    cancel() {},
  },
}
