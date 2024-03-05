<script>
import JobFiltersSidebar from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebar.vue'
import JobListings from '@/components/JobResults/JobListings.vue'
export default {
  name: 'JobResultsView',
  components: {
    JobFiltersSidebar,
    JobListings
  }
}
</script>

<template>
  <div class="flex flex w-full flex-row flex-nowrap">
    <JobFiltersSidebar />
    <JobListings />
  </div>
</template>
