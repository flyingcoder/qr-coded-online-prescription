<template>
  <swipe-list
    ref="list"
    :disabled="!enabled"
    :items="mockSwipeList"
    item-key="id"
  >
    <template #default="{ item }">
      <v-row class="newsfeed" @touchstart="touchStart(item, $event)">
        <div class="col-1">
          <img
            v-if="
              item.user_avatar == 'avatar.png' ||
              item.user_avatar ==
                'https://api.resetaqrx.com/storage/users/user-default.png'
            "
            class="user-icon"
            :src="require(`~/assets/images/` + item.user_avatar)"
            :alt="item.user_name"
          />
          <img
            v-else
            class="user-icon"
            :src="item.user_avatar"
            :alt="item.user_name"
          />
        </div>
        <div class="col-10 user-post">
          <div class="up-header">
            <div class="user-name">{{ item.user_name }}</div>
            <span class="time">{{ item.lastMessage.time }}</span>
          </div>
          <div class="up-message">
            <!-- eslint-disable -->
                <div 
                    v-if="item.lastMessage.message" 
                    v-html="item.lastMessage.message" 
                    class="message">
                </div>
                <!-- eslint-disable --> 
                <div v-else class="thumbnails"><v-icon>mdi-image</v-icon></div>
                <nuxt-link v-if="false" to="/medication/01">
                <div v-if="item.id" class="sent-prescription">
                    {{ item.id }}
                </div>
                </nuxt-link>
            </div>
        </div>
      </v-row>
    </template>
    <template #left=""> </template>
    <template #right=""> </template>
  </swipe-list>
</template>

<script>
import { SwipeList } from 'vue-swipe-actions'

export default {
  components: {
    SwipeList,
  },
  props: {
    mockSwipeList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      enabled: true,
    }
  },
  methods: {
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
  },
}
</script>
<style lang="scss">
.v-application a {
  color: black;
}
.newsfeed {
  display: flex;
  padding: 5px 0;
  border-bottom: 2px solid $gray !important;
  margin-bottom: 15px;
}
.newsfeed:first-child {
  padding-top: 0;
}
.newsfeed:last-child {
  border-bottom: 0;
}
.up-header {
  position: relative;
}
.up-message {
  line-height: 1.3;
  margin-top: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.user-name {
  font-size: 16px;
  font-weight: 500;
  max-width: 210px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.user-post {
  margin-left: 25px;
  width: 100%;
}
</style>
