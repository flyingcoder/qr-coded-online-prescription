<template>
    <div>
        <v-form>
            <v-container>
                <v-row>
                    <v-col
                    cols="2"
                    >
                    <v-icon
                    slot="prepend"
                    >
                        mdi-arrow-left
                    </v-icon>
                    </v-col>
                    <v-col
                    cols="10"
                    >
                        <v-text-field
                        label="Search"
                        class="search-main-input"
                        solo
                        single-line
                        rounded
                        >
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row class="search-options">
                    <v-col
                    cols="6"
                    >
                    <p>Recent</p>
                    </v-col>
                    <v-col
                    cols="6"
                    >
                    <p class="text-end text-right"><NuxtLink to="/register">EDIT</NuxtLink></p>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </div>
</template>

<script>
    export default {
        auth: false,
        layout: 'index'
    }
</script>

<style lang="scss" scoped>
.search-main-input {
    position: relative;
    top: -10px;
}
.v-input__slot {
    background: transparent !important;
    border: 2px solid grey !important;
    border-radius: 25px !important;
}
.search-options {
    position: relative;
    top: -50px;
}
</style>