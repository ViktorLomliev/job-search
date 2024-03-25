<script lang="ts" setup>
import { computed } from 'vue'
import ActionButton from '@/components/shared/ActionButton.vue'
import JobFiltersSidebarCheckboxGroup from './JobFiltersSidebarCheckboxGroup.vue'
import { useJobsStore } from '@/stores/jobs'
import { useUserStore } from '@/stores/user'
import { useDegreesStore } from '@/stores/degrees'
import CollapsibleAccordion from '@/components/shared/CollapsibleAccordion.vue'

const jobsStore = useJobsStore()

const UNIQUE_ORGANIZATIONS = computed(() => jobsStore.UNIQUE_ORGANIZATIONS)
const UNIQUE_JOB_TYPES = computed(() => jobsStore.UNIQUE_JOB_TYPES)

const degreesStore = useDegreesStore()
const UNIQUE_DEGREES = computed(() => degreesStore.UNIQUE_DEGREES)

const userStore = useUserStore()
</script>

<template>
  <div class="flex w-96 flex-col border-r border-solid border-brand-gray-1 bg-white p-4">
    <section class="pb-5">
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
      <CollapsibleAccordion header="Degrees">
        <JobFiltersSidebarCheckboxGroup
          :unique-values="UNIQUE_DEGREES"
          :action="userStore.ADD_SELECTED_DEGREES"
        />
      </CollapsibleAccordion>
      <CollapsibleAccordion header="Job Types">
        <JobFiltersSidebarCheckboxGroup
          :unique-values="UNIQUE_JOB_TYPES"
          :action="userStore.ADD_SELECTED_JOB_TYPES"
        />
      </CollapsibleAccordion>
      <CollapsibleAccordion header="Organizations">
        <JobFiltersSidebarCheckboxGroup
          :unique-values="UNIQUE_ORGANIZATIONS"
          :action="userStore.ADD_SELECTED_ORGANIZATION"
        />
      </CollapsibleAccordion>
    </section>
  </div>
</template>
