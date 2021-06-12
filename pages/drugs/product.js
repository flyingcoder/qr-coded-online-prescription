export default {
  layout: 'dashboard',
  data() {
    return {
      allmedicines: [],
    }
  },
  mounted() {
    this.getPrescribeMeds()
  },
  methods: {
    getPrescribeMeds() {
      this.$axios
        .get('medicines/prescribe/' + this.$route.params.id)
        .then((data) => {
          this.allmedicines = data.data
        })
    },
  },
}
