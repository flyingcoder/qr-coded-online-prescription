export default {
  layout: 'dashboard',
  middleware: 'auth',
  data() {
    return {
      grid: true,
      align: '',
      medicines: '',
      all_medicine: '',
      brands: [],
    }
  },
  mounted() {
    this.getMedicines()
  },
  computed: {
    grouped() {
      const groups = {}
      this.medicines.forEach((item) => {
        groups[item.brand] = groups[item.brand] || []
        groups[item.brand].push(item)
      })
      console.log(groups)
      return groups
    },
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
          for (let i = 0; i < this.medicines.length; i++) {
            if (!this.brands.includes(this.medicines[i].brand)) {
              this.brands.push(this.medicines[i].brand)
            }
          }
        })
    },
  },
}
