export default {
  name: 'PrescriptionPad',
  layout: 'search-notification',
  data() {
    return {
      prescriptions: [
        {
          id: 1,
          medicine_name: 'Paracetamol (Biogesic)',
          dosage: '500mg',
          intake: '2',
          type: 'Tablet',
          notes: 'This is just a test',
          repeat: '2',
          until: '2',
          hourAM: '6',
          hourPM: '8',
          cycle: 'Day',
        },
        {
          id: 2,
          medicine_name: 'Paracetamol (Biogesic)',
          dosage: '500mg',
          intake: '2',
          type: 'Tablet',
          notes: 'This is just a test',
          repeat: '2',
          until: '2',
          hourAM: '6',
          hourPM: '8',
          cycle: 'Day',
        },
        {
          id: 3,
          medicine_name: 'Paracetamol (Biogesic)',
          dosage: '500mg',
          intake: '2',
          type: 'Tablet',
          notes: 'This is just a test',
          repeat: '2',
          until: '2',
          hourAM: '6',
          hourPM: '8',
          cycle: 'month',
        },
      ],
    }
  },
  props: {
    // prescriptions: {
    //   type: Array,
    //   default() {
    //     return []
    //   },
    // },
  },

  mounted() {
    // this.getPrescriptions()
  },
  methods: {
    // getPrescriptions() {
    //   this.$axios.get('prescriptions').then((data) => {
    //     this.prescriptions = data.data
    //     console.log(data)
    //   })
    // },
    close() {
      this.$nuxt.back()
    },
  },
}
