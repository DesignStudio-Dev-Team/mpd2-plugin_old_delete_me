<template>
<div v-if="has_loaded" class="dsw-max-w-6xl">

    <div class="dsw-flex dsw-flex-row dsw-flex-nowrap dsw-justify-between dsw-items-center dsw-text-lg dsw-my-16">
        <div class="dsw-flex dsw-flex-row"><span><b>{{true_total_brand_count}} Brands</b> are connected to this site</span></div>
        <div class="dsw-flex dsw-flex-row dsw-flex-nowrap dsw-space-x-4 ">
            <div class="dsw-w-80 dsw-flex dsw-h-11">
                <input v-model="search_terms" @keyup="searchKeyUp" class="dsw-w-full dsw-font-dsw dsw-border dsw-border-gray-300 dsw-rounded dsw-p-2 dsw-text-md dsw-leading-snug" type="text" placeholder="Filter by Keyword">
                <div class="dsw-max-w-0 dsw-font-dsw">
                    <button class="dsw-transform dsw-font-dsw dsw--translate-x-10 dsw-mt-3 dsw-ml-3 dsw-bg-white w-auto dsw-flex dsw-justify-end dsw-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="dsw-h-5 dsw-w-5 dsw-primary-site-svg" viewBox="0 0 20 20" fill="#7E7E7E">
                            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <select v-model="sort_by" @change="changeSortBy" class="dsw-flex dsw-flex-col dsw-max-w-unset dsw-bg-white dsw-border-solid dsw-border-menu-inactive dsw-border dsw-rounded dsw-resize-none dsw-pt-3 dsw-px-5 dsw-placeholder-waves-placeholder dsw-w-48 dsw-text-md">
                <option selected="" value="">Sort By</option>
                <option value="name_asc">Brand: A to Z</option>
                <option value="name_desc">Brand: Z to A</option>
                <option value="industry_asc">Industry: A to Z</option>
                <option value="industry_desc">Industry: Z to A</option>
            </select>

        </div>
    </div>

    <div v-if="industry" class="dsw-mb-4 dsw-w-full dsw-text-lg dsw-text-right">
        Showing all brands in: <b>{{industry}}</b> (<a @click="clearIndustry" class="dsw-text-blue-500 dsw-cursor-pointer">clear</a>)
    </div>
    <div class="dsw-flex dsw-flex-col dsw-w-full dsw-text-lg dsw-bg-white">
        <div class="dsw-flex dsw-flex-row dsw-text-white dsw-bg-gray-800 dsw-py-5 dsw-px-8 dsw-rounded-t dsw-align-center dsw-items-center">
            <div class="dsw-grow">Brand</div>
            <div class="dsw-w-1/4">Industry</div>
            <div class="dsw-w-1/4">URL's Syndicated</div>
            <div class="dsw-flex dsw-justify-center dsw-items-center dsw-w-1/6">Configure</div>
        </div>
        <div v-if="is_loading_ajax" class="dsw-h-60 dsw-relative">
            <div class="dsw-text-black dsw-absolute dsw-h-full dsw-w-full dsw-top-0 dsw-left-0 dsw-flex dsw-flex-col dsw-items-center dsw-justify-center">
                <div><svg class="dsw-opacity-50 dsw-animate-spin dsw-h-10 dsw-w-10 dsw-text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="dsw-opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="dsw-opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                </div>
                <div class="dsw-mt-2 dsw-opacity-75 dsw-text-lg">Loading...</div>
            </div>
        </div>

        <div v-else-if="brands && brands.length" v-for="(brand, brandIndex) in brands" :key="brandIndex" class="dsw-flex dsw-flex-row dsw-items-center dsw-px-8 dsw-border-b">
            <div @click="goBrand(brand.id)" class="dsw-grow dsw-p-4 dsw-py-14 dsw-cursor-pointer">
                <img v-if="brand.image" :src="brand.image" class="dsw-border-none dsw-w-56 dsw-object-cover dsw-mx-auto">
                <div v-else>{{ brand.name }}</div>
            </div>
            <div class="dsw-w-1/4"><a @click="clickIndustry (brand.industry)" class="dsw-text-blue-500 dsw-cursor-pointer">{{ brand.industry }}</a></div>
            <div class="dsw-w-1/4">{{brand.syndicated_content}} URLs Active</div>
            <div class="dsw-flex dsw-justify-center dsw-items-center dsw-w-1/6">
                <svg @click="goBrand(brand.id)" xmlns="http://www.w3.org/2000/svg" class="dsw-cursor-pointer" width="26" height="26" viewBox="0 0 26 26">
                    <path id="Icon_ionic-ios-settings" data-name="Icon ionic-ios-settings" d="M28.354,17.5A3.345,3.345,0,0,1,30.5,14.376a13.256,13.256,0,0,0-1.6-3.865,3.391,3.391,0,0,1-1.361.291,3.338,3.338,0,0,1-3.054-4.7,13.223,13.223,0,0,0-3.859-1.6,3.343,3.343,0,0,1-6.243,0,13.264,13.264,0,0,0-3.866,1.6,3.338,3.338,0,0,1-3.054,4.7A3.281,3.281,0,0,1,6.1,10.511a13.549,13.549,0,0,0-1.6,3.872,3.344,3.344,0,0,1,.007,6.241,13.256,13.256,0,0,0,1.6,3.865A3.339,3.339,0,0,1,10.519,28.9a13.341,13.341,0,0,0,3.866,1.6,3.337,3.337,0,0,1,6.229,0,13.264,13.264,0,0,0,3.866-1.6,3.343,3.343,0,0,1,4.408-4.407,13.334,13.334,0,0,0,1.6-3.865A3.361,3.361,0,0,1,28.354,17.5ZM17.561,22.905a5.415,5.415,0,1,1,5.417-5.415A5.414,5.414,0,0,1,17.561,22.905Z" transform="translate(-4.5 -4.5)" fill="#13252c" />
                </svg>
            </div>
        </div>
        <div v-else class="dsw-p-5">
            None on file.
        </div>
    </div>

    <Pagination v-if="pagination.total_pages" @prevHandle="prevHandle" @nextHandle="nextHandle" @handleClick="handleClick" :currentItemsFirst="pagination.current_page_first_index" :currentItemsLast="pagination.current_page_last_index" :totalItemCount="pagination.total_results_count" :currentPage="pagination.current_page" :pageCount="pagination.total_pages"></Pagination>

</div>
<div v-else class="dsw-h-60 dsw-relative">
    <div class="dsw-text-black dsw-absolute dsw-h-full dsw-w-full dsw-top-0 dsw-left-0 dsw-flex dsw-flex-col dsw-items-center dsw-justify-center">
        <div><svg class="dsw-opacity-50 dsw-animate-spin dsw-h-10 dsw-w-10 dsw-text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="dsw-opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="dsw-opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
        </div>
        <div class="dsw-mt-2 dsw-opacity-75 dsw-text-lg">Loading...</div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
import Pagination from '../components/Pagination.vue';
export default {
    data() {
        return {
            has_loaded: false,
            is_loading_ajax: false,
            brands: [],
            search_terms: '',
            industry: null,
            sort_by: '',
            true_total_brand_count: 0,
            pagination: {
                current_page_first_index: 0,
                current_page_last_index: 0,
                total_results_count: 0,
                current_page: 1,
                total_pages: 0,
                items_per_page: 50
            }
        }
    },
    created() {
        this.redirectIfKeyInvalid();
        this.ajax();
    },
    methods: {
        goBrand(id) {
            console.log ('goBrand');
            this.$router.push({
                name: 'Brand',
                params: {
                    id: id
                }
            });
        },
        ajax() {

            this.is_loading_ajax = true;
            axios({
                    method: 'post',
                    url: '/wp-json/dswaves/v1/get_sync_brands',
                    data: {
                        pagination: this.pagination,
                        industry: this.industry,
                        search_terms: this.search_terms,
                        sort_by: this.sort_by,
                    }
                }).then(response => {
                    this.has_loaded = true;
                    this.true_total_brand_count = response.data.true_total_brand_count;
                    this.pagination = response.data.pagination;
                    this.brands = response.data.results;
                    this.is_loading_ajax = false;
                })
                .catch(error => {
                    this.is_loading_ajax = false;
                    console.log(error);
                });
        },
        searchKeyUp() {
            this.pagination.current_page = 1;
            this.ajax();
        },
        changeSortBy() {
            this.pagination.current_page = 1;
            this.ajax();
        },
        clickIndustry(industry) {
            this.industry = industry;
            this.pagination.current_page = 1;
            this.ajax();
        },
        clearIndustry() {
            this.industry = null;
            this.pagination.current_page = 1;
            this.ajax();
        },
        prevHandle() {
            this.pagination.current_page--;
            if (this.pagination.current_page < 1) {
                this.pagination.current_page = 1;
                return;
            }

            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

            var app = this;
            setTimeout(function () {
                app.ajax();
            }, 300);
        },
        nextHandle() {
            this.pagination.current_page++;
            if (this.pagination.current_page > this.pagination.total_pages) {
                this.pagination.current_page = this.pagination.total_pages;
                return;
            }
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

            var app = this;
            setTimeout(function () {
                app.ajax();
            }, 300);
        },
        handleClick(page) {

            if (this.pagination.current_page == page) {
                return;
            }

            this.pagination.current_page = page;
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

            var app = this;
            setTimeout(function () {
                app.ajax();
            }, 300);

        }
    },
    components: {
        Pagination
    },
}
</script>

<style lang="css" scoped>
</style>
