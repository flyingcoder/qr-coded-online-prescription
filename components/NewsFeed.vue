<template>
  <div class="newsfeed" @click="singleFeed(newsfeed.user_id)">
    <div class="user">
      <img
        class="user-icon"
        :src="require(`~/assets/images/` + newsfeed.user_avatar)"
        :alt="newsfeed.user_name"
      />
    </div>
    <div class="user-post">
      <div class="up-header">
        <div class="user-name">{{ newsfeed.user_name }}</div>
        <span class="time">{{ newsfeed.lastMessage.time }}</span>
      </div>
      <div class="up-message">
        <!-- eslint-disable -->
        <div 
          v-if="newsfeed.lastMessage.message" 
          v-html="newsfeed.lastMessage.message" 
          class="message">
        </div>
        <!-- eslint-disable --> 
        <div v-else class="thumbnails"><v-icon>mdi-image</v-icon></div>
        <nuxt-link v-if="false" to="/medication/01">
          <div v-if="newsfeed.id" class="sent-prescription">
            {{ newsfeed.id }}
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Newsfeed',
  props: {
    newsfeed: {
      type: Object,
      required: true,
    },
  },
  methods: {
    singleFeed(id) {
      this.$router.push('/chatbox/' + id)
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
  padding: 15px 0;
  border-bottom: 2px solid $gray !important;
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
