export default {
  name: 'Virtual Medicines',
  layout: 'dashboard',
  data() {
    return {
      prescriptions: [],
      loading: false,
      filtered: '',
      search: '',
      item_icon: true,
      item_list: false,
      item_download: false,
      item: 5,
      items: [
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle:
            "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle:
            "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.",
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle:
            "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?",
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle:
            "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?",
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle:
            "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
        },
      ],
    }
  },
  mounted() {
    this.getPrescriptions()
  },
  methods: {
    viewPrescription(id) {
      this.$router.push('/prescriptions/pad/' + id)
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
    async getPrescriptions() {
      this.loading = true
      await this.$axios.get('prescriptions').then((data) => {
        this.prescriptions = data.data
        this.filtered = this.prescriptions
        this.loading = false
      })
    },
    filterPrescriptions() {
      this.filtered = this.prescriptions.filter((val) => {
        return (
          val.doctor.fname.toLowerCase().match(this.search.toLowerCase()) ||
          val.doctor.lname.toLowerCase().match(this.search.toLowerCase())
        )
      })
    },
  },
}
