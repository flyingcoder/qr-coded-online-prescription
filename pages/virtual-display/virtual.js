export default {
  name: 'Virtual Medicines',
  layout: 'dashboard',
  data() {
    return {
      prescriptions: [],
      medicines: [], // Initialize as an empty array
      loading: false,
      filtered: [],
      search: '',
      panel: [0],
      item_icon: true,
      item_list: false,
      product_list: null,
      item_download: false,
      item: 5,
      items: [],
      pharma_id: 0,
    }
  },
  mounted() {
    this.pharma_id = this.$auth.user.id
    if (this.$route.params.id !== undefined)
      this.pharma_id = this.$route.params.id

    this.getProducts()
  },
  methods: {
    medicineEdit(id) {
      this.$router.push('/medicine/edit/' + id)
    },
    csvUpload() {
      // this.$axios.put('medicine/csv-upload', this.product_list).then((data) => {
      //   console.log(this.product_list)
      //   // this.$auth.user.avatar = data.data.avatar
      //   // this.$store.dispatch('snackbar/setSnackbar', {
      //   //   text: `Profile updated`,
      //   // })
      //   // this.$router.push('/settings')
      // })
      this.$axios
        .post('medicines/csv-upload', this.product_list)
        .then((data) => {
          // this.$store.dispatch('snackbar/setSnackbar', {
          //   text: 'Medicine is added succesfully.',
          // })
        })
    },
    filterMedicine() {
      const searchValue = this.search !== null ? this.search.toLowerCase() : ''
      this.filtered = this.medicines.filter((med) => {
        return (
          med.brand.toLowerCase().includes(searchValue) ||
          med.generic_name.toLowerCase().includes(searchValue)
        )
      })
    },
    itemDisplayIcon() {
      this.item_list = false
      this.item_icon = true
      this.item_download = false
    },
    itemDisplayList() {
      this.item_list = true
      this.item_download = false
      this.item_icon = false
    },
    itemDownload() {
      this.item_list = false
      this.item_download = true
      this.item_icon = false
    },
    async getProducts() {
      this.loading = true
      await this.$axios
        .get('medicines/in-store/' + this.pharma_id)
        .then((data) => {
          this.medicines = data.data
          this.filtered = this.medicines // Initialize the filtered array
          this.loading = false
        })
    },
  },
}
