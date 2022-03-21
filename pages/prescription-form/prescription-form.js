export default {
  layout: 'dashboard',
  middleware: 'auth',
  data() {
    return {
      render: true,
      payment: 0,
      patients: [],
      patient_info: {},
      popup_prescription: false,
    }
  },
  mounted() {
    this.getPatients()
  },
  methods: {
    forceRerender() {
      // Remove my-component from the DOM
      this.render = false
      console.log('this')
      this.$nextTick(() => {
        // Add the component back in
        this.render = true
      })
    },
    patientSelected() {
      this.patient = this.patient_info
    },
    getPatients() {
      this.$axios.get('users/patient').then((data) => {
        this.patients = data.data
      })
    },
    payClinic() {
      this.popup_prescription = true
    },
    payGcash() {
      this.popup_prescription = true
    },
    closePrescription() {
      this.popup_prescription = false
    },
  },
}
