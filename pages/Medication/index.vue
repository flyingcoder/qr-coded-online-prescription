<template>
  <v-container>
    <v-row justify="space-around">
      <v-card width="400">
        <v-app-bar flat color="rgba(0, 0, 0, 0)">
          <v-avatar color="indigo">
            <v-icon dark> mdi-account-circle </v-icon>
          </v-avatar>
          <v-spacer></v-spacer>
          <v-toolbar-title class="title black--text pl-0">
            DR. NIEL LAQUIHON
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn color="black" icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-app-bar>
        <v-divider></v-divider>
        <div class="Time float-right"><p>12:34 Am</p></div>
        <v-card-text>
          <div class="font-weight-bold ml-8 mb-2">
            1.Colochine 0.6mg 1 tablet 3x a day
          </div>
          <div class="font-weight-bold ml-8 mb-2">2.Today</div>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script src="./medication.js"></script>

<style src="./medication.scss" lang="scss"></style>
