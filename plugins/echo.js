import Pusher from 'pusher-js'

export default ({ env, store }, inject) => {
  // we need withCredentials for our CORS setup
  Pusher.Runtime.createXHR = () => {
    const xhr = new XMLHttpRequest()
    xhr.withCredentials = true
    return xhr
  }
  const pusher = new Pusher(env.pusherAppKey, {
    cluster: env.pusherCluster,
    encrypted: true,
    // Laravel Echo basically just set up this endpoint
    authEndpoint: `http://localhost/resetaqrx-api/public/api/broadcasting/auth`,
  })

  // Pass a channel ID to leave it
  const leaveChannel = (channelName) => {
    const channel = pusher.channel(channelName)
    if (channel) channel.unsubscribe()
  }

  // You can connect to default channels here
  pusher.subscribe('default').bind('someEvent', (notification) => {
    store.commit('handleSomeEvent', notification)
  })

  // Now accessible in views/vuex
  // So you can call this.$pusher from anywhere
  // You can also dynamically call $leaveChannel if needed
  inject('pusher', pusher)
  inject('leaveChannel', leaveChannel)
}
