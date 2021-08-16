export default {
  layout: 'search-notification',
  data() {
    return {
      isActive: false,
      awaitingChange: false,
      search_query: '',
      hasHeader: true,
      item: '',
      categories: ['medicine', 'doctor', 'pharmacy', 'people'],
      allowDelete: false,
      items: [],
    }
  },
  watch: {
    search_query(q) {
      if (q.length > 0) this.isActive = true
      else this.isActive = false

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
    item(data) {
      console.log(data)
      this.selectItem()
    },
  },
  mounted() {
    this.recentQuery()
  },
  methods: {
    searchQuery() {
      if (this.search_query) {
        this.$axios.get('search?q=' + this.search_query).then((data) => {
          this.items = data.data
        })
      }
    },
    selectItem() {
      this.item.q = this.search_query
      this.$axios.post('search/learn', this.item)
      if (this.item.type === 'medicine')
        this.$router.push('medicine/' + this.item.model_id)
      else this.$router.push(this.item.type + '/' + this.item.model_id)
    },
    recentQuery() {
      this.$axios.get('search/recent').then((data) => {
        this.items = data.data
      })
    },
    back() {
      this.$router.back()
    },
    clearSearch() {
      this.search_query = ''
      this.isActive = false
    },
  },
}
