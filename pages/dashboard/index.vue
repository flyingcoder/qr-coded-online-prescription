<template>
  <div id="dashboard">
    <!-- <Preloader /> -->
    <Preloader v-if="loading" />
    <SwiperFeeds
      v-if="newsfeeds.length > 0"
      :mock-swipe-list="newsfeeds"
    ></SwiperFeeds>
    <div v-else>
      <div v-if="$auth.user.role == 'pharmacy'" class="no-customers-order">
        <div class="no-content">The customer's orders will display here.</div>
      </div>
      <div v-else class="find-doctors text-center-pd">
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
    </div>
    <v-btn
      depressed
      color="#1ac6b6"
      width="70%"
      class="btn-radius find-doctors-btn"
      style="color: white"
      @mousedown="active"
      @mouseup="inactive"
    >
      test
    </v-btn>
  </div>
</template>
<script src="./dashboard.js"></script>
<style src="./dashboard.scss" lang="scss"></style>
