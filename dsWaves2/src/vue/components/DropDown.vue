<template>
  <Listbox v-if="wooCommerceCategories" as="div" v-model="selected" class="dsw-mt-5">
    <ListboxLabel class="dsw-block dsw-text-sm dsw-font-medium dsw-text-gray-700">
     <slot name="label"></slot>
    </ListboxLabel>
    <div class="dsw-mt-1 dsw-relative">
      <ListboxButton class="dsw-relative dsw-w-full dsw-bg-white dsw-border dsw-border-gray-300 dsw-rounded-md dsw-shadow-sm dsw-pl-3 dsw-pr-10 dsw-py-2 dsw-text-left dsw-cursor-default focus:dsw-outline-none focus:dsw-ring-1 focus:dsw-ring-slate-500 focus:dsw-border-slate-500 sm:dsw-text-sm">
        <span v-if="selected" class="dsw-block dsw-truncate" v-html="selected.name"></span>
        <span class="dsw-absolute dsw-inset-y-0 dsw-right-0 dsw-flex dsw-items-center dsw-pr-2 dsw-pointer-events-none">
          <SelectorIcon class="dsw-h-5 dsw-w-5 dsw-text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition leave-active-class="dsw-transition dsw-ease-in dsw-duration-100" leave-from-class="dsw-opacity-100" leave-to-class="dsw-opacity-0">
        <ListboxOptions class="dsw-absolute dsw-z-10 dsw-mt-1 dsw-w-full dsw-bg-white dsw-shadow-lg dsw-max-h-60 dsw-rounded-md dsw-py-1 dsw-text-base dsw-ring-1 dsw-ring-black dsw-ring-opacity-5 dsw-overflow-auto focus:dsw-outline-none sm:dsw-text-sm">
          
          <ListboxOption as="template" v-for="(item, itemIndex) in wooCommerceCategories" :key="itemIndex" :value="item" v-slot="{ active, selected }">
            <li :class="[active ? 'dsw-text-white dsw-bg-slate-600' : 'dsw-text-gray-900', 'dsw-cursor-default dsw-select-none dsw-relative dsw-py-2 dsw-pl-8 dsw-pr-4']">
              <span :class="[selected ? 'dsw-font-semibold' : 'dsw-font-normal', 'dsw-block dsw-truncate']" v-html="item.name"></span>
              <span v-if="selected" :class="[active ? 'dsw-text-white' : 'dsw-text-slate-600', 'dsw-absolute dsw-inset-y-0 dsw-left-0 dsw-flex dsw-items-center dsw-pl-1.5']">
                <CheckIcon class="dsw-h-5 dsw-w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script>
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon, SelectorIcon } from '@heroicons/vue/solid'
import axios from 'axios'

export default {
components: {
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    CheckIcon,
    SelectorIcon,
  },
  props: {
      syncID: {
        type: Number,
        default: '',
      },
  },
  data() {
    return {
      selected: [],
      wooCommerceCategories: [],
    }
  },
  setup() {
  },
  created() {
    axios.get('/wp-json/dswaves/v1/get_woo_categories')
                .then(response => {
                    this.wooCommerceCategories = response.data;
                    this.selected = response.data[0];
                })
                .catch(error => {
                    console.log(error);
                });
  },
  watch: {
        selected(newValue) {
        this.$emit('selected', {selected: newValue, syndID: this.syncID});
        }
    },
}
</script>