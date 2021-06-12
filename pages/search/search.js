export default {
  layout: 'search-notification',
  methods: {
    to() {
      this.$router.go(-1)
    },
  },
  data() {
    return {
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
