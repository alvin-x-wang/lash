<template>
  <div>
    This is Writes
  </div>
</template>

<script>
export default {
  name: 'writes',
  
  mounted() {
    this.$store.commit('setActiveMenu', 'writes')
  }
  
}
</script>

<style lang="scss" scoped>
  .abc {
    color: red;
  }
</style>