<template>
  <div>
    <v-form class="search-form">
      <v-container>
        <v-row class="search-input">
          <v-col cols="2">
            <v-icon slot="prepend"> mdi-arrow-left </v-icon>
          </v-col>
          <v-col cols="10">
            <v-text-field
              label="Search"
              class="search-main-input"
              solo-inverted
              single-line
              rounded
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row class="search-options">
          <v-col cols="6">
            <p>Recent</p>
          </v-col>
          <v-col cols="6">
            <p class="text-end text-right">
              <NuxtLink to="/register">EDIT</NuxtLink>
            </p>
          </v-col>
        </v-row>
        <v-divider class="search-divider" color="rgb(128 118 118)"></v-divider>
      </v-container>
    </v-form>
    <div class="search-result">
      <div class="all-search-result">
        <li v-for="name in results" :key="name">
          <v-row no-gutters>
            <v-col cols="2">
              <div class="user">
                <svg class="user-icon" viewBox="0 0 448 512">
                  <path
                    fill="currentColor"
                    d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                  ></path>
                </svg>
              </div>
            </v-col>
            <v-col cols="9">{{ name }}</v-col>
            <v-col cols="1">
              <v-btn icon color="grey">
                <v-icon>mdi-close-thick</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </li>
      </div>
    </div>
  </div>
</template>

<script src="./search.js"></script>

<style src="./search.scss" lang="scss"></style>
