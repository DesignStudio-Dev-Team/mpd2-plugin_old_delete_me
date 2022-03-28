<template>
  <div class="dsw-w-full dsw-px-4">
    <div class="dsw-w-full dsw-max-w-md dsw-p-2 dsw-mx-auto dsw-bg-white dsw-rounded-2xl">
      <Disclosure v-slot="{ open }"> 
        <DisclosureButton
          class="dsw-flex dsw-items-center dsw-justify-between dsw-w-full dsw-px-4 dsw-py-2 dsw-text-sm dsw-font-medium dsw-text-left dsw-text-white dsw-bg-slate-800 dsw-rounded-lg hover:dsw-bg-slate-700 focus:dsw-outline-none focus-visible:ring focus-visible:dsw-ring-slate-600 focus-visible:dsw-ring-opacity-75"
        >
          <slot name="title"></slot>
          <ChevronUpIcon
            :class="open ? 'dsw-transform dsw-rotate-180' : ''"
            class="dsw-w-9 dsw-h-9 dsw-text-white"
          />
        </DisclosureButton>

         <transition
      enter-active-class="dsw-transition dsw-duration-100 dsw-ease-out"
      enter-from-class="dsw-transform dsw-scale-95 dsw-opacity-0"
      enter-to-class="dsw-transform dsw-scale-100 dsw-opacity-100"
      leave-active-class="dsw-transition dsw-duration-75 dsw-ease-out"
      leave-from-class="dsw-transform dsw-scale-100 dsw-opacity-100"
      leave-to-class="dsw-transform dsw-scale-95 dsw-opacity-0"
    >
        <DisclosurePanel class="dsw-px-4 dsw-pt-4 dsw-pb-2 dsw-text-sm dsw-text-gray-500">
          <slot name="content"></slot>
        </DisclosurePanel>
        </transition>
      </Disclosure>
    </div>
  </div>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronUpIcon } from '@heroicons/vue/solid'


export default {
     components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronUpIcon,
  },
  
}
</script>

<style>

</style>