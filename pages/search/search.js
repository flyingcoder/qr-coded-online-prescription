export default {
  layout: 'search-notification',
  data() {
    return {
      isActive: false,
      awaitingChange: false,
      search_query: '',
      hasHeader: true,
      item: '',
      items: [
        {
          id: 0,
          name: 'Mike',
          sub: 'Pediatrician',
          image: 'mdi-account',
          model_id: 1,
        },
      ],
    }
  },
  watch: {
    search_query(q) {
      if (q.length >= 3) {
        this.hasHeader = false
        if (!this.awaitingChange) {
          setTimeout(() => {
            this.searchQuery()
            this.awaitingChange = false
          }, 1000)
        }
        this.awaitingChange = true
      }
    },
  },
  mounted() {
    this.recentQuery()
    console.log(this.sendItem)
  },
  methods: {
    searchQuery() {
      this.$axios.get('search?q=' + this.search_query).then((data) => {
        this.items = data.data
      })
    },
    sendItem() {},
    recentQuery() {
      this.$axios.get('search/recent').then((data) => {
        this.items = data.data
      })
    },
    back() {
      this.$router.back()
    },
    focus() {
      this.isActive = true
    },
    clearSearch() {
      this.search_query = ''
      this.isActive = false
    },
    searchLink() {
      this.$router.push('search/1')
    },
  },
}
