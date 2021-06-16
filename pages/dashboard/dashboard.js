export default {
  layout: 'dashboard',
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
  },
  data() {
    return {
      newsfeeds: [],
      dialog: true,
    }
  },
}
