<template>
  <div class="prescription-form-page">
    <Preloader v-if="loading" />
    <v-dialog v-model="popup_prescription" fullscreen scrollable>
      <PrescriptionForm
        :selected-patient="patientSelected"
        @closed="closePrescription"
      />
    </v-dialog>

    <div class="patient-info d-flex">
      <div class="prescription-form-image">
        <img
          v-if="
            $auth.user.avatar == 'avatar.png' ||
            $auth.user.avatar ==
              'https://api.resetaqrx.com/storage/users/user-default.png'
          "
          class="user-icon"
          :src="require(`~/assets/images/avatar.png`)"
          :alt="$auth.user.fname"
        />
        <img
          v-else
          class="user-icon"
          :src="$auth.user.avatar"
          :alt="$auth.user.fname"
        />
      </div>
      <div class="prescription-form-info">
        <div class="prescription-doctor-name">
          {{ $auth.user.fname }} {{ $auth.user.lname }}
        </div>
        <div class="prescription-doctor-use">{{ $auth.user.experties }}</div>
        <div class="prescription-doctor-number">
          {{ $auth.user.license_number }}
        </div>
      </div>
      <!-- <div class="medicine-badge">
        <v-badge v-if="medCounter > 0" color="#223A6B" :content="medCounter">
          <v-btn
            class="mx-2"
            fab
            dark
            small
            color="#1db3a6"
            @click="popup_prescribed = !popup_prescribed"
          >
            <v-icon dark> mdi-prescription </v-icon>
          </v-btn>
        </v-badge>
      </div> -->
    </div>

    <form class="patient-secondary-info">
      <div class="patient-main-info">
        <label :for="patient_info" class="prescription-medicine-label"
          >Patient Information</label
        >
        <v-autocomplete
          v-model="patient_info"
          item-text="fullname"
          :items="patients"
          outlined
          return-object
          dense
          solo
          prepend-inner-icon="mdi-magnify"
          placeholder="Search Any Patient"
          @change="patientSelected"
        >
          <!-- :disabled="$route.params.id ? '' : disabled" -->
        </v-autocomplete>
      </div>
      <div class="pay-amount">
        <div class="form-label">Pay the amount:</div>
        <v-text-field
          v-model="payment"
          outlined
          prefix="₱"
          dense
          type="number"
        ></v-text-field>
      </div>
      <div class="buttons text-center">
        <v-btn class="dark" @click="payClinic">
          <span class="color-white"> CLINIC </span>
        </v-btn>

        <v-btn class="dark" @click="payGcash">
          <span class="color-white"> GCASH </span>
        </v-btn>
      </div>
    </form>
  </div>
</template>

<script src="./prescription-form.js"></script>

<style src="./prescription-form.scss" lang="scss"></style>
