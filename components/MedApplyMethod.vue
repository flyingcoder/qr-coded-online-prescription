<template>
  <v-card>
    <v-card-title class="popup-title">Select Route</v-card-title>

    <v-radio-group column class="Medapllymethod">
      <v-container>
        <v-row class="medapply-main-inputs">
          <label class="medapply-input"
            >buccal
            <input
              v-model="method"
              type="radio"
              checked="checked"
              value="buccal"
            />
            <span class="checkmark"></span>
          </label>
          <label class="medapply-input"
            >enternal
            <input
              v-model="method"
              type="radio"
              checked="checked"
              value="enternal"
            />
            <span class="checkmark"></span>
          </label>
          <label class="medapply-input"
            >inhalable
            <input
              v-model="method"
              type="radio"
              checked="checked"
              value="inhalable"
            />
            <span class="checkmark"></span>
          </label>
          <label class="medapply-input"
            >infused
            <input
              v-model="method"
              type="radio"
              checked="checked"
              value="infused"
            />
            <span class="checkmark"></span>
          </label>
          <label class="medapply-input"
            >intramuscular
            <input
              v-model="method"
              type="radio"
              checked="checked"
              value="intramuscular"
            />
            <span class="checkmark"></span>
          </label>
          <label class="medapply-input"
            >intrathecal
            <input
              v-model="method"
              type="radio"
              checked="checked"
              value="intrathecal"
            />
            <span class="checkmark"></span>
          </label>
          <label class="medapply-input"
            >intravenous
            <input
              v-model="method"
              type="radio"
              checked="checked"
              value="intravenous"
            />
            <span class="checkmark"></span>
          </label>
          <label class="medapply-input"
            >nasal
            <input
              v-model="method"
              type="radio"
              checked="checked"
              value="nasal"
            />
            <span class="checkmark"></span>
          </label>
          <label class="medapply-input"
            >ophthalmic
            <input
              v-model="method"
              type="radio"
              checked="checked"
              value="ophthalmic"
            />
            <span class="checkmark"></span>
          </label>
          <label class="medapply-input"
            >oral
            <input
              v-model="method"
              type="radio"
              checked="checked"
              value="oral"
            />
            <span class="checkmark"></span>
          </label>
          <label class="medapply-input"
            >otic
            <input
              v-model="method"
              type="radio"
              checked="checked"
              value="otic"
            />
            <span class="checkmark"></span>
          </label>
          <label class="medapply-input"
            >rectal
            <input
              v-model="method"
              type="radio"
              checked="checked"
              value="rectal"
            />
            <span class="checkmark"></span>
          </label>
          <label class="medapply-input"
            >take
            <input
              v-model="method"
              type="radio"
              checked="checked"
              value="take"
            />
            <span class="checkmark"></span>
          </label>
          <label class="medapply-input"
            >subcataneous
            <input
              v-model="method"
              type="radio"
              checked="checked"
              value="subcataneous"
            />
            <span class="checkmark"></span>
          </label>
          <label class="medapply-input"
            >sublingual
            <input
              v-model="method"
              type="radio"
              checked="checked"
              value="sublingual"
            />
            <span class="checkmark"></span>
          </label>
          <label class="medapply-input"
            >topical
            <input
              v-model="method"
              type="radio"
              checked="checked"
              value="topical"
            />
            <span class="checkmark"></span>
          </label>
          <label class="medapply-input"
            >transdermal
            <input
              v-model="method"
              type="radio"
              checked="checked"
              value="transdermal"
            />
            <span class="checkmark"></span>
          </label>
        </v-row>
      </v-container>
    </v-radio-group>

    <v-card-actions class="apply-close">
      <v-spacer></v-spacer>

      <v-btn color="dark" @click="select">Ok </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Popup',
  data() {
    return {
      method: '',
    }
  },
  methods: {
    select() {
      this.$emit('selected', this.method)
    },
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
  padding-top: 100px !important;
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
