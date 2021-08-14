<template>
  <div>
    <v-form class="search-form">
      <v-container>
        <v-row class="search-input">
          <a class="icon-back" @click="back">
            <v-icon slot="prepend" color="#ffffff"> mdi-arrow-left </v-icon>
          </a>
          <v-col>
            <h2
              v-show="!isActive"
              class="text-center-pd text-white search-main-title"
              style="width: 100% !important"
            >
              Search
            </h2>
            <h2
              v-show="isActive"
              class="text-center-pd text-white search-main-title"
              style="width: 100% !important"
            >
              Result
            </h2>
          </v-col>
        </v-row>
        <v-row class="search-fields">
          <v-col>
            <v-text-field
              v-model="search_query"
              class="glocal-search-main-input"
              placeholder="Search"
              background-color="#eeeeee"
              :class="{ searchFocus: isActive }"
              color="#737373"
              outlined
              dense
              rounded
              @focus="focus"
              @blur="out"
            ></v-text-field>
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
        <v-row v-show="!isActive && hasHeader" class="search-options">
          <v-col cols="6">
            <p class="secondary-color">Recent</p>
          </v-col>
          <v-col cols="6">
            <p class="text-end text-right">
              <NuxtLink to="/register" class="secondary-color">EDIT</NuxtLink>
            </p>
          </v-col>
        </v-row>
        <v-row
          class="search-result justify-center"
          :class="{ recent_result: !isActive }"
        >
          <v-list style="width: 100%; padding-top: 0 !important">
            <v-list-item-group v-model="item">
              <v-list-item
                v-for="result in items"
                :key="result + 'y'"
                :class="{ results_list: !isActive }"
                style="height: 42px"
                @click="searchLink"
              >
                <v-list-item-avatar style="border: 1px solid">
                  <v-icon v-text="result.image"></v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title v-text="result.name"></v-list-item-title>
                  <v-list-item-subtitle
                    v-text="result.sub"
                  ></v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action
                  v-if="!isActive"
                  class="justify-center"
                  style="padding-right: 5px"
                >
                  <v-icon color="#1ac6b6">mdi-close</v-icon>
                </v-list-item-action>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script src="./search.js"></script>

<style src="./search.scss" lang="scss"></style>
