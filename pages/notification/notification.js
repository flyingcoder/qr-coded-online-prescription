export default {
  layout: 'search-notification',
  methods: {
    test() {
      console.log(this.notifications)
    },
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
      notifications: [],
    }
  },
}
