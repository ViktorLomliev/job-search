<script>
export default {
  name: 'TheSubNav',
  data() {
    return {
      onJobResultsPage: true
    }
  }
}
</script>

<template>
  <div class="h-16 w-full border border-b border-solid border-brand-gray-1 bg-white">
    <div class="flex h-full items-center px-8">
      <div v-if="onJobResultsPage">
        <fontAwesomeIcon :icon="['fas', 'search']" class="mr-3" />
        <span><span class="text-brand-green-1">1653</span> jobs matched</span>
      </div>
    </div>
  </div>
</template>
