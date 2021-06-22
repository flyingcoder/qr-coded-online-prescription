<template>
  <div class="newsfeed" @click="singleFeed(newsfeed.user_id)"></div>
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
