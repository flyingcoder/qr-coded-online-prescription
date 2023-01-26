export default {
  layout: 'dashboard',
  head: {
    title: 'Home'
  },
  data() {
    return {
      newsfeeds: [],
      dialog: true,
      loading: false,
    }
  },
  methods: {
    swiper() {
      // this.$router.push('/login')
    },
    async getContacts() {
      this.loading = true
      try {
        await this.$axios.post('chat/getContacts').then((data) => {
          this.$store.dispatch('preloader/setPreloader', {
            showing: false,
          })
          this.newsfeeds = data.data.contacts
          this.loading = false
        })
      } catch (error) {
        console.log('error')
        this.loading = false
        return error.response
      }
    },
  },
  mounted() {
    // this.$store.dispatch('preloader/setPreloader', {
    //   showing: true,
    // })
    this.getContacts()
    this.$bus.$on('NewPrescription', (payload) => {
      this.getContacts()
    })
    this.$bus.$on('NewChatMessage', (payload) => {
      this.getContacts()
    })
  },
}
