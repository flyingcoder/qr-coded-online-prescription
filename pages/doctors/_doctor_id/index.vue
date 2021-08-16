<template>
  <div>
    <div>
      <v-card elevation="3" class="padding-bottom-sm">
        <div class="doctor-profile text-center">
          <img class="user-icon" :src="profile.avatar" :alt="profile.fname" />
        </div>
        <div class="doctor-information padding-content text-center-pd">
          <div class="name padding-bottom-sm">Dr. {{ profile.fullname }}</div>
          <div id="word-related" class="margin-top-pull padding-bottom-sm">
            <b>{{ profile.experties }}</b>
          </div>
          <div class="address">
            {{ profile.address }}
          </div>
          <div class="contact">
            {{ profile.phone }}
          </div>
          <div class="content">
            {{ profile.bio }}
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
          @click="$router.push('/chatbox/' + profile.id)"
        >
          Contact
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script src="./doctors.js"></script>

<style src="../doctors.scss" lang="scss" scoped></style>
