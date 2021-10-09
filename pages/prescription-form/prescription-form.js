export default {
  layout: 'dashboard',
  middleware: 'auth',
  data() {
    return {
      render: true,
    }
  },
  methods: {
    forceRerender() {
      // Remove my-component from the DOM
      this.render = false
      console.log('this')
      this.$nextTick(() => {
        // Add the component back in
        this.render = true
      })
    },
  },
}
