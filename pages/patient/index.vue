<template>
  <div id="dashboard">
    <NewsFeed
      v-for="newsfeed in newsfeeds"
      :key="newsfeed.id"
      :newsfeed="newsfeed"
    />
  </div>
</template>

<script src="./patient.js"></script>

<style src="./patient.scss" lang="scss"></style>
