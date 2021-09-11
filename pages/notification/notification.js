export default {
  layout: 'search-notification',
  data() {
    return {
      notifications: [],
    }
  },
  mounted() {
    this.getNotifications()
  },
  methods: {
    to() {
      this.$router.go(-1)
    },
    getNotifications() {
      this.$axios.get('notifications').then((data) => {
        this.notifications = data.data
      })
    },
    markReadAll() {
      this.$axios.get('notifications/read-all').then(() => {})
    },
    markRead(id) {
      this.$axios.get('notifications/' + id).then((data) => {
        console.log(data)
      })
    },
  },
}
