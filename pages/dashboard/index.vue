<template>
  <div id="dashboard">
    <NewsFeed
      v-for="newsfeed in newsfeeds"
      :key="newsfeed.id"
      :newsfeed="newsfeed"
    />
  </div>
</template>
<script src="./dashboard.js"></script>
<style src="./dashboard.scss" lang="scss"></style>
