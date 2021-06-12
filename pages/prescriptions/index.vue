<template>
  <div class="search-products">
    <div class="search-product-section d-flex pd-left justify-center">
      <div class="search-product-input">
        <v-text-field
          label="Search"
          placeholder="Search anything..."
          prepend-inner-icon="mdi-magnify"
          outlined
          dense
          class="main-search-input"
        ></v-text-field>
      </div>
      <div class="search-product-cart">
        <v-icon large color="grey"> mdi-cart-outline </v-icon>
      </div>
    </div>
    <v-divider class="border-width-primary"></v-divider>
    <div
      v-for="medicine in allmedicines"
      :key="medicine"
      class="all-product-display"
    >
      <h3 class="pd-left">{{ medicine.generic_name }}</h3>
      <v-sheet class="mx-auto" elevation="8" max-width="800">
        <v-slide-group
          v-for="pharmacy in medicine.users"
          :key="pharmacy.id"
          active-class="card-color-active"
          multiple
        >
          <v-slide-item v-slot="{ active, toggle }">
            <v-card
              :color="active ? undefined : 'white'"
              height="130"
              width="100"
              class="product-card"
              @click="toggle"
            >
              <v-scale-transition>
                <v-icon
                  v-if="active"
                  color="green"
                  size="48"
                  class="check-icon"
                  v-text="'mdi-check'"
                ></v-icon>
              </v-scale-transition>
              <div class="product-content">
                <div class="product-image">
                  <img
                    class="drug-image"
                    :src="
                      $config.baseURL + '/storage/medicines/' + medicine.image
                    "
                  />
                </div>
                <v-divider></v-divider>
                <div class="product-name">
                  {{ pharmacy.generic_name }}
                </div>
                <div class="d-flex product-price_store">
                  <div class="price">₱ {{ medicine.users[0].pivot.price }}</div>
                  <div class="store">{{ medicine.brand }}</div>
                </div>
              </div>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
      <v-divider class="border-width-secondary"></v-divider>
    </div>
    <div
      class="
        medicine-geet-checkout
        d-flex
        justify-center
        padding-top-md padding-bottom-sm
      "
    >
      <nuxt-link to="/wallet">
        <v-btn
          depressed
          color="#1ac6b6"
          width="100%"
          min-width="300px"
          class="btn-radius"
          style="color: white"
        >
          Checkout
        </v-btn>
      </nuxt-link>
    </div>
  </div>
</template>

<script src="./prescriptions.js"></script>

<style src="./prescriptions.scss" lang="scss" scoped></style>
