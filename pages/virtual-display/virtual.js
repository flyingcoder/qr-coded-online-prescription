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
