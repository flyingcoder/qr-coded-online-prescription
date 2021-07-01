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
    touchStart(touchEvent) {
      if (touchEvent.changedTouches.length !== 1) {
        // We only care if one finger is used
        return
      }
      const posXStart = touchEvent.changedTouches[0].clientX
      addEventListener(
        'touchend',
        (touchEvent) => this.touchEnd(touchEvent, posXStart),
        { once: true }
      )
    },
    touchEnd(touchEvent, posXStart) {
      if (touchEvent.changedTouches.length !== 1) {
        // We only care if one finger is used
        return
      }
      const posXEnd = touchEvent.changedTouches[0].clientX
      if (posXStart < posXEnd) {
        console.log('right') // swipe right
      } else if (posXStart > posXEnd) {
        console.log('left') // swipe left
      }
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
