<template>
  <v-app-bar
    absolute
    color="rgba(26,198,182)"
    dark
    scroll-target="#scrolling-techniques-3"
    class="reseta-header"
    height="50px"
  >
    <template #img="{ props }">
      <v-img v-bind="props"></v-img>
    </template>

    <div class="user">
      <img
        class="user-icon"
        :src="require(`~/assets/images/Muzan_Anime_Profile.png`)"
        alt="Alvin Pacot"
      />
    </div>

    <v-spacer></v-spacer>
    <div class="d-flex" style="width: 100%; padding-left: 13%">
      <v-app-bar-title>
        <img class="logo-wide" src="@/assets/images/white-main-logo.png"
      /></v-app-bar-title>
      <div class="reseta-logo-text">ResetaQrx</div>
    </div>
    <div class="search-icon">
      <NuxtLink to="/search">
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </NuxtLink>
    </div>
    <div class="notification-icon">
      <NuxtLink to="/notification">
        <v-btn icon>
          <v-badge dot overlap color="red">
            <v-icon>mdi-bell</v-icon>
          </v-badge>
        </v-btn>
      </NuxtLink>
    </div>
    <template #extension style="padding-bottom: 0">
      <div class="menu-icons">
        <NuxtLink to="/dashboard" class="menu-icon"
          ><v-icon>mdi-home</v-icon></NuxtLink
        >
        <NuxtLink to="/prescriptions" class="menu-icon"
          ><v-icon>mdi-pill</v-icon></NuxtLink
        >
        <NuxtLink to="/pharmacy" class="menu-icon"
          ><v-icon>mdi-medical-bag</v-icon></NuxtLink
        >

        <!-- <NuxtLink to="/doctors" class="menu-icon"
          ><v-icon>mdi-doctor</v-icon></NuxtLink
        > -->
        <NuxtLink to="/doctors" class="menu-icon"
          ><v-icon>mdi-contacts</v-icon></NuxtLink
        >
        <NuxtLink to="/wallet" class="menu-icon"
          ><v-icon>mdi-wallet</v-icon></NuxtLink
        >
        <NuxtLink to="/settings" class="menu-icon"
          ><v-icon>mdi-menu</v-icon></NuxtLink
        >
      </div>
    </template>
  </v-app-bar>
</template>
<style src="./PatientHeader.scss" lang="scss" scoped></style>
