export default {
  name: 'chatbox',
  layout: 'search-notification',
  data() {
    return {
      profile: {},
      messages: '',
      body: {
        message: '',
        type: 'user',
        file: '',
        id: 0,
        temporaryMsgId: 'temp_1',
      },
    }
  },
  mounted() {
    this.getDoctor()
    this.fetchMessage()
  },
  methods: {
    sendMessage() {
      const msgForm = document.getElementById('message-form')

      const formData = new FormData(msgForm)

      formData.append('id', this.body.id)

      formData.append('temporaryMsgId', this.body.temporaryMsgId)

      formData.append('type', this.body.type)

      this.$axios
        .post('chat/sendMessage', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((data) => {
          this.messages = data.data.message
        })
    },
    fetchMessage() {
      const params = {
        type: 'user',
        id: this.$route.params.id,
      }
      this.$axios.post('chat/fetchMessages', { params }).then((data) => {
        this.messages = data.data
      })
    },
    getDoctor() {
      this.$axios.get('user/' + this.$route.params.id).then((data) => {
        this.profile = data.data
        this.body.id = data.data.id
      })
    },
  },
}
