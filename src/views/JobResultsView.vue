<script>
export default {
  name: 'JobResultsView',
  methods: {
    goToHome() {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<template>
  <h1 class="text-6xl font-bold">Jobs Results Page</h1>
  <button @click="goToHome">Go Home</button>
</template>
