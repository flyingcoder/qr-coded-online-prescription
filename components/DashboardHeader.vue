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
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </NuxtLink>

    <NuxtLink to="/notification">
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
    </NuxtLink>

    <template #extension style="padding-bottom: 0">
      <div v-if="$nuxt.$route.path == '/pharmacy'" class="menu-icons">
        <NuxtLink to="/pharmacy" class="menu-icon"
          ><v-icon>mdi-pill</v-icon></NuxtLink
        >
        <NuxtLink to="/cart" class="menu-icon"
          ><v-icon>mdi-cart-plus</v-icon></NuxtLink
        >
        <NuxtLink to="/doctor" class="menu-icon"
          ><v-icon>mdi-doctor</v-icon></NuxtLink
        >
        <NuxtLink to="/wallet" class="menu-icon"
          ><v-icon>mdi-wallet</v-icon></NuxtLink
        >
      </div>
      <div v-if="$nuxt.$route.path == '/doctor'" class="menu-icons">
        <NuxtLink to="/dashboard" class="menu-icon"
          ><v-icon>mdi-view-dashboard</v-icon></NuxtLink
        >
        <NuxtLink to="/hospital" class="menu-icon"
          ><v-icon>mdi-hospital-building</v-icon></NuxtLink
        >
        <NuxtLink to="/doctors" class="menu-icon"
          ><v-icon>mdi-doctor</v-icon></NuxtLink
        >
        <NuxtLink to="/pharmacy" class="menu-icon"
          ><v-icon>mdi-pill</v-icon></NuxtLink
        >
        <NuxtLink to="/wallet" class="menu-icon"
          ><v-icon>mdi-wallet</v-icon></NuxtLink
        >
        <NuxtLink to="#" class="menu-icon"><v-icon>mdi-menu</v-icon></NuxtLink>
      </div>
      <div v-if="$nuxt.$route.path == '/patient'" class="menu-icons">
        <NuxtLink to="/dashboard" class="menu-icon"
          ><v-icon>mdi-view-dashboard</v-icon></NuxtLink
        >
        <NuxtLink to="/hospital" class="menu-icon"
          ><v-icon>mdi-hospital-building</v-icon></NuxtLink
        >
        <NuxtLink to="/doctors" class="menu-icon"
          ><v-icon>mdi-doctor</v-icon></NuxtLink
        >
        <NuxtLink to="/pharmacy" class="menu-icon"
          ><v-icon>mdi-pill</v-icon></NuxtLink
        >
        <NuxtLink to="/wallet" class="menu-icon"
          ><v-icon>mdi-wallet</v-icon></NuxtLink
        >
        <NuxtLink to="#" class="menu-icon"><v-icon>mdi-menu</v-icon></NuxtLink>
      </div>
    </template>
  </v-app-bar>
</template>
<style scoped lang="scss">
@import '~/assets/variables.scss';

.reseta-header {
  border-bottom: 1px solid $gray;
  background-color: $white;
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%),
    0 1px 10px 0 rgb(0 0 0 / 12%);
  height: 120px !important;
  padding-top: 20px;
}
.header-top {
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 12px;
}
.user {
  text-align: center;
  padding: 0 !important;
}
.logo-wide {
  max-height: 60px;
  height: auto;
  width: 130px;
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
.menu-icons {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.menu-icon {
  text-decoration: unset;
  width: 100%;
  text-align: center;
  &.nuxt-link-exact-active.nuxt-link-active i {
    color: $secondary-color;
  }
}
</style>
