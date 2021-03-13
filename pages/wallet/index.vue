<template>
  <div id="wallet">
    <v-row class="justify-center">
      <div class="wallet-title">
        <span class="wallet-title-e">e</span> - WALLET
      </div>
    </v-row>
    <v-row>
      <div class="wallet-title align-baseline d-flex full-width">
        <div class="wallet-title-main-amout-title">
          <span class="wallet-title-e">e</span> - WALLET
        </div>
        <div class="wallet-title-amount">Amount ₱{{ amount }}</div>
      </div>
    </v-row>
    <div class="wallet-payment-method">
      <v-row class="d-block">
        <v-divider></v-divider>
        <h4 class="padding-content">SELECT PAYMENT METHOD</h4>
        <v-divider></v-divider>
        <h5 class="padding-content">Recommended methods</h5>
      </v-row>
      <v-row justify="center">
        <v-expansion-panels accordion>
          <v-expansion-panel v-for="(item, i) in payment_method" :key="i.id">
            <v-expansion-panel-header
              ><v-icon class="wallet-dropdown-icon">{{ item.icon }}</v-icon>
              <div class="wallet-accordion-title">
                {{ item.title }}
              </div></v-expansion-panel-header
            >
            <v-expansion-panel-content>
              <div class="wallet-main-icon">
                <v-icon large>{{ item.icon_inner }}</v-icon>
              </div>
              <div class="wallet-content full-width">
                <div
                  class="wallet-main-content full-width"
                  v-html="item.content"
                ></div>

                <div v-if="item.cancel" class="d-flex justify-center">
                  <v-btn elevation="2" text tile class="margin-right-sm">{{
                    item.yes
                  }}</v-btn>
                  <v-btn elevation="2" text tile>{{ item.cancel }}</v-btn>
                </div>
                <div
                  v-if="item.confirm"
                  class="wallet-confirm-selection text-center-pd"
                >
                  <v-btn elevation="2" text tile>{{ item.confirm }}</v-btn>
                </div>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </div>
  </div>
</template>
<script src="./wallet.js"></script>
<style src="./wallet.scss" lang="scss"></style>
