<template>
  <div class="pharmacy-list">
    <div class="search-pharmacy-input">
      <v-text-field
        label="Search"
        placeholder="Search Patient"
        prepend-inner-icon="mdi-magnify"
        outlined
        dense
        class="main-search-input"
      ></v-text-field>
    </div>
    <div v-if="$auth.user.role == 'pharmacy'" class="list-grid-btn text-right">
      <v-btn
        class="mx-2 add-product-btn"
        fab
        dark
        small
        x-small
        color="#1ac6b6"
        to="/all-medicines"
      >
        <v-icon color="white"> mdi-plus </v-icon>
      </v-btn>
    </div>
    <div class="pharmacy-list-view">
      <v-card max-width="450" class="mx-auto pharmacy">
        <div class="pharmacy-list-main-btn">
          <v-row>
            <v-slide-group v-model="all_medicine" active-class="success">
              <v-slide-item v-for="item in medicines" :key="item">
                <v-card
                  class="ma-4"
                  height="200"
                  width="100"
                  @click="editMedicine(id)"
                >
                  <v-row align="center" justify="center">
                    <div class="d-flex">
                      <img
                        width="100%"
                        height="100%"
                        :src="
                          $config.baseURL + '/storage/medicines/' + item.image
                        "
                      />
                    </div>
                    <div class="d-flex" style="font-weight: 600">
                      {{ item.generic_name }}
                    </div>
                    <div style="font-size: 14px">
                      ({{ item.brand }}) {{ item.dosage }}
                    </div>
                  </v-row>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-row>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script src="./medicine.js"></script>
<style src="./medicine.scss" lang="scss"></style>
