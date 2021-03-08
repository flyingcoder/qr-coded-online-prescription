<template>
  <div>
    <v-form class="search-form">
      <v-container>
        <v-row class="search-input">
          <v-col cols="2">
            <a href="/dashboard" class="icon-back">
              <v-icon slot="prepend" color="#ffffff"> mdi-arrow-left </v-icon>
            </a>
          </v-col>
          <v-col cols="10">
            <v-text-field
              placeholder="Search"
              class="search-main-input"
              outlined
              dense
              solo
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="search-options">
          <v-col cols="6">
            <p class="text-white">Recent</p>
          </v-col>
          <v-col cols="6">
            <p class="text-end text-right">
              <NuxtLink to="/register" class="text-white">EDIT</NuxtLink>
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <div class="search-result">
      <div class="all-search-result">
        <li v-for="result in results" :key="result">
          <v-row no-gutters class="search-result-row">
            <v-col cols="2">
              <div medium class="user">
                <v-icon class="outlined">
                  {{ result.user }}
                </v-icon>
              </div>
            </v-col>
            <v-col cols="9">{{ result.name }}</v-col>
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
