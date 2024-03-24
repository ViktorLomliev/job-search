<script lang="ts" setup>
import { ref } from 'vue'

const imageLink = ref('https://i1.sndcdn.com/artworks-wSDztKZNhOSkFRps-qpSMGQ-t500x500.jpg')
</script>

<template>
  <img :src="imageLink" alt="User profile image" class="h-8 w-8 rounded-3xl object-contain" />
</template>
