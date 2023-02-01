<template>
  <div class="prescription-list">
    <Preloader v-if="loading" />
    <div class="d-flex justify-center pb-8">
      <div class="store-img d-flex align-center">
        <img
          :src="`/_nuxt/assets/images/` + $auth.user.avatar"
          style="width: 60px !important; height: 60px !important"
          class="user-icon mr-5"
          alt=""
        />
      </div>
      <div class="store-info">
        <div class="d-flex" style="font-size: 23px; font-weight: bold">
          {{ $auth.user.fname }}
        </div>
        <div class="d-flex">{{ $auth.user.address }}</div>
      </div>
    </div>
    <v-row class="justify-center">
      <h3 class="wallet-title">Virtual Display</h3>
    </v-row>
    <v-row class="justify-center">
      <div>
        <v-icon slot="prepend" color="#1ac6b6" large @click="itemDisplayIcon">
          mdi-image
        </v-icon>
      </div>
      <div class="px-15">
        <v-icon slot="prepend" color="#1ac6b6" large @click="itemDisplayList">
          mdi-list-box-outline
        </v-icon>
      </div>
      <div>
        <v-icon slot="prepend" color="#1ac6b6" large @click="itemDownload">
          mdi-tray-arrow-up
        </v-icon>
      </div>
    </v-row>
    <v-row>
      <div class="search-pharmacy-input pt-5" style="width: 90%; margin: auto">
        <v-text-field
          v-model="search"
          label="Search"
          placeholder="Search Medicine"
          prepend-inner-icon="mdi-magnify"
          outlined
          style="width: 100%"
          dense
          class="main-search-input"
        ></v-text-field>
      </div>
    </v-row>
    <v-row>
      <div v-if="item_icon" class="pt-8 mb-10" style="width: 90%; margin: auto">
        <v-expansion-panels flat>
          <v-expansion-panel
            v-for="med in medicines"
            :key="med"
            class="rounded-0"
          >
            <v-expansion-panel-header
              style="background: #a6a6a6; color: white !important"
            >
              <div>
                <div
                  v-for="m in med"
                  :key="m"
                  class="virtual-medicine-title test"
                  style="display: none"
                >
                  <span style="color: white">{{
                    m[0].generic_name.charAt(0)
                  }}</span>
                </div>
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div
                v-for="pro in med"
                :key="pro"
                class="header-display-products"
              >
                <div class="medicine-product">
                  <div>
                    <div class="product_generic_name">
                      {{ pro[0].generic_name }}
                    </div>
                    <div
                      class="medicine-product pt-2"
                      style="
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                      "
                    >
                      <v-card
                        v-for="m in pro"
                        :key="m"
                        class="mx-auto mb-3"
                        max-width="110"
                        elevation="5"
                        @click="medicineEdit(pro.id)"
                      >
                        <v-card-text style="padding: 10px !important">
                          <div
                            class="d-flex"
                            style="justify-content: space-between"
                          >
                            <img
                              src="~/assets/images/main-logo.png"
                              width="30px"
                              alt=""
                            />
                            <div>{{ m.pivot.stocks }}</div>
                          </div>
                          <div>{{ m.brand }}</div>
                          <div class="text--primary">
                            <span
                              >{{ m.generic_name }} {{ m.description }}
                              {{ m.dosage }}</span
                            ><br />
                            <span> ₱{{ m.pivot.price }}</span>
                          </div>
                        </v-card-text>
                      </v-card>
                    </div>
                  </div>
                </div>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
      <div v-if="item_list" class="pt-8 mb-10" style="width: 90%; margin: auto">
        <v-expansion-panels flat>
          <v-expansion-panel
            v-for="med in medicines"
            :key="med"
            class="rounded-0"
          >
            <v-expansion-panel-header
              style="background: #a6a6a6; color: white !important"
            >
              <div
                v-for="m in med"
                :key="m"
                class="virtual-medicine-title test"
                style="display: none"
              >
                <span style="color: white">{{
                  m[0].generic_name.charAt(0)
                }}</span>
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div v-for="m in med" :key="m" class="header-display-products">
                <div class="product_generic_name">
                  <b>{{ m[0].generic_name }}</b>
                </div>
                <div class="medicine-product pt-2">
                  <div>
                    <ul class="medicine-product-list">
                      <li v-for="product in m" :key="product">
                        {{ product.brand }} - {{ product.dosage }}/{{
                          product.type
                        }}
                        (₱{{ product.pivot.price }}) *
                        {{ product.pivot.stocks }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
      <div v-if="item_download" class="pt-8" style="width: 90%; margin: auto">
        <div class="header-display">
          <h3 class="text-center">
            <b>Upload</b><br />
            <span>Reseta QRx</span><br />
            <span>Pharmacy Product List</span>
          </h3>
          <div class="d-flex justify-center">
            <v-file-input
              accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              label="File input"
            ></v-file-input>
            <!-- <v-btn color="blue-grey" class="ma-2 white--text">
              Upload
              <v-icon right dark> mdi-cloud-upload </v-icon>
            </v-btn> -->
          </div>
        </div>
      </div>
    </v-row>
  </div>
</template>

<script src="./virtual.js"></script>

<style lang="scss" scoped src="./virtual.scss"></style>
