<script>
import MainNav from '@/components/navigation/MainNav.vue'
import TheHero from '@/components/job_search/TheHero.vue'

export default {
  name: 'App',
  components: {
    MainNav,
    TheHero
  }
}
</script>

<template>
  <MainNav />
  <TheHero />
</template>
