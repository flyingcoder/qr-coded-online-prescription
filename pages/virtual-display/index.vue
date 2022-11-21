<template>
  <div class="prescription-list">
    <Preloader v-if="loading" />
    <div class="d-flex justify-center pb-8">
      <div class="store-img d-flex align-center">
        <img
          src="/_nuxt/assets/images/avatar.png"
          style="width: 60px !important; height: 60px !important"
          class="user-icon mr-5"
          alt=""
        />
      </div>
      <div class="store-info">
        <div class="d-flex" style="font-size: 23px; font-weight: bold">
          Mercury Drug
        </div>
        <div class="d-flex">Kidapawan City</div>
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
      <div v-if="item_icon" class="pt-8" style="width: 90%; margin: auto">
        <div class="header-display pa-2" style="background: gray">A</div>
        <div class="header-display-products pt-3">
          <div class="product_generic_name">Aspirin</div>
          <div
            class="medicine-product pt-2"
            style="display: grid; grid-template-columns: repeat(3, 1fr)"
          >
            <v-card class="mx-auto" max-width="120">
              <v-card-text style="padding: 10px !important">
                <div class="d-flex" style="justify-content: space-between">
                  <img
                    src="~/assets/images/main-logo.png"
                    width="30px"
                    alt=""
                  />
                  <div>10</div>
                </div>
                <div>Sophira</div>
                <div class="text--primary">
                  <span class="font-size: 12px"> Aspirine 80mg</span><br />
                  <span> ₱80.00</span>
                </div>
              </v-card-text>
            </v-card>
            <v-card class="mx-auto" max-width="120">
              <v-card-text style="padding: 10px !important">
                <div class="d-flex" style="justify-content: space-between">
                  <img
                    src="~/assets/images/main-logo.png"
                    width="30px"
                    alt=""
                  />
                  <div>10</div>
                </div>
                <div>Sophira</div>
                <div class="text--primary">
                  <span class="font-size: 12px"> Aspirine 80mg</span><br />
                  <span> ₱80.00</span>
                </div>
              </v-card-text>
            </v-card>
            <v-card class="mx-auto" max-width="120">
              <v-card-text style="padding: 10px !important">
                <div class="d-flex" style="justify-content: space-between">
                  <img
                    src="~/assets/images/main-logo.png"
                    width="30px"
                    alt=""
                  />
                  <div>10</div>
                </div>
                <div>Sophira</div>
                <div class="text--primary">
                  <span class="font-size: 12px"> Aspirine 80mg</span><br />
                  <span> ₱80.00</span>
                </div>
              </v-card-text>
            </v-card>
          </div>
        </div>
      </div>
      <div v-if="item_list" class="pt-8" style="width: 90%; margin: auto">
        <div class="header-display pa-2" style="background: gray">A</div>
        <div class="header-display-products pt-3">
          <div class="product_generic_name">Aspirin</div>
          <div
            class="medicine-product pt-2"
            style="display: grid; grid-template-columns: repeat(3, 1fr)"
          >
            <v-list
              :disabled="disabled"
              :dense="dense"
              :two-line="twoLine"
              :three-line="threeLine"
              :shaped="shaped"
              :flat="flat"
              :subheader="subheader"
              :sub-group="subGroup"
              :nav="nav"
              :avatar="avatar"
              :rounded="rounded"
            >
              <v-subheader>REPORTS</v-subheader>
              <v-list-item-group v-model="item" color="primary">
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                  :inactive="inactive"
                >
                  <v-list-item-avatar v-if="avatar">
                    <v-img :src="item.avatar"></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title v-html="item.title"></v-list-item-title>
                    <v-list-item-subtitle
                      v-if="twoLine || threeLine"
                      v-html="item.subtitle"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </div>
        </div>
      </div>
      <div v-if="item_download" class="pt-8" style="width: 90%; margin: auto">
        <div class="header-display">
          <h3 class="text-center">
            <b>Upload</b><br />
            <span>Reseta QRx</span><br />
            <span>Pharmacy Product List</span>
          </h3>
          <div class="d-flex justify-center">
            <v-btn color="blue-grey" class="ma-2 white--text">
              Upload
              <v-icon right dark> mdi-cloud-upload </v-icon>
            </v-btn>
          </div>
        </div>
      </div>
    </v-row>
  </div>
</template>

<script src="./virtual.js"></script>

<style lang="scss" scoped src="./virtual.scss"></style>
