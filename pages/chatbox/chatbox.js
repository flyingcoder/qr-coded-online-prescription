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
          console.log(this.messages.length)
          this.messages.push(data.data.message)
          this.body.message = ''
        })
    },
    fileSelected(e) {
      console.log(e)
      const file = e.target.files[0]
      if (!file.type.match('image.*')) {
        this.attachment = this.attachmentTemplate('file', file.name)
        console.log('this')
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
    attachmentTemplate(fileType, fileName, imgURL = null) {
      if (fileType !== 'image') {
        return (
          `
        <div class="attachment-preview">
            <span class="fas fa-times cancel"></span>
            <p style="padding:0px 30px;"><span class="fas fa-file"></span> ` +
          fileName +
          `</p>
        </div>
        `
        )
      } else {
        return (
          `
        <div class="attachment-preview">
            <span class="fas fa-times cancel"></span>
            <div class="image-file chat-image" style="background-image: url('` +
          imgURL +
          `');"></div>
            <p><span class="fas fa-file-image"></span> ` +
          fileName +
          `</p>
        </div>
        `
        )
      }
    },
    fetchMessage() {
      const params = {
        type: 'user',
        id: this.$route.params.id,
      }
      this.$axios.post('chat/fetchMessages', params).then((data) => {
        this.messages = data.data.messages
        console.log(data)
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
