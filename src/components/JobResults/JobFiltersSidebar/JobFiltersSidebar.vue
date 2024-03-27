<script lang="ts" setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import CollapsibleAccordion from '@/components/shared/CollapsibleAccordion.vue'
import JobFiltersSidebarDegrees from './JobFiltersSidebarDegrees.vue'
import JobFiltersSidebarJobTypes from './JobFiltersSidebarJobTypes.vue'
import JobFiltersSidebarOrganizations from './JobFiltersSidebarOrganizations.vue'
import JobFiltersSidebarPrompt from './JobFiltersSidebarPrompt.vue'
import JobFiltersSidebarSkills from './JobFiltersSidebarSkills.vue'
import { useUserStore } from '@/stores/user'

const route = useRoute()
const userStore = useUserStore()

const parseSkillsSearchTerm = () => {
  const role = (route.query.role as string) || ''
  userStore.UPDATE_SKILLS_SEARCH_TERM(role)
}

onMounted(parseSkillsSearchTerm)
</script>

<template>
  <div class="flex w-96 flex-col border-r border-solid border-brand-gray-1 bg-white p-4">
    <section class="pb-5">
      <JobFiltersSidebarPrompt />
      <JobFiltersSidebarSkills />
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
