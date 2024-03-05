<script>
export default {
  name: 'JobView',
  computed: {
    currentJobId() {
      return this.$route.params.id
    }
  }
}
</script>

<template>
  <div>JobPage for {{ currentJobId }}</div>
</template>
