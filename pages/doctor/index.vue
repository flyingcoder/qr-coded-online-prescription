<template>
  <div id="dashboard">
    <NewsFeed
      v-for="newsfeed in newsfeeds"
      :key="newsfeed.id"
      :newsfeed="newsfeed"
    />
  </div>
</template>

<script src="./doctor.js"></script>

<style src="./doctor.scss" lang="scss" scoped></style>
