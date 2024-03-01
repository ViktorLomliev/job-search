<script>
export default {
  name: 'TextInput',
  data() {
    return {
      value: ''
    }
  },
  methoda: {
    handleInput($event) {
      this.value = $event.target.value
    }
  }
}
</script>

<template>
  <input
    type="text"
    :value="value"
    class="w-full text-lg font-normal focus:outline-none"
    @input="handleInput"
  />
</template>
