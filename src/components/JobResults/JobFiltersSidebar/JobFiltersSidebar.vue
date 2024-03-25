<script lang="ts" setup>
import CollapsibleAccordion from '@/components/shared/CollapsibleAccordion.vue'
import JobFiltersSidebarDegrees from './JobFiltersSidebarDegrees.vue'
import JobFiltersSidebarJobTypes from './JobFiltersSidebarJobTypes.vue'
import JobFiltersSidebarOrganizations from './JobFiltersSidebarOrganizations.vue'
import JobFiltersSidebarPrompt from './JobFiltersSidebarPrompt.vue'
</script>

<template>
  <div class="flex w-96 flex-col border-r border-solid border-brand-gray-1 bg-white p-4">
    <section class="pb-5">
      <JobFiltersSidebarPrompt />
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
