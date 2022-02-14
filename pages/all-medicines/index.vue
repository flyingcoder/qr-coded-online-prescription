<template>
  <div class="main-patients-page">
    <div class="search-patients-input">
      <v-text-field
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
        class="pharmacys-list-title align-self-center"
      >
        All Medicine in the Database
      </div>
      <v-spacer />
      <div v-if="$auth.user.role === 'pharmacy'">
        <v-btn class="mx-2" fab dark small color="#1ac6b6" to="medicine/add">
          <v-icon dark> mdi-plus </v-icon>
        </v-btn>
      </div>
    </div>
    <v-list three-line class="pharmacys-background-color">
      <template v-for="(item, index) in allmedicines">
        <!-- <v-subheader
          v-if="index == 0"
          :key="index + item.created_at"
          :class="{
            'page-item': true,
            patient_pharmacy_title: $auth.user.role == 'patient',
            patient_pharmacy_title: $auth.user.role == 'doctor',
          }"
          class="pharmacys-list-title"
          >All Medicine in the Database</v-subheader
        > -->

        <v-divider :key="index + 'div'"></v-divider>

        <v-list-item :key="index + 'span'" class="pharmacy-list-section">
          <v-list-item-avatar class="drug-avatar">
            <img
              v-if="item.image == 'default-medicine-image.png'"
              class="user-icon"
              :src="require(`~/assets/images/colchine1.jpg`)"
            />
            <img
              v-else
              class="user-icon"
              :src="$config.baseURL + '/storage/images/' + item.image"
            />
          </v-list-item-avatar>

          <v-list-item-content class="medicines-content">
            <div class="d-block">
              <v-list-item-title>
                {{ item.generic_name }} ({{ item.brand }})
                <br />
                <span class="medicine-sub-info">
                  {{ item.dosage }} - {{ item.type }}
                </span>
              </v-list-item-title>
            </div>
            <div class="d-flex">
              <v-btn
                v-if="$auth.user.role === 'pharmacy'"
                class="ma-2 list-contact-pharmacy"
                outlined
                x-small
                fab
                color="#1ac6b6"
                @click="sellMed(item.id)"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
              <v-btn
                v-if="$auth.user.role === 'doctor'"
                class="ma-2 list-contact-pharmacy"
                outlined
                x-small
                fab
                color="#1ac6b6"
                @click="viewProfile(item.id)"
              >
                <v-icon>mdi-eye-outline</v-icon>
              </v-btn>
            </div>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </div>
</template>

<script src="./all-medicines.js"></script>

<style scoped src="./all-medicines.css"></style>
