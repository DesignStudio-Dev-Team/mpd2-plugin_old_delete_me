<template>
  <!-- Global notification live region, render this permanently at the end of the document -->
  <div aria-live="assertive" class="dsw-z-50 dsw-fixed dsw-inset-0 dsw-flex dsw-items-end dsw-px-4 dsw-py-6 dsw-pointer-events-none sm:dsw-p-6 sm:dsw-items-start">
    <div class="dsw-w-full dsw-flex dsw-flex-col dsw-items-center dsw-space-y-4 sm:dsw-items-end">
      <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
      <transition enter-active-class="dsw-transform dsw-ease-out dsw-duration-300 dsw-transition" enter-from-class="dsw-translate-y-2 dsw-opacity-0 sm:dsw-translate-y-0 sm:dsw-translate-x-2" enter-to-class="dsw-translate-y-0 dsw-opacity-100 sm:dsw-translate-x-0" leave-active-class="dsw-transition dsw-ease-in dsw-duration-100" leave-from-class="dsw-opacity-100" leave-to-class="dsw-opacity-0">
        <div v-if="success" class="dsw-max-w-sm dsw-w-full dsw-bg-white dsw-shadow-lg dsw-rounded-lg dsw-pointer-events-auto dsw-ring-1 dsw-ring-black dsw-ring-opacity-5 dsw-overflow-hidden">
          <div class="dsw-p-4">
            <div class="dsw-flex dsw-items-center">
              <div class="dsw-flex-shrink-0">
                <CheckCircleIcon class="dsw-h-6 dsw-w-6 dsw-text-emerald-500" aria-hidden="true" />
              </div>
              <div class="dsw-ml-3 w-0 dsw-flex-1 dsw-pt-0.5">
                <p class="dsw-text-sm dsw-font-medium dsw-text-gray-900">
                  <slot name="message"></slot>
                </p>
              </div>
              <div class="dsw-ml-4 dsw-flex-shrink-0 dsw-flex">
                <button @click="emitSuccess" class="dsw-bg-white dsw-rounded-md dsw-inline-flex dsw-text-gray-400 hover:dsw-text-gray-500 focus:dsw-outline-none focus:dsw-ring-2 focus:dsw-ring-offset-2 focus:dsw-ring-slate-500">
                  <span class="dsw-sr-only">Close</span>
                  <XIcon class="dsw-h-5 dsw-w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { CheckCircleIcon } from '@heroicons/vue/outline'
import { XIcon } from '@heroicons/vue/solid'

export default {
  components: {
    CheckCircleIcon,
    XIcon,
  },
  props: {
    success: {
      type: Boolean,
      default: false,
    }
  },
  setup() {
  },
  methods: {
      //emit the success message to the parent component
        emitSuccess() {
            this.$emit('success', 'success');
        }
  },
}
</script>