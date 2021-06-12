export default {
  layout: 'dashboard',
  auth: true,
  data() {
    return {
      grid: true,
      align: '',
      medicines: '',
    }
  },
  mounted() {
    this.getMedicines()
  },
  methods: {
    pharmacy(id) {
      this.$router.push('/pharmacy/' + id)
    },
    async getMedicines() {
      await this.$axios
        .get('medicines/in-store/' + this.$auth.user.id)
        .then((data) => {
          this.medicines = data.data
        })
    },
  },
}
