export default {
  layout: 'search-notification',
  auth: false,
  methods: {
    to() {
      this.$router.go(-1)
    },
  },
  data() {
    return {
      notifications: [
        {
          icon: 'Rx',
          created_at: 'JAN 1 AT 1:50 AM',
          content:
            'Welcome to Reseta QRx the prescription. For more information please click the link http://www.resetaqrx.com.ph',
        },
        {
          icon: 'mdi-account',
          created_at: 'JAN 2 AT 7:08 AM',
          content: 'DR. Roy BARCINAS Sent a prescription',
        },
        {
          icon: 'mdi-hospital',
          created_at: 'JAN 2 AT 9:14 AM',
          content: 'OPTIONS PHARMACY Dispensed all your medications',
        },
        {
          icon: 'mdi-account',
          created_at: 'JAN 2 AT 11:28 AM',
          content: 'GENEROSO LAQUIHON',
          accept: 'ACCEPT',
          cancel: 'CANCEL',
        },
      ],
    }
  },
}
