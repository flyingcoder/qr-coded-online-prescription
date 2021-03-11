export default {
  layout: 'dashboard',
  auth: false,
  props: {
    patient_info: {
      type: Object,
      default() {
        return {
          name: 'Neil Humprey O. Laquihon',
          use: 'Internal Medicine',
          clinic: 'Laquihon Medical Clinic',
          number: 'Tell #288-500',
          date: '01/21/21',
          time: '21:05 Am',
        }
      },
    },
  },
  data() {
    return {}
  },
}
