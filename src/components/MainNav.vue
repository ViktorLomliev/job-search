<script>
export default {
  name: 'MainNav',
  data() {
    return {
      company: 'JobHive',
      author: {
        firtName: 'Viktor',
        lastName: 'Lomliev'
      }
    }
  }
}
</script>

<template>
  <header class="w-full text-sm">{{ company }}</header>
  <div class="fixed left-0 top-0 h-16 w-full bg-white">
    <div class="border-brand-gray-1 flex h-full flex-nowrap border-b border-solid px-8">
      <a href="/" class="flex h-full items-center text-xl">JobHive</a>
      <h2 class="ml-8 flex h-full items-center">
        Developed by {{ author.firtName }} {{ author.lastName }}
      </h2>
    </div>
  </div>
</template>
