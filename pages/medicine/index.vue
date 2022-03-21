<template>
  <div class="pharmacy-list">
    <div class="search-pharmacy-input">
      <v-text-field
        v-model="search"
        label="Search"
        placeholder="Search Medicine"
        prepend-inner-icon="mdi-magnify"
        outlined
        dense
        class="main-search-input"
      ></v-text-field>
    </div>
    <div class="d-flex">
      <div
        :class="{
          'page-item': true,
          patient_pharmacy_title: $auth.user.role === 'patient',
          patient_pharmacy_title: $auth.user.role === 'doctor',
        }"
        class="page-list-title align-self-center"
      >
        Available Medicines
      </div>
      <v-spacer />
      <div
        v-if="$auth.user.role == 'pharmacy'"
        class="list-grid-btn text-right"
      >
        <v-btn class="mx-2" fab dark small color="#1ac6b6" to="/all-medicines">
          <v-icon dark> mdi-plus </v-icon>
        </v-btn>
      </div>
    </div>
    <div v-for="(brand, index) in brands" :key="index">
      <h3 class="brand-title">{{ brand }}</h3>
      <div class="pharmacy-list-view">
        <v-card
          v-for="(item, index2) in grouped[brand]"
          :key="index2"
          class="med-card elevation-2"
          @click="editMedicine(item.id)"
        >
          <img
            v-if="
              item.image == 'default-medicine-image.png' || item.image == ''
            "
            :src="require(`~/assets/images/colchine1.jpg`)"
          />
          <img
            v-else
            :src="$config.baseURL + '/storage/medicines/' + item.image"
          />
          <v-card-text>
            <strong>{{ item.generic_name }}</strong> ({{ item.brand }})<br />
            {{ item.dosage }}
          </v-card-text>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script src="./medicine.js"></script>
<style src="./medicine.scss" lang="scss"></style>
