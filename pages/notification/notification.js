export default {
  layout: 'search-notification',
  methods: {
    to() {
      this.$router.go(-1)
    },
    getNotifications() {
      this.$axios.get('notifications').then((data) => {
        this.notifications = data.data
      })
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
          friend_request: false,
        },
        {
          icon: 'mdi-account',
          created_at: 'JAN 2 AT 11:28 AM',
          content: 'GENEROSO LAQUIHON',
          friend_request: true,
        },
      ],
    }
  },
}
