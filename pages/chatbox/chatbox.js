export default {
  name: 'chatbox',
  layout: 'search-notification',
  data() {
    return {
      body: {
        message: '',
        type: 'user',
        file: '',
        id: '',
        temporaryMsgId: 'temp_1',
      },
    }
  },
  methods: {
    sendMessage() {
      const formData = new FormData()

      formData.append('file', this.body.file)

      formData.append('message', this.body.message)

      formData.append('id', this.body.id)

      formData.append('temporaryMsgId', this.body.temporaryMsgId)

      formData.append('type', this.body.type)

      this.$axios.post('sendMessage', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
    },
  },
}
