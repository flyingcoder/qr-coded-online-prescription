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
        to="drugs/add-drugs"
      >
        <v-icon color="white"> mdi-plus </v-icon>
      </v-btn>
    </div>
    <div class="pharmacy-list-view">
      <v-card max-width="450" class="mx-auto pharmacy">
        <div class="pharmacy-list-main-btn">
          <v-list three-line class="pharmacys-background-color">
            <template v-for="(item, index) in pharmacy_medicine">
              <v-subheader
                v-if="index == 0"
                :key="item.id"
                class="pharmacys-list-title"
                >Pharmacy Medicine</v-subheader
              >

              <v-divider :key="index + 'div' + item.id"></v-divider>

              <v-list-item :key="item.fname" class="pharmacy-list-section">
                <v-list-item-avatar>
                  <img :src="item.avatar" :alt="item.fname" />
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>
                    {{ item.name }} &nbsp;&nbsp;{{ item.grams }}
                    <br />
                    <span class="medicine-sub-info">
                      Price: ₱{{ item.price }} &nbsp;&nbsp;Stock:
                      {{ item.stocks }}&nbsp;&nbsp; Brand: {{ item.brand }}
                    </span>
                  </v-list-item-title>
                  <v-btn
                    class="ma-2 list-contact-pharmacy"
                    outlined
                    x-small
                    fab
                    color="indigo"
                    @click="pharmacy(item.id)"
                  >
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  <v-list-item-subtitle>
                    <div class="pharmacy-content">
                      {{ item.address }}
                    </div>
                    <div class="pharmacy-number">
                      {{ item.phone }}
                    </div>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script src="./pharmacy.js"></script>
<style src="./pharmacy.scss" lang="scss"></style>
