<template>
  <div>this is the register</div>
</template>

<script>
export default {
  auth: false,
  mounted() {
    console.log(this.$route.params.register)
  }
}
</script>