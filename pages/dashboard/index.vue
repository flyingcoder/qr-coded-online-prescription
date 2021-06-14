<template>
  <div id="dashboard">
    <div v-if="newsfeeds.length !== 0">
      <div v-if="false" class="dashboard-main-btns">
        <nuxt-link to="/marketplace">
          <v-btn
            depressed
            color="#1ac6b6"
            width="47%"
            class="btn-radius find-doctors-btn"
            style="color: white"
          >
            MARKETPLACE
          </v-btn>
        </nuxt-link>
        <nuxt-link to="/doctors">
          <v-btn
            id="dashboard-main-btn-right"
            depressed
            color="#1ac6b6"
            width="47%"
            class="btn-radius find-doctors-btn"
            style="color: white"
          >
            CATEGORIES
          </v-btn>
        </nuxt-link>
      </div>
      <NewsFeed
        v-for="newsfeed in newsfeeds"
        :key="newsfeed.id"
        :newsfeed="newsfeed"
      />
    </div>
    <div v-if="newsfeeds.length === 0" class="find-doctors text-center-pd">
      <nuxt-link v-if="$auth.user.role == 'patient'" to="/doctors">
        <v-btn
          depressed
          color="#1ac6b6"
          width="70%"
          class="btn-radius find-doctors-btn"
          style="color: white"
        >
          Find Doctors
        </v-btn>
      </nuxt-link>
      <nuxt-link v-if="$auth.user.role == 'doctor'" to="/patients">
        <v-btn
          depressed
          color="#1ac6b6"
          width="70%"
          class="btn-radius find-doctors-btn"
          style="color: white"
        >
          Find Patient
        </v-btn>
      </nuxt-link>
    </div>
    <div
      v-if="$auth.user.role == 'pharmacy' && newsfeeds.length === 0"
      class="no-customers-order"
    >
      <div class="no-content">The customer's orders will display here.</div>
    </div>
  </div>
</template>
<script src="./dashboard.js"></script>
<style src="./dashboard.scss" lang="scss"></style>
