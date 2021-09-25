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
          <v-slide-group v-model="all_medicine" active-class="success">
            <v-slide-item v-for="item in medicines" :key="item">
              <v-card
                class="ma-4"
                height="200"
                width="100"
                @click="editMedicine(item.id)"
              >
                <v-row class="fill-height" align="center" justify="center">
                  <div class="d-flex">
                    <img
                      :src="
                        $config.baseURL + '/storage/medicines/' + item.image
                      "
                      width="120px"
                    />
                  </div>
                  <div class="d-flex">
                    {{ item.generic_name }} ({{ item.brand }}) {{ item.dosage }}
                  </div>
                </v-row>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script src="./medicine.js"></script>
<style src="./medicine.scss" lang="scss"></style>
