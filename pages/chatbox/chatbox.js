export default {
  name: 'chatbox',
  layout: 'search-notification',
  data() {
    return {
      profile: {},
      attachment: '',
      messages: '',
      previewUrl: '',
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
    this.$echo.channel('chat').listen('messaging', (e) => {
      console.log(e)
    })
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
          this.messages.push(data.data.message)
          this.body.message = ''
          this.attachment = ''
        })
    },
    fileSelected(e) {
      const file = e.target.files[0]
      if (!file.type.match('image.*')) {
        this.attachment = this.attachmentTemplate('file', file.name)
      } else {
        const reader = new FileReader()
        reader.onload = (evt) => {
          this.attachment = {
            type: 'image',
            name: file.name,
            thumbnails: evt.target.result,
          }
        }
        reader.readAsDataURL(file)
      }
    },
    fetchMessage() {
      const params = {
        type: 'user',
        id: this.$route.params.id,
      }
      this.$axios.post('chat/fetchMessages', params).then((data) => {
        this.messages = data.data.messages
      })
    },
    back() {
      this.$router.back()
    },
    getDoctor() {
      this.$axios.get('user/' + this.$route.params.id).then((data) => {
        this.profile = data.data
        this.body.id = data.data.id
      })
    },
  },
}
