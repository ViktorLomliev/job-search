<script>
import axios from 'axios'
import JobListing from '@/components/JobResults/JobListing.vue'
export default {
  name: 'JobListings',
  components: {
    JobListing
  },
  data() {
    return {
      jobs: []
    }
  },
  mounted() {
    axios.get('http://localhost:3000/jobs').then((response) => {
      this.jobs = response.data
    })
  }
}
</script>

<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <JobListing />
      <JobListing />
      <JobListing />
    </ol>
  </main>
</template>
