export default {
  layout: 'dashboard',
  middleware: 'auth',
  data() {
    return {
      loading: false,
      grid: true,
      align: '',
      medicines: '',
      brands: [],
      search: '',
    }
  },
  mounted() {
    this.getMedicines()
  },
  computed: {
    grouped() {
      const groups = {}
      this.filteredName.forEach((item) => {
        groups[item.brand] = groups[item.brand] || []
        groups[item.brand].push(item)
      })
      return groups
    },
    filteredName() {
      const searchValue = this.search !== null ? this.search.toLowerCase() : ''
      this.filtered = this.medicines.filter((med) => {
        return (
          med.brand.toLowerCase().match(searchValue || '') ||
          med.generic_name.toLowerCase().match(searchValue || '')
        )
      })
      // return this.medicines.filter((med) => {
      //   return (
      //     med.brand.toLowerCase().match(this.search.toLowerCase()) ||
      //     med.generic_name.toLowerCase().match(this.search.toLowerCase())
      //   )
      // })
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
      this.loading = true
      await this.$axios.get('medicines/in-store/').then((data) => {
        this.medicines = data.data
        for (let i = 0; i < this.medicines.length; i++) {
          if (!this.brands.includes(this.medicines[i].brand)) {
            this.brands.push(this.medicines[i].brand)
          }
        }
        this.loading = false
      })
    },
  },
}
