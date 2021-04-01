<template>
  <v-app light>
    <v-main class="no-margin">
      <v-form class="main-form">
        <div class="form-card">
          <nuxt />
        </div>
      </v-form>
    </v-main>
  </v-app>
</template>
<script>
export default {
  auth: false,
  middleware: 'auth-guard',
}
</script>
<style lang="scss" scoped>
main {
  background: #129792;
  background-image: linear-gradient(90deg, #05bfae, #99f0e7);
  overflow: hidden;
}
.no-margin {
  margin: 0 !important;
}
.main-form {
  background-color: #ffffff;
  margin-top: 90px;
  min-height: 70%;
}
.form-card {
  background: #ffffff;
  margin: 10px 20px;
  padding: 20px;
  position: fixed;
  top: 50px;
  width: -webkit-fill-available;
  border-radius: 28px 2px;
  box-shadow: 1px 1px 5px #8f8f8f;
}
</style>
