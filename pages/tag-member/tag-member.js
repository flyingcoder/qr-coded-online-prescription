export default {
  name: 'Member Tag',
  layout: 'search-notification',
  data() {
    return {
      family_count: 1,
      dependent_count: 1,
      sex: ['Male', 'Female'],
      family: [],
      dependent: [],
    }
  },
  mounted() {},
  methods: {
    exit() {
      this.$router.push('/settings')
    },
    addFamily() {
      this.family.push({
        id: this.family_count,
        first_name: '',
        last_name: '',
        birthday: '',
        sex: '',
        relationship: '',
      })
      this.family_count++
    },
    addDependent() {
      this.dependent.push({
        id: this.dependent_count,
        first_name: '',
        last_name: '',
        birthday: '',
        sex: '',
        relationship: '',
      })
      this.dependent_count++
    },
    deleteFamily(index) {
      const divIndex = this.family.findIndex((input) => input.id === index)
      this.family.splice(divIndex, 1)
    },
    deleteDependent(index) {
      const divIndex = this.dependent.findIndex((input) => input.id === index)
      this.dependent.splice(divIndex, 1)
    },
  },
}
