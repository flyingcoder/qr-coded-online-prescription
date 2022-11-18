<template>
  <div class="pharmacy-main-list">
    <Preloader v-if="loading" />
    <div class="search-pharmacy-input">
      <v-text-field
        v-model="search"
        label="Search Pharmacy"
        prepend-inner-icon="mdi-magnify"
        outlined
        dense
        class="main-search-input"
      ></v-text-field>
    </div>
    <div class="virtual-head d-flex">
      <div class="user-profile text-center mb-4 pr-3">
        <img
          style="
            border-radius: 100%;
            width: 60px;
            border: 2px solid #1ac6b6;
            margin-top: 10px;
          "
          :src="profile.avatar"
          :alt="profile.fname"
        />
      </div>
      <div class="d-block align-self-center">
        <div class="phar-name">{{ profile.fullname }}</div>
        <div class="phar-address">{{ profile.address }}</div>
      </div>
    </div>
    <div class="pharmacy-list-view">
      <div class="pharmacy"></div>
    </div>
  </div>
</template>
<style scoped>
.phar-name {
  font-weight: 500;
  font-size: 18px;
}
</style>
<script>
export default {
  layout: 'dashboard',
  middleware: 'auth',
  data() {
    return {
      profile: {},
      loading: false,
    }
  },
  mounted() {
    this.getUser()
  },
  methods: {
    back() {
      this.$router.back()
    },
    async getUser() {
      this.loading = true
      await this.$axios.get('user/' + this.$route.params.id).then((data) => {
        this.profile = data.data
        this.loading = false
      })
    },
  },
}
</script>
