export default {
  layout: 'dashboard',
  methods: {
    swiper() {
      // this.$router.push('/login')
    },
    getContacts() {
      this.$axios.post('chat/getContacts').then((data) => {
        this.newsfeeds = data.data.contacts
      })
    },
  },
  mounted() {
    this.getContacts()
  },
  data() {
    return {
      newsfeeds: [],
    }
  },
}
