<template>
  <div class="prescription-form-page">
    <PrescriptionForm v-if="render" @reloadComponent="forceRerender" />
  </div>
</template>

<script src="./prescription-form.js"></script>

<style src="./prescription-form.scss" lang="scss"></style>
