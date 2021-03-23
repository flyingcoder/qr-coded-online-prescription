<template>
  <div>
    <div>
      <v-card elevation="3" class="padding-bottom-sm">
        <div class="doctor-profile text-center">
          <img
            class="user-icon"
            :src="require(`~/assets/images/Muzan_Anime_Profile.png`)"
            alt="Alvin Pacot"
          />
        </div>
        <div class="doctor-information padding-content text-center-pd">
          <div class="name padding-bottom-sm">
            {{ single_doctor.name }}
          </div>
          <div class="address">
            {{ single_doctor.content }}
          </div>
          <div class="contact">
            {{ single_doctor.number }}
          </div>
        </div>
      </v-card>
      <div class="text-center-pd padding-top-md">
        <v-btn
          depressed
          color="#1ac6b6"
          width="60%"
          class="btn-radius find-doctors-btn"
          style="color: white"
          to="/chatbox"
        >
          Contact
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script src="./doctors.js"></script>

<style src="./doctors.scss" lang="scss" scoped></style>
