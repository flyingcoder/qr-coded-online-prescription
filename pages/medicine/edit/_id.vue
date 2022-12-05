<template>
  <div>
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
    <div class="d-flex">
      <v-icon left @click="exit"> mdi-arrow-left </v-icon>
    </div>
    <div class="d-block justify-center">
      <div class="edit-title d-flex align-center justify-center pb-4">
        <v-icon large color="green darken-2">mdi-medication</v-icon>
        <div><strong> DRUG DETAILS</strong></div>
      </div>
      <div class="d-flex">
        <v-file-input
          label="Medicine Image"
          accept="image/*"
          prepend-icon=""
          append-icon="mdi-paperclip"
          outlined
          dense
        ></v-file-input>
      </div>
      <div class="d-flex">
        <v-text-field label="Generic Name" outlined dense></v-text-field>
      </div>
      <div class="d-flex">
        <v-text-field label="Brand Name" outlined dense></v-text-field>
      </div>
      <div class="d-flex">
        <v-text-field label="Concentration" outlined dense></v-text-field>
      </div>
      <div class="d-flex">
        <v-text-field label="Preperation" outlined dense></v-text-field>
      </div>
      <div class="d-flex">
        <div class="pr-2">
          <v-text-field label="Stock" outlined dense></v-text-field>
        </div>
        <div class="pl-2">
          <v-text-field
            label="Price"
            type="number"
            outlined
            dense
          ></v-text-field>
        </div>
      </div>
      <div class="d-flex justify-center">
        <v-btn depressed color="primary" type="number" min-width="100px">
          Save
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  middleware: 'auth-pharmacy',
  methods: {
    exit() {
      this.$router.push('/virtual-display')
    },
  },
}
</script>

<style lang="scss" scoped></style>
