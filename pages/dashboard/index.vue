<template>
  <div id="dashboard">
    <div id="dashboard">
      <div v-if="no_display">
        <NewsFeed
          v-for="newsfeed in newsfeeds"
          :key="newsfeed.id"
          :newsfeed="newsfeed"
        />
      </div>
      <div v-if="display" class="find-doctors">
        <nuxt-link to="/doctors">
          <v-btn
            depressed
            color="#1ac6b6"
            width="100%"
            class="btn-radius find-doctors-btn"
            style="color: white"
          >
            Find Doctors
          </v-btn>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script src="./dashboard.js"></script>
<style src="./dashboard.scss" lang="scss"></style>
