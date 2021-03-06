<template>
  <div>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-icon slot="prepend"> mdi-arrow-left </v-icon>
          </v-col>
          <v-col cols="10">
            <v-text-field
              label="Search"
              class="search-main-input"
              solo
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
    <div class="search-result"></div>
  </div>
</template>

<script src="./search.js"></script>

<style src="./search.scss" lang="scss"></style>
