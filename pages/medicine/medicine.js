export default {
  layout: 'dashboard',
  middleware: 'auth',
  data() {
    return {
      grid: true,
      align: '',
      medicines: '',
      all_medicine: '',
    }
  },
  mounted() {
    this.getMedicines()
  },
  methods: {
    pharmacy(id) {
      this.$router.push('/pharmacy/' + id)
    },
    editMedicine(id) {
      this.$router.push('/medicine/edit/' + id)
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
