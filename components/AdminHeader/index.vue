<template>
  <v-app-bar
    absolute
    color="rgba(26,198,182)"
    dark
    scroll-target="#scrolling-techniques-3"
    class="reseta-header"
    height="50px"
  >
    <div class="user">
      <img class="user-icon" :src="require(`~/assets/images/avatar.png`)" />
    </div>
    <div class="header-logo">
      <div class="reseta-logo-text">Admin User Only</div>
    </div>
    <div class="other-icons"></div>
    <template #extension style="padding-bottom: 0">
      <div class="menu-icons">
        <NuxtLink to="/dashboard" class="menu-icon"
          ><v-icon>mdi-chess-king</v-icon></NuxtLink
        >
        <NuxtLink to="/prescriptions" class="menu-icon"
          ><v-icon>mdi-hospital-building</v-icon></NuxtLink
        >
        <NuxtLink to="/pharmacy" class="menu-icon"
          ><v-icon>mdi-medical-bag</v-icon></NuxtLink
        >
      </div>
    </template>
  </v-app-bar>
</template>
<style src="./AdminHeader.scss" lang="scss" scoped></style>
