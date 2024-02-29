<script>
export default {
  name: 'TheHeadline',
  data() {
    return {
      sample: 'Hello'
    }
  },
  created() {
    console.log('Ive been created: My data :', this.sample)
  }
}
</script>

<template>
  <section>
    <h1>Build for everyone</h1>
    <h2>Find your nect job at JobHive</h2>
  </section>
</template>
