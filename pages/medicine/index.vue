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
      <v-btn class="mx-2" fab dark small color="#1ac6b6" to="/all-medicines">
        <v-icon dark> mdi-plus </v-icon>
      </v-btn>
    </div>
    <div class="pharmacy-list-view">
      <v-card
        v-for="item in medicines"
        :key="item"
        class="med-card elevation-2"
        @click="editMedicine(item.id)"
      >
        <img
          v-if="item.image == 'default-medicine-image.png'"
          width="120px"
          :src="require(`~/assets/images/colchine1.jpg`)"
        />
        <img
          v-else
          width="120px"
          :src="$config.baseURL + '/storage/medicines/' + item.image"
        />
        <v-card-text>
          <strong>{{ item.generic_name }}</strong> ({{ item.brand }})<br />
          {{ item.dosage }}
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script src="./medicine.js"></script>
<style src="./medicine.scss" lang="scss"></style>
