<template>
  <v-card>
    <v-card-title class="popup-title">Select Drug Type</v-card-title>

    <v-radio-group column class="Medtype-section">
      <v-container>
        <v-row class="medapply-main-inputs">
          <label class="medapply-input sm-font-size"
            >Aerosol spray or foam
            <input v-model="drug_type" type="radio" value="Aerosol spray" />
            <span class="checkmark"></span>
          </label>
          <label class="medapply-input sm-font-size"
            >Ointment (salve, unction)
            <input v-model="drug_type" type="radio" value="Ointment" />
            <span class="checkmark"></span>
          </label>
          <label class="medapply-input sm-font-size"
            >Aqueous solution
            <input v-model="drug_type" type="radio" value="Aqueous solution" />
            <span class="checkmark"></span>
          </label>
          <label class="medapply-input"
            >Paste
            <input v-model="drug_type" type="radio" value="Paste" />
            <span class="checkmark"></span>
          </label>
          <label class="medapply-input"
            >Aqueous suspension
            <input
              v-model="drug_type"
              type="radio"
              value="Aqueous suspension"
            />
            <span class="checkmark"></span>
          </label>
          <label class="medapply-input"
            >Pill
            <input v-model="drug_type" type="radio" value="Pill" />
            <span class="checkmark"></span>
          </label>
          <label class="medapply-input"
            >Caplet
            <input v-model="drug_type" type="radio" value="Caplet" />
            <span class="checkmark"></span>
          </label>
          <label class="medapply-input"
            >Powder
            <input v-model="drug_type" type="radio" value="Powder" />
            <span class="checkmark"></span>
          </label>
          <label class="medapply-input"
            >Capsule
            <input v-model="drug_type" type="radio" value="Capsule" />
            <span class="checkmark"></span>
          </label>
          <label class="medapply-input"
            >Suppository
            <input v-model="drug_type" type="radio" value="Suppository" />
            <span class="checkmark"></span>
          </label>
          <label class="medapply-input"
            >Cream
            <input v-model="drug_type" type="radio" value="Cream" />
            <span class="checkmark"></span>
          </label>
          <label class="medapply-input"
            >Syrup
            <input v-model="drug_type" type="radio" value="Syrup" />
            <span class="checkmark"></span>
          </label>
          <label class="medapply-input"
            >Elixer
            <input v-model="drug_type" type="radio" value="Elixer" />
            <span class="checkmark"></span>
          </label>
          <label class="medapply-input"
            >Tablet
            <input v-model="drug_type" type="radio" value="Tablet" />
            <span class="checkmark"></span>
          </label>
          <label class="medapply-input"
            >Extract
            <input v-model="drug_type" type="radio" value="Extract" />
            <span class="checkmark"></span>
          </label>
          <label class="medapply-input"
            >Tincture
            <input v-model="drug_type" type="radio" value="Tincture" />
            <span class="checkmark"></span>
          </label>
          <label class="medapply-input"
            >Gel or jelly
            <input v-model="drug_type" type="radio" value="Gel or jelly" />
            <span class="checkmark"></span>
          </label>
          <label class="medapply-input sm-font-size"
            >Transdermal patch
            <input v-model="drug_type" type="radio" value="Transdermal patch" />
            <span class="checkmark"></span>
          </label>
          <label class="medapply-input"
            >Liniment
            <input v-model="drug_type" type="radio" value="Liniment" />
            <span class="checkmark"></span>
          </label>
          <label class="medapply-input"
            >Lotion
            <input v-model="drug_type" type="radio" value="Lotion" />
            <span class="checkmark"></span>
          </label>
          <label class="medapply-input"
            >Lozenge (troche)
            <input v-model="drug_type" type="radio" value="Lozenge (troche)" />
            <span class="checkmark"></span>
          </label>
        </v-row>
      </v-container>
    </v-radio-group>

    <v-card-actions class="apply-close">
      <v-spacer></v-spacer>

      <v-btn color="green darken-1" text @click="pick"> Ok </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Popup',
  data() {
    return {
      drug_type: '',
    }
  },
  mounted() {},
  methods: {
    pick() {
      this.$emit('selected', this.drug_type)
    },
  },
}
</script>

<style lang="scss" scoped>
.medapply-main-inputs {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.sm-font-size {
  font-size: 17px !important;
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
