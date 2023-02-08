export default {
  name: 'Virtual Medicines',
  layout: 'dashboard',
  data() {
    return {
      prescriptions: [],
      medicines: [],
      loading: false,
      filtered: '',
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
      this.$axios.put('csv-upload', this.product_list).then((data) => {
        console.log(data)
        // this.$auth.user.avatar = data.data.avatar
        // this.$store.dispatch('snackbar/setSnackbar', {
        //   text: `Profile updated`,
        // })
        // this.$router.push('/settings')
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
          this.loading = false
        })
    },
  },
}
