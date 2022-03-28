<template>
  <TransitionRoot as="template" :show="show">
    <Dialog as="div" class="dsw-fixed dsw-z-50 dsw-inset-0 dsw-overflow-y-auto" @click="show = false">
      <div class="dsw-flex dsw-items-center dsw-justify-center dsw-min-h-screen dsw-pt-4 dsw-px-4 dsw-pb-20 dsw-text-center">
        <TransitionChild as="template" enter="dsw-ease-out dsw-duration-300" enter-from="dsw-opacity-0" enter-to="dsw-opacity-100" leave="dsw-ease-in dsw-duration-200" leave-from="dsw-opacity-100" leave-to="dsw-opacity-0">
          <DialogOverlay class="dsw-fixed dsw-inset-0 dsw-bg-gray-500 dsw-bg-opacity-75 dsw-transition-opacity" />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="dsw-inline-block dsw-align-middle" aria-hidden="true">&#8203;</span>
        <TransitionChild as="template" enter="dsw-ease-out dsw-duration-300" enter-from="dsw-opacity-0 dsw-translate-y-4 sm:dsw-translate-y-0 sm:dsw-scale-95" enter-to="dsw-opacity-100 dsw-translate-y-0 sm:dsw-scale-100" leave="dsw-ease-in dsw-duration-200" leave-from="dsw-opacity-100 dsw-translate-y-0 sm:dsw-scale-100" leave-to="dsw-opacity-0 dsw-translate-y-4 sm:dsw-translate-y-0 sm:dsw-scale-95">
          <div class="dsw-inline-block dsw-bg-white dsw-rounded-lg dsw-px-4 dsw-pt-5 dsw-pb-4 dsw-text-left dsw-shadow-xl dsw-transform dsw-transition-all dsw-my-0 md:dsw-ml-40 dsw-align-middle dsw-max-w-xl sm:dsw-max-w-2xl md:dsw-max-w-3xl dsw-w-full">
            <div @click="close"><svg xmlns="http://www.w3.org/2000/svg" class="dsw-h-8 dsw-w-8 dsw-cursor-pointer dsw-absolute dsw--top-4 dsw--right-4 dsw-bg-white dsw-border dsw-rounded-full" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
            </svg></div>

            <div class="dsw-max-h-96 dsw-overflow-y-auto">
              
              <div class="dsw-mt-3 dsw-text-center dsw-sm:mt-5">
                <DialogTitle as="h3" class="dsw-text-lg dsw-leading-6 dsw-font-medium dsw-text-gray-900">
                  <slot name="title" />
                </DialogTitle>

                <div class="dsw-mt-5">
                    <slot name="content" />
                </div>
                
            </div>
            </div>
          
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { CheckIcon } from '@heroicons/vue/outline'
import { onMounted, onUnmounted } from "vue";


export default {
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    CheckIcon,
  },
  emits: ['close'],
    props: {
            show: {
                default: false
            },
            closeable: {
                default: true
            },
        },
         watch: {
            show: {
                immediate: true,
                handler: (show) => {
                    if (show) {
                        document.body.style.overflow = 'hidden'
                    } else {
                        document.body.style.overflow = null
                    }
                }
            }
        },

        setup(props, {emit}) {
            const close = () => {
                if (props.closeable) {
                    emit('close')
                }
            }

            const closeOnEscape = (e) => {
                if (e.key === 'Escape' && props.show) {
                    close()
                }
            }

            onMounted(() => document.addEventListener('keydown', closeOnEscape))
            onUnmounted(() => {
                document.removeEventListener('keydown', closeOnEscape)
                document.body.style.overflow = null
            })

            return {
                close,
            }
        },
}
</script>