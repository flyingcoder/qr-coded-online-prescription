<template>
  <div class="search-form">
    <Preloader v-if="loading" />
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
            Recent Search
          </h2>
          <h2
            v-show="isActive"
            class="text-center-pd text-white search-main-title"
            style="width: 100% !important"
          >
            Search Result
          </h2>
        </v-col>
      </v-row>

      <v-row class="search-fields">
        <v-col>
          <v-text-field
            v-model="search_query"
            class="glocal-search-main-input search_focus"
            :class="{ search_positioning: search_query }"
            placeholder="Search"
            background-color="#eeeeee"
            color="#737373"
            autocomplete="off"
            outlined
            dense
            rounded
          ></v-text-field>
        </v-col>

        <v-col v-if="isActive" cols="3" class="cancel-search-section">
          <v-icon @click="clearSearch">mdi-close</v-icon>
        </v-col>
      </v-row>

      <v-row v-if="!isActive" class="search-options">
        <v-col cols="6">
          <p class="secondary-color">Recent</p>
        </v-col>
        <v-col cols="6">
          <p class="text-end text-right">
            <a class="secondary-color" @click="allowDelete = !allowDelete">{{
              allowDelete ? 'DONE' : 'EDIT'
            }}</a>
          </p>
        </v-col>
      </v-row>

      <v-row v-if="false" class="search-options">
        <v-col cols="12" @click="hint">
          <p class="secondary-color">Do you mean "{{ suggest }}"?</p>
        </v-col>
      </v-row>

      <v-row
        class="search-result justify-center"
        :class="{ recent_result: !isActive }"
      >
        <v-list style="width: 100%; padding-top: 0 !important">
          <v-list-item-group
            v-model="item"
            :class="{ search_height: isActive }"
          >
            <div v-if="isActive">
              <v-list-item
                v-for="category in categories"
                :key="category + 'tag'"
                @click="searchFor(category)"
              >
                <v-list-item-avatar style="border: 1px solid">
                  <!-- <v-icon v-text="result.image"></v-icon> -->
                  <v-icon>mdi-magnify</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>
                    Search {{ category | capitalize }} for "{{ search_query }}"
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </div>

            <v-list-item
              v-for="(result, index) in items"
              :key="index + 'y'"
              :class="{ results_list: !isActive }"
              style="height: 42px"
              :value="result"
            >
              <v-list-item-avatar style="border: 1px solid">
                <!-- <v-icon v-text="result.image"></v-icon> -->
                <v-img v-if="result.image" :src="result.image"></v-img>
                <v-icon v-else>mdi-magnify</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  <span v-if="result.type === ''">Search System for "</span>
                  {{ result.name }}
                  <span v-if="result.type === ''">"</span>
                </v-list-item-title>
                <v-list-item-subtitle
                  v-text="result.sub"
                ></v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action
                v-if="!isActive"
                class="justify-center"
                style="padding-right: 5px"
              >
                <v-icon
                  v-show="allowDelete"
                  color="#1ac6b6"
                  @click="deleteQuery(item.id)"
                  >mdi-close</v-icon
                >
              </v-list-item-action>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-row>
    </v-container>
  </div>
</template>

<script src="./search.js"></script>
<style scoped>
>>> .v-menu__content {
  max-width: 100% !important;
  max-height: 100% !important;
  width: 100% !important;
  min-width: 100% !important;
  left: 0 !important;
  height: 100% !important;
  box-shadow: none !important;
  top: 105px !important;
}
</style>
<style src="./search.scss" lang="scss" scoped></style>
