<template>
    <SwitchGroup as="div" class="dsw-flex dsw-items-center dsw-justify-between">
        <span class="dsw-flex-grow dsw-flex dsw-flex-col">
            <SwitchLabel as="span" class="dsw-text-left dsw-p-2 dsw-text-sm dsw-font-medium dsw-text-gray-900" passive>
                <slot name="label"></slot>
            </SwitchLabel>
        </span>
        <Switch v-model="enabled"
            :class="[enabled ? 'dsw-bg-green-600' : 'dsw-bg-gray-200', 'dsw-relative dsw-inline-flex dsw-flex-shrink-0 dsw-h-6 dsw-w-11 dsw-border-2 dsw-border-transparent dsw-rounded-full dsw-cursor-pointer dsw-transition-colors dsw-ease-in-out dsw-duration-200 focus:dsw-outline-none focus:dsw-ring-2 focus:dsw-ring-offset-2 focus:dsw-ring-slate-500']">
            <span aria-hidden="true"
                :class="[enabled ? 'dsw-translate-x-5' : 'dsw-translate-x-0', 'dsw-pointer-events-none dsw-inline-block dsw-h-5 dsw-w-5 dsw-rounded-full dsw-bg-white dsw-shadow dsw-transform dsw-ring-0 dsw-transition dsw-ease-in-out dsw-duration-200']" />
        </Switch>
    </SwitchGroup>
    <div v-if="enabled" class="dsw-p-3 dsw-py-3 dsw-text-left">
        <slot name="content"></slot>
    </div>
</template>

<script>
import { ref } from 'vue'
import { Switch, SwitchDescription, SwitchGroup, SwitchLabel } from '@headlessui/vue'


export default {
  components: {
    Switch,
    SwitchDescription,
    SwitchGroup,
    SwitchLabel,
  },
  setup() {
    const enabled = ref(false)

    return {
      enabled,
    }
  },
}
</script>