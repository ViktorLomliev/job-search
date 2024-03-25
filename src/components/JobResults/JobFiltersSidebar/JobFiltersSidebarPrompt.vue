<script lang="ts" setup>
import ActionButton from '@/components/shared/ActionButton.vue'
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
</script>

<template>
  <div class="f;ex-rpw flex justify-between">
    <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
    <div class="flex items-center text-sm">
      <ActionButton
        text="Clear Filters"
        type="secondary"
        @click="userStore.CLEAR_USER_JOB_FILTER_SELECTION"
      />
    </div>
  </div>
</template>
