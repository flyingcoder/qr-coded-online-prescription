<template>
  <v-dialog v-model="dialog" fullscreen>
    <v-card>
      <v-card-title class="popup-title">Select Drug Type</v-card-title>

      <v-radio-group v-model="type" column class="Medtype-section">
        <v-container>
          <v-row class="medapply-main-inputs">
            <label class="medapply-input"
              >One
              <input type="radio" checked="checked" name="radio" />
              <span class="checkmark"></span>
            </label>
            <label class="medapply-input"
              >One
              <input type="radio" checked="checked" name="radio" />
              <span class="checkmark"></span>
            </label>
            <label class="medapply-input"
              >One
              <input type="radio" checked="checked" name="radio" />
              <span class="checkmark"></span>
            </label>
            <label class="medapply-input"
              >One
              <input type="radio" checked="checked" name="radio" />
              <span class="checkmark"></span>
            </label>
            <label class="medapply-input"
              >One
              <input type="radio" checked="checked" name="radio" />
              <span class="checkmark"></span>
            </label>
            <label class="medapply-input"
              >One
              <input type="radio" checked="checked" name="radio" />
              <span class="checkmark"></span>
            </label>
          </v-row>
        </v-container>
      </v-radio-group>

      <v-card-actions class="apply-close">
        <v-spacer></v-spacer>

        <v-btn color="green darken-1" text @click="dialog = false">
          Close
        </v-btn>

        <v-btn color="green darken-1" text @click="dialog = false"> Ok </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'Popup',
  data() {
    return {
      type: '',
      dialog: true,
    }
  },
}
</script>

<style lang="scss" scoped>
.medapply-main-inputs {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.medapply-input {
  display: block;
  position: relative;
  width: 100%;
  height: 50px;
  background-color: white;
  border-style: inset;
  border-width: 0.5px;
  color: black !important;
  text-align: center;
  padding-top: 5px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.medapply-input input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  color: white !important;
}
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100% !important;
  width: 100% !important;
  color: white !important;
  opacity: 0.6;
}
.medapply-input input:checked ~ .checkmark {
  background-color: #1ac6b6;
  color: white !important;
  transition: 0.7s;
}
.medapply-input input:checked {
  color: white !important;
}
.apply-close {
  position: absolute;
  bottom: 0 !important;
  width: 100%;
  right: 0;
}
.popup-title {
  padding: 5px !important;
  display: flex;
  justify-content: center;
}
.popup-main-btn {
  padding-right: 37px !important;
  padding-left: 37px !important;
  margin-top: 12px !important;
}
.popup-main-component {
  width: 100px;
}
</style>
