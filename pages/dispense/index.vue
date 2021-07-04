<template>
  <div class="pharmacy-list">
    <div class="search-pharmacy-input">
      <v-text-field
        label="Search Orders"
        placeholder="Search Orders"
        prepend-inner-icon="mdi-magnify"
        outlined
        dense
        class="main-search-input"
      ></v-text-field>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'dashboard',
  middleware: 'auth-pharmacy',
}
</script>
