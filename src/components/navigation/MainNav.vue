<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useUserStore } from '@/stores/user'
import ActionButton from '../shared/ActionButton.vue'
import ProfileImage from '@/components/navigation/ProfileImage.vue'
import TheSubNav from '@/components/navigation/TheSubNav.vue'

const menuItems = ref([
  { text: 'Teams', url: '/teams' },
  { text: 'Locations', url: '/' },
  { text: 'Life at JobHive', url: '/' },
  { text: 'How we hire', url: '/' },
  { text: 'Students', url: '/' },
  { text: 'Jobs', url: '/jobs/results' }
])

const userStore = useUserStore()
const LOGIN_USER = userStore.LOGIN_USER
const isLoggedIn = computed(() => userStore.isLoggedIn)

const headerHeightClass = computed(() => ({
  'h-16': !isLoggedIn.value,
  'h-32': isLoggedIn.value
}))
</script>

<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div class="flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8">
        <RouterLink :to="{ name: 'Home' }" class="flex h-full items-center text-xl"
          >JobHive</RouterLink
        >
        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li v-for="menuItem in menuItems" :key="menuItem.text" class="ml-9 h-full first:ml-0">
              <RouterLink :to="menuItem.url" class="flex h-full items-center py-2.5">
                {{ menuItem.text }}
              </RouterLink>
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex h-full items-center">
          <ProfileImage v-if="isLoggedIn" />
          <ActionButton v-else text="Sign In" type="primary" @click="LOGIN_USER" />
        </div>
      </div>
      <TheSubNav v-if="isLoggedIn" />
    </div>
  </header>
</template>
