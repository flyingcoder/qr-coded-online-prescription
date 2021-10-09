export default {
  layout: 'dashboard',
  data() {
    return {
      newsfeeds: [],
      dialog: true,
    }
  },
  methods: {
    swiper() {
      // this.$router.push('/login')
    },
    async getContacts() {
      await this.$axios.post('chat/getContacts').then((data) => {
        this.$store.dispatch('preloader/setPreloader', {
          showing: false,
        })
        this.newsfeeds = data.data.contacts
      })
    },
  },
  mounted() {
    this.$store.dispatch('preloader/setPreloader', {
      showing: true,
    })
    this.getContacts()
    this.$bus.$on('NewPrescription', (payload) => {
      this.getContacts()
    })
    this.$bus.$on('NewChatMessage', (payload) => {
      this.getContacts()
    })
  },
}
