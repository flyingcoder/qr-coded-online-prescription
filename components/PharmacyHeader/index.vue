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

    <v-app-bar-title>
      <img class="logo-wide" src="@/assets/images/Qr-code-logo3.png"
    /></v-app-bar-title>

    <v-spacer></v-spacer>

    <NuxtLink to="/search">
      <v-icon>mdi-magnify</v-icon>
    </NuxtLink>

    <NuxtLink to="/notification">
      <v-icon>mdi-bell</v-icon>
    </NuxtLink>

    <template #extension style="padding-bottom: 0">
      <div class="menu-icons">
        <NuxtLink to="/dashboard" class="menu-icon"
          ><v-icon>mdi-home</v-icon></NuxtLink
        >
        <NuxtLink to="/pharmacy" class="menu-icon"
          ><v-icon>mdi-hospital-box</v-icon></NuxtLink
        >
        <NuxtLink to="/cart" class="menu-icon"
          ><v-icon>mdi-cart-plus</v-icon></NuxtLink
        >
        <NuxtLink to="/directory" class="menu-icon"
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
<style src="./PharmacyHeader.scss" lang="scss"></style>
