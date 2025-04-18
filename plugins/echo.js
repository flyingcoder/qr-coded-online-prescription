/* eslint-disable node/no-callback-literal */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line no-unused-vars
import Pusher from 'pusher-js'
import Echo from 'laravel-echo';
window.Pusher = Pusher;
export default ({ env, store }, inject) => {

    // Pusher.logToConsole = true; // update: added this
    const echo = new Echo({
        broadcaster: 'pusher',
        key: 'c2acd5975df0263c5b09',
        cluster: 'ap1',
        encrypted: true,
        forceTLS: false,
        authorizer: (channel, options) => {
            return {
                authorize: (socketId, callback) => {
                    store.$axios.post('/broadcasting/auth', {
                        socket_id: socketId,
                        channel_name: channel.name
                    })
                        .then(response => {
                            callback(false, response.data);
                        })
                        .catch(error => {
                            callback(true, error);
                        });
                }
            };
        }
    });

    // Pass a channel ID to leave it
    const leaveChannel = (channelName) => {
        const channel = echo.channel(channelName)
        if (channel) channel.leave()
    }

    echo
        .join('online')
        .here((users) => {
            store.commit('SET_ONLINES', users)
        })
        .joining((user) => {
            store.commit('SET_NEW_ONLINE', user)
        })
        .leaving((user) => {
            store.commit('SET_OFFLINE', user)
        })
    // Now accessible in views/vuex
    // So you can call this.$pusher from anywhere
    // You can also dynamically call $leaveChannel if needed
    inject('echo', echo)
    inject('leaveChannel', leaveChannel)
}
