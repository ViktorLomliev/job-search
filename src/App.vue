<script>
import MainNav from './components/navigation/MainNav.vue'
export default {
  name: 'App',
  components: { MainNav }
}
</script>

<template>
  <MainNav />
  <RouterView />
</template>
