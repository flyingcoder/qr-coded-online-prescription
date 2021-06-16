export default {
  name: 'chatbox',
  layout: 'search-notification',
  data() {
    return {
      profile: {
        id: 0,
        avatar: 'Muzan_Anime_Profile.png',
        name: 'DR NEIL LAQUIHON',
        content: `KDHI, DIKAPAWAN CITY`,
        number: '09187829876',
        description:
          'Doctors, also known as Physicians, are licensed health professionals who maintain and restore human health through the practice of medicine. They examine patients, review their medical history, diagnose illnesses or injuries, administer treatment, and counsel patients on their health and well being.',
      },
      attachment: '',
      messages: '',
      previewUrl: '',
      prescription_link: '/prescription-form/',
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
    this.getRecepient()
    this.fetchMessage()
    console.log(this.$echo)
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
    async getRecepient() {
      await this.$axios.get('user/' + this.$route.params.id).then((data) => {
        this.profile = data.data
        this.body.id = data.data.id
        this.prescription_link = this.prescription_link + this.profile.id
      })
    },
  },
}
