<template>
  <div class="prescription-form-page">
    <MedType v-if="med_type" />
    <MedApplyMethod v-if="med_method" />
    <v-form>
      <div class="patient-info d-flex">
        <div class="prescription-form-image">
          <img
            class="user-icon"
            :src="require(`~/assets/images/${patient_info.image}`)"
            alt="Alvin Pacot"
          />
        </div>
        <div class="prescription-form-info">
          <div class="prescription-patient-name">
            {{ $auth.user.fname }} {{ $auth.user.lname }}
          </div>
          <div class="prescription-patient-use">{{ patient_info.use }}</div>
          <div class="prescription-patient-clinic">
            {{ patient_info.clinic }}
          </div>
          <div class="prescription-patient-number">
            {{ patient_info.number }}
          </div>
        </div>
      </div>
      <div class="patient-secondary-info">
        <div class="patient-main-info">
          <div class="top-patient-info">
            <v-text-field
              outlined
              dense
              label="Name"
              prepend-inner-icon="mdi-magnify"
            ></v-text-field>
          </div>
          <div class="center-patient-info d-flex">
            <v-text-field
              label="Age"
              outlined
              type="number"
              dense
              limit
              style="width: 22%; margin-right: 10px"
            ></v-text-field>
            <v-text-field
              label="Sex"
              outlined
              dense
              style="width: 22%; margin-right: 10px"
            ></v-text-field>
            <v-text-field
              label="Telephone Number"
              outlined
              dense
              style="width: 56%"
            ></v-text-field>
          </div>
          <div class="bottom-patient-info">
            <v-text-field label="Address" outlined dense></v-text-field>
          </div>
        </div>
      </div>
      <div class="patient-date-prescription d-flex">
        <div
          class="d-block prescription-date full-width text-right align-self-center"
        >
          <div class="patient-info-date">{{ patient_info.date }}</div>
          <div class="patient-info-time">{{ patient_info.time }}</div>
        </div>
      </div>
      <div class="patient-medicine-prescription">
        <div class="medicine-top d-flex">
          <v-text-field
            outlined
            dense
            label="Generic Name"
            prepend-inner-icon="mdi-magnify"
            style="width: 70%; margin-right: 10px"
          ></v-text-field>
          <v-text-field
            outlined
            dense
            label="Dosage"
            style="width: 30%"
          ></v-text-field>
        </div>
        <div class="medicine-bottom d-flex">
          <v-text-field
            outlined
            dense
            label="Brand Name"
            prepend-inner-icon="mdi-magnify"
            style="width: 70%; margin-right: 10px"
          ></v-text-field>
          <v-btn
            depressed
            height="40px"
            style="width: 30%"
            @click="med_type = !med_type"
          >
            Tablet
          </v-btn>
        </div>
      </div>
      <div class="patient-sig-prescription">
        <div class="patient-sig-title"><h2>Sig</h2></div>
        <div class="patient-sig-buttons d-flex">
          <v-btn
            depressed
            height="40px"
            style="width: 19%"
            @click="med_method = !med_method"
          >
            Take
          </v-btn>
          <v-select
            v-model="amount"
            :items="items"
            dense
            outlined
            append-icon=""
            clear-icon
            style="width: 20%"
          ></v-select>
          <v-btn depressed height="40px" style="width: 19%"> Tablet </v-btn>
          <v-select
            v-model="take"
            :items="items"
            dense
            append-icon=""
            clear-icon
            outlined
            style="width: 20%"
          ></v-select>
          <v-btn depressed height="40px" style="width: 20%"> Times </v-btn>
          <v-btn depressed height="40px" style="width: 20%"> Day </v-btn>
        </div>
        <div class="patient-sig-hours">
          <div class="patient-sig-hours-AM">
            <v-slider
              v-model="minimumAM"
              :tick-labels="hoursLabelAM"
              :max="11"
              step="1"
              label="AM"
              ticks="always"
              tick-size="2"
            ></v-slider>
          </div>
          <div class="patient-sig-hours-PM padding-top-sm">
            <v-slider
              v-model="minimumPM"
              :tick-labels="hoursLabelPM"
              :max="11"
              step="1"
              label="PM"
              ticks="always"
              tick-size="2"
            ></v-slider>
          </div>
        </div>
      </div>
      <div class="patient-day-uses-prescription d-flex">
        <div class="patient-duration d-flex">
          <v-text-field
            v-model="duration"
            type="number"
            min="1"
            max="31"
            dense
            append-icon=""
            class="patient-duration-input"
            clear-icon
            outlined
            style="width: 20%"
          ></v-text-field>
          <div class="duration-day"><h3>DAY</h3></div>
        </div>
        <div class="patient-duration-total d-flex">
          <div class="duration-total margin-right-sm"><h3>TOTAL</h3></div>
          <v-text-field outlined dense class="margin-right-sm"></v-text-field>
          <v-btn depressed height="40px" style="width: 20%"> Tablet </v-btn>
        </div>
      </div>
      <div class="patient-note-prescription">
        <v-textarea
          label="Note"
          auto-grow
          outlined
          rows="3"
          row-height="25"
        ></v-textarea>
      </div>
      <div class="patient-add-prescription padding-bottom-sm">
        <v-btn tile>
          <v-icon left large color="green"> mdi-hospital </v-icon>
          Add
        </v-btn>
      </div>
      <v-divider></v-divider>
      <div class="patient-prescribed-buttons d-flex justify-center">
        <v-btn
          class="patient-prescribed-button-prescribe"
          @click="prescription"
        >
          PRESCRIBED
        </v-btn>
        <v-btn class="patient-prescribed-button-cancel" tile @click="cancel">
          CANCEL
        </v-btn>
      </div>
    </v-form>
  </div>
</template>

<script src="./prescription-form.js"></script>

<style src="./prescription-form.scss" lang="scss"></style>
