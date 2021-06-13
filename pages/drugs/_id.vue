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
    <!-- v-divider class="border-width-primary"></!-->
    <div
      v-for="(medicine, index) in allmedicines"
      :key="index + 'span'"
      class="all-product-display"
    >
      <h3 class="pd-left">{{ index }}</h3>
      <v-sheet class="mx-auto" elevation="8" max-width="800">
        <v-slide-group
          v-for="(med, i) in medicine"
          :key="i + 'div'"
          v-model="drugs"
          active-class="card-color-active"
          multiple
        >
          <v-slide-item v-slot="{ active, toggle }" :value="med">
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
                    :src="$config.baseURL + '/storage/medicines/' + med.image"
                  />
                </div>
                <v-divider></v-divider>
                <div class="product-name">Brand: {{ med.brand }}</div>
                <div class="d-flex product-price_store">
                  <div class="store">{{ med.store }}</div>
                  <div class="price">₱ {{ med.price }}</div>
                </div>
              </div>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
      <!-- v-divider class="border-width-secondary"></!-->
    </div>
    <div
      class="
        medicine-geet-checkout
        d-flex
        justify-center
        padding-top-md padding-bottom-sm
      "
    >
      <v-btn
        depressed
        color="#1ac6b6"
        width="100%"
        min-width="300px"
        class="btn-radius"
        style="color: white"
        @click="checkout"
      >
        Checkout
      </v-btn>
    </div>
  </div>
</template>

<script src="./product.js"></script>

<style src="./product.scss" lang="scss" scoped></style>
