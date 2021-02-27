<template>
    <v-app light>
        <v-main class="no-margin">
            <nuxt />
        </v-main>
    </v-app>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    main {
        background: #129792;
        background-image: linear-gradient(90deg, #05bfae, #99f0e7);
        overflow: hidden;
    }
    .no-margin {
        margin: 0 !important;
    }
    .login-main-form {
        position: relative;
        top: 15%;
        background-color: #ffffff;
        height: 70%;
    }
</style>