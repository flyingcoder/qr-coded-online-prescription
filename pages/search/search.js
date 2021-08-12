export default {
  layout: 'search-notification',
  methods: {
    back() {
      this.$router.go(-1)
    },
    focus() {
      this.isActive = true
    },
    blur() {
      this.isActive = false
    },
    clearSearch() {
      this.global_search = ''
      this.isActive = false
    },
    searchLink() {
      this.$router.push('search/1')
    },
  },
  data() {
    return {
      isActive: false,
      all_search_result: '',
      global_search: '',
      items: ['test', 'test2', 'test3'],
      results: [
        {
          user: 'mdi-account',
          name: 'Virginia Laquihon',
        },
        {
          user: 'mdi-account',
          name: 'Weng Artes M.D.',
        },
        {
          user: 'mdi-magnify',
          name: 'Internist in Kidapawan City',
        },
        {
          user: 'mdi-magnify',
          name: 'Pediatrician',
        },
        {
          user: 'mdi-magnify',
          name: 'Colchicire',
        },
      ],
    }
  },
}
