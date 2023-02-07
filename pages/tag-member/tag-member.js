export default {
  name: 'MemberTag',
  layout: 'search-notification',
  data() {
    return {
      emailRules: [
        (v) =>
          !v ||
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          'E-mail must be valid',
      ],
      family_count: 1,
      dependent_count: 1,
      sex: ['Male', 'Female'],
      family: [],
      dependent: [],
    }
  },
  mounted() {
    this.getFamilyMember()
  },
  methods: {
    exit() {
      this.$router.push('/settings')
    },
    addFamilyMember() {
      console.log(this.family)
      this.$axios.post('user/add-family', this.family).then((data) => {
        this.$store.dispatch('snackbar/setSnackbar', {
          text: `New Member Added`,
        })
      })
    },
    getFamilyMember() {
      this.$axios.get('get-family-members').then((data) => {
        this.family = data.data
      })
    },
    addFamily() {
      this.family.push({
        id: this.family_count,
        fname: '',
        lname: '',
        email: '',
        sex: '',
        parent_relationship: '',
      })
      this.family_count++
    },
    addDependent() {
      this.dependent.push({
        id: this.dependent_count,
        fname: '',
        lname: '',
        email: '',
        sex: '',
        parent_relationship: '',
      })
      this.dependent_count++
    },
    deleteFamily(index) {
      const divIndex = this.family.findIndex((input) => input.id === index)
      this.family.splice(divIndex, 1)
      this.$axios.put('remove-family/' + index).then((data) => {
        this.$store.dispatch('snackbar/setSnackbar', {
          text: 'Deleted!',
        })
      })
    },
    deleteDependent(index) {
      const divIndex = this.dependent.findIndex((input) => input.id === index)
      this.dependent.splice(divIndex, 1)
    },
  },
}
