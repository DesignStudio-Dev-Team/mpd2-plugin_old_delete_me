<template>
<div class="dsw-font-dsw dsw-px-0 dsw-py-3 dsw-flex dsw-items-center dsw-justify-between dsw-border-t dsw-border-gray-200">
    <div class="sm:dsw-flex-1 sm:dsw-flex dsw-text-center dsw-w-full dsw-items-center dsw-justify-between">

        <div v-if="currentItemsLast > 0" classes="dsw-mb-1">
            Showing
            <strong v-if="currentItemsLast > 0">{{currentItemsFirst}}</strong>
            <strong v-else>0</strong>
            to <strong>{{currentItemsLast}}</strong> of <strong>{{totalItemCount}}</strong> results
        </div>
        <div class="dsw-flex dsw-flex-row">
            <div>
                <select v-model="results_per_page" @change="changeResultsPerPage" class="dsw-relative dsw-z-0 dsw-inline-flex dsw-rounded-md dsw-shadow-sm dsw--space-x-px dsw-border-gray-300 dsw-bg-white dsw-text-gray-500 dsw-mt-0.5 dsw-mr-2 dsw-text-md">
                    <option value="25">25 per page</option>
                    <option value="50">50 per page</option>
                    <option value="100">100 per page</option>
                    <option value="250">250 per page</option>
                    <option value="500">500 per page</option>
                    <option value="1000">1000 per page</option>
                </select>
            </div>

            <nav v-if="pageCount > 1" class="dsw-relative dsw-z-0 dsw-inline-flex dsw-rounded-md dsw-shadow-sm dsw--space-x-px" aria-label="Pagination">
                <a @click.prevent="prevHandle" class="dsw-relative dsw-inline-flex dsw-items-center dsw-px-2 dsw-py-2 dsw-rounded-l-md dsw-border dsw-border-gray-300 dsw-bg-white dsw-text-gray-500  dsw-cursor-pointer dsw-text-md dsw-font-dsw">
                    <span class="dsw-sr-only dsw-font-dsw dsw-text-md">Previous</span>
                    <svg class="dsw-h-5 dsw-w-5 dsw-primary-site-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                </a>

                <a v-for="(item, index) in paginateItems" :key="index" @click.prevent="() => handleClick(item)" aria-current="page" class="dsw-primary-site-link dsw-font-dsw dsw-bg-white dsw-border-gray-300  dsw-relative dsw-inline-flex dsw-items-center dsw-px-4 dsw-py-2 dsw-border dsw-text-md dsw-cursor-pointer" :class="{'dsw-bg-gray-200 ': currentPage - 1 === index, '': currentPage - 1 !== index}">
                    {{item}}
                </a>

                <a @click.prevent="nextHandle" class="dsw-font-dsw dsw-relative dsw-inline-flex dsw-items-center dsw-px-2 dsw-py-2 dsw-rounded-r-md dsw-border dsw-border-gray-300 dsw-bg-white dsw-text-md dsw-text-gray-500  dsw-cursor-pointer">
                    <span class="dsw-sr-only">Next</span>
                    <svg class="dsw-h-5 dsw-w-5 dsw-primary-site-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                </a>
            </nav>
        </div>
    </div>
</div>
</template>

<script>

export default {
    name: "Pagination",

    props: ['currentItemsFirst', 'currentItemsLast', 'totalItemCount', 'currentPage', 'pageCount'],
   
    data: function () {
        return {
            results_per_page: 100
        }
    },

    methods: {
        nextHandle() {

            this.$emit('nextHandle')
        },

        prevHandle() {
            //window.scrollTo({top: 0, behavior: 'smooth'});
            this.$emit('prevHandle')
        },

        handleClick(item) {
            if (item == '...')
                return;
            //window.scrollTo({top: 0, behavior: 'smooth'});
            this.$emit('handleClick', item)
        },
        changeResultsPerPage() {

            this.$emit('changeResultsPerPage', this.results_per_page);
        },
    },

    computed: {
        /**
         * The pagination parts
         *
         * @return  {Array}
         */
        paginateItems() {
            let hasFirstDots = false;
            let hasSecondDots = false;
            const pages = [1];
            for (let i = 2; i <= this.pageCount; i++) {
                // First numbers
                if (
                    // Second Number
                    (i === 2 && i !== this.currentPage) ||
                    // Third Number
                    (i === 3 && i === this.currentPage)
                ) {
                    pages.push(i);
                }

                // First dots
                if (i + 2 <= this.currentPage && i + 1 !== this.currentPage - 1 && !hasFirstDots) {
                    pages.push('...')
                    hasFirstDots = true;
                }

                // Current page
                if (
                    // Page before Current
                    (i === this.currentPage - 1 && pages.indexOf(i) < 0 && this.currentPage - 1 > 0) ||
                    // Current
                    (i === this.currentPage && pages.indexOf(i) < 0) ||
                    // Page after Current
                    (i === this.currentPage + 1 && pages.indexOf(i) < 0 && this.currentPage + 1 < this.pageCount)
                ) {
                    pages.push(i)
                }

                // Second dots
                if (i + 2 <= this.pageCount - 1 && i + 2 > this.currentPage + 2 && !hasSecondDots) {
                    pages.push('...')
                    hasSecondDots = true;
                }

                //Final numbers
                if (
                    // Before Last
                    (i === this.pageCount - 1 && pages.indexOf(i) < 0) ||
                    // Last
                    (i === this.pageCount && pages.indexOf(i) < 0)
                ) {
                    pages.push(i)
                }
            }
            return pages;
        },

    }
}
</script>
