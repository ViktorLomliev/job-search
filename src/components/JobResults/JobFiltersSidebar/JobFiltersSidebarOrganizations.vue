<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import CollapsibleAccordion from '@/components/shared/CollapsibleAccordion.vue'
import { useUserStore } from '@/stores/user'
import { useJobsStore } from '@/stores/jobs'

const selectedOrganizations = ref([])

const jobsStore = useJobsStore()
const UNIQUE_ORGANIZATIONS = computed(() => jobsStore.UNIQUE_ORGANIZATIONS)

const userStore = useUserStore()
const router = useRouter()

const selectOrganization = () => {
  userStore.ADD_SELECTED_ORGANIZATION(selectedOrganizations.value)
  router.push({ name: 'JobResults' })
}
</script>

<template>
  <CollapsibleAccordion header="Organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li v-for="organization in UNIQUE_ORGANIZATIONS" :key="organization" class="h-8 w-1/2">
            <input
              :id="organization"
              v-model="selectedOrganizations"
              :value="organization"
              type="checkbox"
              class="mr-3"
              @change="selectOrganization"
            />
            <label for="organization">{{ organization }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </CollapsibleAccordion>
</template>
