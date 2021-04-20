<template>
  <div class="newsfeed" @click="singleFeed">
    <div class="user">
      <img
        class="user-icon"
        :src="require(`~/assets/images/${newsfeed.image}`)"
        :alt="newsfeed.name"
      />
    </div>
    <div class="user-post">
      <div class="up-header">
        <div class="user-name">{{ newsfeed.name }}</div>
        <span class="time">{{ newsfeed.time }}</span>
      </div>
      <div class="up-message">
        <div v-if="newsfeed.message" class="message">
          {{ newsfeed.message }}
        </div>
        <nuxt-link to="/medication/01">
          <div v-if="newsfeed.prescription" class="sent-prescription">
            {{ newsfeed.prescription }}
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
      default() {
        return {
          id: 0,
          image: 'Inosuke_Anime_Profile.png',
          name: 'Unknown',
          time: '12:30 PM',
          prescription: 'Send Medical Prescription',
          message:
            'Cookie jelly cake lemon drops cotton candy lemon drops cake. Sweet roll chocolate pudding. Sweet dessert cheesecake topping cotton candy ice cream chocolate cake gummies.',
        }
      },
    },
  },
  methods: {
    singleFeed() {
      this.$router.push('/chatbox')
    },
  },
}
</script>
<style lang="scss">
@import '~/assets/variables.scss';
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
.time {
  position: absolute;
  right: 0;
  top: 0;
  font-size: 9px;
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
  margin-left: 8px;
  width: 100%;
}
</style>
