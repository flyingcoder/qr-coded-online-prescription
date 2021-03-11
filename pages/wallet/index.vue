<template>
  <div id="wallet">
    <v-row justify="center">
      <v-expansion-panels accordion>
        <v-expansion-panel v-for="(item, i) in payment_method" :key="i.id">
          <v-expansion-panel-header>{{ item.title }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </div>
</template>
<script src="./wallet.js"></script>
<style src="./wallet.scss" lang="scss"></style>
