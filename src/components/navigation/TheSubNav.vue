<script>
import { mapState } from 'pinia'

import { useJobsStore, FILTER_JOBS_BY_ORGANIZATIONS } from '@/stores/jobs'

export default {
  name: 'TheSubNav',
  computed: {
    ...mapState(useJobsStore, [FILTER_JOBS_BY_ORGANIZATIONS]),
    onJobResultsPage() {
      return this.$route.name === 'JobResults'
    }
  }
}
</script>

<template>
  <div class="h-16 w-full border border-b border-solid border-brand-gray-1 bg-white">
    <div class="flex h-full items-center px-8">
      <div v-if="onJobResultsPage">
        <fontAwesomeIcon :icon="['fas', 'search']" class="mr-3" />
        <span
          ><span class="text-brand-green-1">{{ FILTER_JOBS_BY_ORGANIZATIONS.length }}</span> jobs
          matched</span
        >
      </div>
    </div>
  </div>
</template>
