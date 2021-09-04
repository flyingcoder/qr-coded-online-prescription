<template>
  <div class="search-products">
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="text-h5"> Are you sure? </v-card-title>
        <v-card-text>You are ordering from multiple pharmacy.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            Cancel
          </v-btn>
          <v-btn color="green darken-1" text @click="addToCart"> Yes </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <div v-if="allmedicines.length === 0" class="text-center">
      <h3>Sorry for the inconvenience</h3>
      <div class="no-content">
        <br />
        As of the moment no pharmacy registered in Reseta Qrx App selling the
        medicine prescribe by your doctor. <br />
        <br />
        You can either contact the admin or the pharmacy nearest you to sell
        this drug in Reseta Qrx App.
      </div>
    </div>
    <div v-else>
      <div class="search-product-section d-flex pd-left">
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
      <div
        v-for="(medicine, index) in allmedicines"
        :key="index + 'span'"
        class="all-product-display"
      >
        <h3 class="no-margin pd-left">{{ index }}</h3>
        <v-sheet class="mx-auto" max-width="800">
          <v-slide-group
            v-model="drugs"
            active-class="card-color-active"
            multiple
          >
            <v-slide-item
              v-for="(med, i) in medicine"
              :key="i + 'div'"
              v-slot="{ active, toggle }"
              :value="med"
            >
              <v-card
                :color="active ? undefined : 'white'"
                height="auto"
                width="auto"
                shaped
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
                  <div class="d-flex product-price_store">
                    Price: ₱{{ med.price }} <br />
                    Brand: {{ med.brand }} <br />
                    Pharmacy: {{ med.store }}
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
  </div>
</template>

<script src="./product.js"></script>

<style src="./product.scss" lang="scss" scoped></style>
