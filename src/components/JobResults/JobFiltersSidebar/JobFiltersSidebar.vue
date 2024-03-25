<script lang="ts" setup>
import ActionButton from '@/components/shared/ActionButton.vue'
import { useUserStore } from '@/stores/user'
import CollapsibleAccordion from '@/components/shared/CollapsibleAccordion.vue'
import JobFiltersSidebarDegrees from './JobFiltersSidebarDegrees.vue'
import JobFiltersSidebarJobTypes from './JobFiltersSidebarJobTypes.vue'
import JobFiltersSidebarOrganizations from './JobFiltersSidebarOrganizations.vue'

const jobsStore = useJobsStore()

const degreesStore = useDegreesStore()

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
        <JobFiltersSidebarDegrees />
      </CollapsibleAccordion>
      <CollapsibleAccordion header="Job Types">
        <JobFiltersSidebarJobTypes />
      </CollapsibleAccordion>
      <CollapsibleAccordion header="Organizations">
        <JobFiltersSidebarOrganizations />
      </CollapsibleAccordion>
    </section>
  </div>
</template>
