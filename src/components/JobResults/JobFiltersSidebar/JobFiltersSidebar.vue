<template>
  <div class="flex w-96 flex-col border-r border-solid border-brand-gray-1 bg-white p-4">
    <section class="pb-5">
      <div class="f;ex-rpw flex justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <ActionButton text="Clear Filters" type="secondary" />
        </div>
      </div>
      <CollapsibleAccordion header="Job types">
        <p>Placeholder</p>
      </CollapsibleAccordion>
      <CollapsibleAccordion header="Organizations">
        <div class="mt-5">
          <fieldset>
            <ul class="flex flex-row flex-wrap">
              <li class="h-6 w-1/2">
                <input id="VueTube" type="checkbox" class="mr-3" />
                <label for="VueTube">VueTube</label>
              </li>
              <li class="h-6 w-1/2">
                <input id="Between Vue an Me" type="checkbox" class="mr-3" />
                <label for="Between Vue an Me">Between Vue an Me</label>
              </li>
              <li class="h-6 w-1/2">
                <input id="Et Vue Brute" type="checkbox" class="mr-3" />
                <label for="Et Vue Brute">Et Vue Brute</label>
              </li>
              <li class="h-6 w-1/2">
                <input id="Vue and a Half Men" type="checkbox" class="mr-3" />
                <label for="Vue and a Half Men">Vue and a Half Men</label>
              </li>
            </ul>
          </fieldset>
        </div>
      </CollapsibleAccordion>
    </section>
  </div>
</template>

<script>
import ActionButton from '@/components/shared/ActionButton.vue'
import CollapsibleAccordion from '@/components/shared/CollapsibleAccordion.vue'
export default {
  name: 'JobFiltersSidebar',
  components: {
    ActionButton,
    CollapsibleAccordion
  }
}
</script>
