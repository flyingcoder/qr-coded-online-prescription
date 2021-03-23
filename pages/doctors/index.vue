<template>
  <div class="main-doctors-page">
    <div class="list-grid-btn text-right">
      <v-icon :class="{ active: grid }" large color="grey" @click="grid = true">
        mdi-format-list-bulleted-square
      </v-icon>
      <v-icon
        :class="{ active: !grid }"
        large
        color="grey"
        @click="grid = false"
      >
        mdi-view-grid
      </v-icon>
    </div>
    <div v-if="!grid" class="doctors-grid-view">
      <v-card
        max-width="450"
        class="mx-auto doctors doctors-background-color"
        :class="{ 'prop-name': !grid }"
      >
        <div class="v-subheader doctors-grid-title">Doctors</div>
        <v-row
          :align="align"
          no-gutters
          style="height: 100%"
          class="doctors-grid"
        >
          <v-col
            v-for="item in doctors"
            :key="item.id"
            class="doctors-grid-main-view"
            cols="6"
          >
            <nuxt-link to="doctor">
              <v-card
                class="pa-2"
                height="150px"
                elevation="1"
                width="95%"
                style="margin: 5px"
              >
                <div class="grid-single-image text-center-pd">
                  <img
                    class="user-icon"
                    :src="require(`~/assets/images/Muzan_Anime_Profile.png`)"
                    alt="Alvin Pacot"
                  />
                </div>
                <v-divider></v-divider>
                <div class="grid-single-name d-flex justify-center">
                  {{ item.title }}
                </div>
                <div class="grid-single-content d-flex justify-center">
                  {{ item.content }}
                </div>
                <div class="grid-single-number d-flex justify-center">
                  {{ item.number }}
                </div>
              </v-card>
            </nuxt-link>
          </v-col>
        </v-row>
      </v-card>
    </div>

    <div v-if="grid" class="doctor-list-view">
      <v-card max-width="450" class="mx-auto doctors">
        <v-list three-line class="doctors-background-color">
          <template v-for="(item, index) in doctors">
            <v-subheader
              v-if="item.header"
              :key="item.header"
              v-text="item.header"
            ></v-subheader>

            <v-divider
              v-else-if="item.divider"
              :key="index"
              :inset="item.inset"
            ></v-divider>

            <v-list-item v-else :key="item.title">
              <v-list-item-avatar>
                <img
                  class="user-icon"
                  :src="require(`~/assets/images/Muzan_Anime_Profile.png`)"
                  alt="Alvin Pacot"
                />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-html="item.title"></v-list-item-title>
                <v-list-item-subtitle>
                  <div class="doctor-content">
                    {{ item.content }}
                  </div>
                  <div class="doctor-number">
                    {{ item.number }}
                  </div>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-card>
    </div>
  </div>
</template>

<script src="./doctors.js"></script>

<style src="./doctors.scss" lang="scss"></style>
