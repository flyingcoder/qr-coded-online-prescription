export default {
  layout: 'dashboard',
  methods: {
    swiper() {
      // this.$router.push('/login')
    },
    getContacts() {
      this.$axios.post('chat/getContacts').then((data) => {
        this.newsfeeds = data.data.contacts
        if (data.data.contacts.length === 0) {
          this.display = true
          this.no_display = false
        }
      })
    },
  },
  mounted() {
    this.getContacts()
  },
  data() {
    return {
      display: false,
      no_display: true,
      newsfeeds: [],
    }
  },
}
