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

    <div class="header-logo">
      <img class="logo-wide" src="@/assets/images/white-main-logo.png" />
      <div class="reseta-logo-text">ResetaQrx</div>
    </div>
    <div class="other-icons">
      <div class="search-icon">
        <NuxtLink to="/search">
          <v-btn icon small>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </NuxtLink>
      </div>
      <div class="notification-icon">
        <NuxtLink to="/notification">
          <v-btn icon small>
            <v-badge dot overlap color="red">
              <v-icon>mdi-bell</v-icon>
            </v-badge>
          </v-btn>
        </NuxtLink>
      </div>
    </div>

    <template #extension style="padding-bottom: 0">
      <div class="menu-icons">
        <NuxtLink to="/dashboard" class="menu-icon"
          ><v-icon>mdi-message-reply</v-icon></NuxtLink
        >
        <!-- <NuxtLink to="/dispense" class="menu-icon"
          ><v-icon>mdi-hand-heart</v-icon></NuxtLink
        > -->
        <!-- <NuxtLink to="/medicine" class="menu-icon"
          ><v-icon>mdi-hand-heart</v-icon></NuxtLink
        > -->
        <NuxtLink to="/orders" class="menu-icon"
          ><v-icon>mdi-list-box-outline</v-icon></NuxtLink
        >
        <!-- <NuxtLink to="/virtual-display" class="menu-icon"
          ><v-icon>mdi-medical-bag</v-icon></NuxtLink
        > -->
        <NuxtLink
          to="/virtual-display"
          class="menu-icon"
          style="display: flex; justify-content: center"
        >
          <img
            v-if="$route.path != '/virtual-display'"
            src="@/assets/images/output-onlinepngtools.png"
            alt=""
            width="24px"
          />
          <img
            v-else
            src="@/assets/images/virtualpharmacy.png"
            alt=""
            width="24px"
          />
        </NuxtLink>
        <!-- <NuxtLink to="/orders" class="menu-icon"
          ><v-icon>mdi-hand-heart</v-icon></NuxtLink
        > -->
        <!-- <NuxtLink to="/medicine" class="menu-icon"
          ><v-icon>mdi-hospital-box</v-icon></NuxtLink
        > -->
        <NuxtLink to="/all-medicines" class="menu-icon"
          ><v-icon>mdi-cart-plus</v-icon></NuxtLink
        >
        <NuxtLink to="/doctors" class="menu-icon"
          ><v-icon>mdi-contacts</v-icon></NuxtLink
        >
        <!-- <NuxtLink to="/sales-report" class="menu-icon"
          ><v-icon>mdi-chart-line</v-icon></NuxtLink
        > -->
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
<style src="./PharmacyHeader.scss" lang="scss" scoped></style>
