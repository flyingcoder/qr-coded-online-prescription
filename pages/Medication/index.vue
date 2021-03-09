<template>
  <v-row justify="space-around">
    <v-col class="text-center">
      <div class="first_div" width="100%">
        <v-row no gutters class="Doctor">
          <v-col cols="2" sm="2">
            <div class="Avatar_letterColor">
              <v-avatar color="primary" size="56"><span>Dr</span></v-avatar>
            </div>
          </v-col>
          <v-col cols="8" sm="8">
            <div class="dr-name">
              <h1>hellow</h1>
            </div>
          </v-col>
          <v-col cols="2" sm="2">
            <div class="Delete_button">
              <v-menu offset-y>
                <v-btn dark icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
                <v-list>
                  <v-list-item v-for="(item, index) in items" :key="index">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </v-col>
          <div class="Time">
            <ul>
              <ol>
                Colchicine 0.6mg 1 tablet 3x a day<br />
                <div class="intake_time"></div>
              </ol>
            </ul>
          </div>
        </v-row>
      </div>
    </v-col>
  </v-row>
</template>
<script src="./medication.js"></script>

<style src="./medication.scss" lang="scss"></style>
