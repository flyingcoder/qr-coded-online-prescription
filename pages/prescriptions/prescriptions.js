export default {
  layout: 'dashboard',
  data() {
    return {
      allmedicines: '',
      product_name: [
        {
          id: 1,
          title: 'COLCHICINE',
        },
        // {
        //   id: 2,
        //   title: 'N - ACETYLCYSTEINE',
        // },
        // {
        //   id: 3,
        //   title: 'AZITHROMYCIN',
        // },
      ],
    }
  },
  mounted() {
    this.getallMedicines()
  },
  methods: {
    getallMedicines() {
      this.$axios.get('allmedicines').then((data) => {
        this.allmedicines = data.data
        console.log(data)
      })
    },
  },
}
