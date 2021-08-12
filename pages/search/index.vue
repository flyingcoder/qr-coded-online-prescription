<template>
  <div>
    <v-form class="search-form">
      <v-container>
        <v-row class="search-input">
          <v-col cols="10">
            <a class="icon-back" @click="back">
              <v-icon slot="prepend" color="#ffffff"> mdi-arrow-left </v-icon>
            </a>
            <h2
              v-show="!isActive"
              class="text-center-pd text-white search-main-title"
            >
              Search
            </h2>
            <h2
              v-show="isActive"
              class="text-center-pd text-white search-main-title"
            >
              Result
            </h2>
          </v-col>
        </v-row>
        <v-row class="search-fields">
          <v-col cols="9">
            <v-autocomplete
              v-model="global_search"
              :class="{ searchFocus: isActive }"
              :items="items"
              dense
              outlined
              append-icon=""
              rounded
              background-color="#eeeeee"
              color="#737373"
              filled
              placeholder="Search"
              @input="focus"
            ></v-autocomplete>
          </v-col>
          <v-col cols="3" class="cancel-search-section">
            <a v-show="!isActive" class="cancel-search" @click="clearSearch"
              >Cancel</a
            >
            <v-icon
              v-show="isActive"
              :class="{ cancelActive: isActive }"
              @click="clearSearch"
              >mdi-close</v-icon
            >
          </v-col>
        </v-row>
        <v-row v-show="isActive" class="search-result justify-center">
          <v-list style="width: 100%; padding-top: 0 !important">
            <v-list-item-group v-model="all_search_result">
              <v-list-item
                v-for="result in results"
                :key="result"
                @click="searchLink"
              >
                <v-list-item-avatar>
                  <v-icon v-text="result.user"></v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title v-text="result.name"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-row>

        <v-row v-show="!isActive" class="search-options">
          <v-col cols="6">
            <p class="secondary-color">Recent</p>
          </v-col>
          <v-col cols="6">
            <p class="text-end text-right">
              <NuxtLink to="/register" class="secondary-color">EDIT</NuxtLink>
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <div v-show="!isActive" class="recent-result">
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
