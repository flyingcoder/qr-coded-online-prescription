<template>
  <v-app-bar
    absolute
    color="rgba(26,198,182)"
    dark
    scroll-target="#scrolling-techniques-3"
    class="reseta-header"
    height="100px"
  >
    <template #img="{ props }">
      <v-img v-bind="props"></v-img>
    </template>

    <div class="user">
      <svg class="user-icon" viewBox="0 0 448 512">
        <path
          fill="currentColor"
          d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
        ></path>
      </svg>
    </div>

    <v-spacer></v-spacer>

    <v-app-bar-title>
      <img
        class="logo-wide"
        src="@/assets/images/Qr-code-logo3.png"
        alt="Reseta QRx"
    /></v-app-bar-title>

    <v-spacer></v-spacer>

    <NuxtLink to="/search">
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </NuxtLink>

    <NuxtLink to="/notification">
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
    </NuxtLink>

    <template #extension>
      <v-tabs class="menu-icons" fixed-tabs>
        <v-tab><v-icon class="menu-icon">mdi-view-dashboard</v-icon></v-tab>
        <v-tab><v-icon class="menu-icon">mdi-hospital-building</v-icon></v-tab>
        <v-tab><v-icon class="menu-icon">mdi-doctor</v-icon></v-tab>
        <v-tab><v-icon class="menu-icon">mdi-pill</v-icon></v-tab>
        <v-tab><v-icon class="menu-icon">mdi-wallet</v-icon></v-tab>
        <v-tab><v-icon class="menu-icon">mdi-menu</v-icon></v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>
<style scoped>
.reseta-header {
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%),
    0 1px 10px 0 rgb(0 0 0 / 12%);
}
.user-icon {
  width: 30px;
  height: 30px;
  padding: 4px;
  border: 2px solid;
  border-radius: 50%;
}
.header-top {
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 12px;
}
.user {
  text-align: center;
  padding: 0 40px 0px 15px;
}
.logo-wide {
  max-height: 60px;
  height: auto;
  margin: 0 auto;
}
.sn-icons {
  display: flex;
  justify-content: center;
}
.sn-icons img {
  width: 30px;
  height: 30px;
  border: 1px solid;
  border-radius: 50%;
  margin-left: 4px;
  padding: 4px;
}
</style>
