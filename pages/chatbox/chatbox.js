export default {
  name: 'chatbox',
  layout: 'search-notification',
  data() {
    return {
      profile: {
        id: 1,
      },
      isTyping: false,
      loading: false,
      loader: null,
      attachment: '',
      messages: [],
      previewUrl: '',
      prescription_link: '/prescription-form/',
      body: {
        message: '',
        type: 'user',
        file: '',
        id: 0,
        temporaryMsgId: 'temp_1',
      },
      typingTimer: null,
    }
  },
  mounted() {
    this.getRecepient()
    this.fetchMessage()
  },
  computed: {
    chatRoomNumber() {
      return Number(this.$auth.user.id) < Number(this.profile.id)
        ? `${this.$auth.user.id}_${this.profile.id}`
        : `${this.profile.id}_${this.$auth.user.id}`
    },
  },
  methods: {
    setUpRealtime() {
      const _this = this
      _this.$echo
        .private(`chatify.${this.chatRoomNumber}`)
        .listen('.NewChatMessage', ({ message }) => {
          if (message.from_id === this.profile.id) {
            this.messages.push(message)
          }
        })
      _this.typingChannel = _this.$echo.private(`typing.${this.chatRoomNumber}`)
      if (_this.typingChannel) {
        _this.typingChannel.listenForWhisper('typing', (payload) => {
          _this.isTyping = Number(payload.user) !== Number(_this.$auth.user.id)
          setTimeout(function () {
            _this.isTyping = false
          }, 900)
        })
      }
    },
    touchStart(item, touchEvent) {
      if (touchEvent.changedTouches.length !== 1) {
        // We only care if one finger is used
        return
      }
      const posXStart = touchEvent.changedTouches[0].clientX
      addEventListener(
        'touchend',
        (touchEvent) => this.touchEnd(item, touchEvent, posXStart),
        { once: true }
      )
    },
    touchEnd(item, touchEvent, posXStart) {
      if (touchEvent.changedTouches.length !== 1) {
        // We only care if one finger is used
        return
      }
      const posXEnd = touchEvent.changedTouches[0].clientX
      const dest = item.last_message_raw.destination
      if (posXStart < posXEnd) {
        // swipe right
        this.$router.push('/chatbox/' + item.user_id)
      } else if (posXStart > posXEnd) {
        // swipe left
        if (dest !== null) this.$router.push(dest)
      }
    },
    async sendMessage() {
      this.loader = 'loading'
      this.loading = true

      if (this.body.message === '' && this.attachment === '') {
        this.loading = false
        return
      }

      const msgForm = document.getElementById('message-form')

      const formData = new FormData(msgForm)

      formData.append('id', this.body.id)

      formData.append('temporaryMsgId', this.body.temporaryMsgId)

      formData.append('type', this.body.type)

      try {
        const res = await this.$axios.post('chat/sendMessage', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })

        this.messages.push(res.data.message)
        this.body.message = ''
        this.attachment = ''
        this.loading = false
      } catch (err) {
        this.loading = false
      }
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
      await this.$axios
        .get('user/' + this.$route.params.id)
        .then((data) => {
          this.profile = data.data
          this.body.id = data.data.id
          this.prescription_link = this.prescription_link + this.profile.id
        })
        .finally(() => this.setUpRealtime())
    },
    meIsTyping() {
      if (this.typingChannel) {
        this.typingTimer = setTimeout(() => {
          this.typingChannel.whisper('typing', {
            user: this.$auth.user.id,
            typing: true,
          })
        }, 300)
      }
    },
  },
}
