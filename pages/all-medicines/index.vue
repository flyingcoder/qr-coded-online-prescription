<template>
  <div class="flow-dashboard main-patients-page">
    <Preloader v-if="loading" />
    <div class="search-patients-input">
      <v-text-field
        v-model="search"
        label="Search"
        placeholder="Search Medicine"
        prepend-inner-icon="mdi-magnify"
        outlined
        dense
        class="main-search-input"
        @keyup="filterMedicine"
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
        List of Medicine
      </div>
      <v-spacer />
      <div v-if="$auth.user.role === 'pharmacy'">
        <v-btn class="mx-2" fab dark small color="#1ac6b6" to="medicine/add">
          <v-icon dark> mdi-plus </v-icon>
        </v-btn>
      </div>
    </div>
    <v-list three-line class="pharmacys-background-color">
      <template v-for="(item, index) in filtered">
        <v-divider :key="index + 'div'"></v-divider>

        <v-list-item :key="index + 'span'" class="pharmacy-list-section">
          <v-list-item-avatar class="table-avatar">
            <img
              v-if="
                item.image == 'default-medicine-image.png' || item.image == ''
              "
              class="user-icon"
              :src="require(`~/assets/images/colchine1.jpg`)"
            />
            <img
              v-else
              class="user-icon"
              :src="$config.baseURL + '/storage/images/' + item.image"
            />
          </v-list-item-avatar>

          <div class="medicines-content">
            <div class="medicine-details" @click="viewProfile(item.id)">
              <strong>{{ item.generic_name }} ({{ item.brand }})</strong>
              <br />
              <span class="medicine-sub-info">
                {{ item.dosage }} - {{ item.type }}
              </span>
            </div>
            <div class="table-options">
              <v-icon
                v-if="$auth.user.role === 'pharmacy'"
                class="ma-2"
                large
                fab
                color="#1ac6b6"
                @click="sellMed(item.id)"
                >mdi-plus</v-icon
              >
              <v-btn
                v-if="$auth.user.role === 'doctor'"
                class="ma-2"
                outlined
                x-small
                fab
                color="#1ac6b6"
                @click="viewProfile(item.id)"
              >
                <v-icon>mdi-eye-outline</v-icon>
              </v-btn>
            </div>
          </div>
        </v-list-item>
      </template>
    </v-list>
  </div>
</template>

<script src="./all-medicines.js"></script>

<style scoped src="./all-medicines.css"></style>
