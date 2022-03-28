 <template>
 <button type="button"
   :class="[primary ? 'dsw-bg-slate-600 hover:dsw-bg-slate-500 focus:dsw-ring-slate-500' : 'dsw-bg-slate-800 hover:dsw-bg-slate-700 focus:dsw-ring-slate-600', 'dsw-text-white dsw-inline-flex dsw-items-center dsw-px-6 dsw-py-3 dsw-border dsw-border-transparent dsw-text-base dsw-font-medium dsw-rounded-md dsw-shadow-sm focus:dsw-outline-none focus:dsw-ring-2 focus:dsw-ring-offset-2']">
        
    <slot name="text"></slot>
  </button>
</template>

<script>
export default {
    props: ['primary'],
    setup() {
        
    },
}
</script>
