<template>
<div class="dsw-max-w-4xl">

    <div v-if="brand" class="dsw-mt-5">
        <div class="dsw-flex">
            <div class="dsw-w-60">
                <img v-if="brand.image" :src="brand.image" :alt="brand.name" class="dsw-w-56" />
            </div>
            <div class="dsw-grow dsw-text-right">
                
                <div v-if="number_of_changes || queued_sync_count > 0">
                    <div class="dsw-p-5 dsw-bg-green-200 dsw-w-full dsw-text-right dsw-mb-4">

                        <div v-if="queued_sync_count > 0" class="dsw-w-full dsw-h-12 dsw-mb-2">
                            <div class="dsw-p-2 dsw-px-3 dsw-bg-white dsw-text-right dsw-border dsw-rounded-full dsw-float-right">
                                <svg class="dsw-opacity-50 dsw-animate-spin dsw-h-4 dsw-w-4 dsw-text-black dsw-float-left dsw-mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle class="dsw-opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                    <path class="dsw-opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Your site is currently downloading the latest syndication content. You have {{queued_sync_count}} pieces left.
                            </div>
                        </div>
                        <div class="dsw-text-right dsw-w-full">
                            {{number_of_changes}} pending updates not saved.
                            <button v-if="!currently_saving" @click="saveBrand" type="submit" :disabled="queued_sync_count > 0 ? true : false" class="dsw-bg-blue-500 dsw-text-white dsw-p-2 dsw-text-xs dsw-mx-2 dsw-px-3 dsw-rounded-sm dsw-border dsw-border-gray-400">SAVE <span v-if="queued_sync_count > 0">(Disabled while syncing site)</span></button>
                            <svg v-else class="dsw-opacity-50 dsw-animate-spin dsw-h-4 dsw-w-4 dsw-text-black dsw-float-right dsw-ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle class="dsw-opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                    <path class="dsw-opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                        </div>
                    </div>
                </div>
                
                <button v-if="brand.estore" @click="show = true" type="button" class="dsw-bg-gray-300 dsw-text-gray-800 dsw-p-2 dsw-text-xs dsw-px-3 dsw-rounded-sm dsw-border dsw-border-gray-400">MANAGE E-STORE CATEGORIES</button>

            </div>
        </div>

        <div class="dsw-my-7 dsw-text-lg">
            <span class="dsw-font-bold">{{contentStats.total_count}} URLs</span> in active syndication.
        </div>

        <div class="dsw-flex dsw-mt-5">
            <div class="dsw-w-1/4 dsw-flex">
                <Switch checked={brand.settings.enable_products} @click="clickContentTypeOnOff ('products')" class="dsw-relative dsw-inline-flex dsw-flex-shrink-0 dsw-h-7 dsw-w-[52px] dsw-border-2 dsw-border-transparent dsw-rounded-full dsw-cursor-pointer dsw-transition-colors dsw-ease-in-out dsw-duration-200 focus:dsw-outline-none focus-visible:dsw-ring-2  focus-visible:dsw-ring-white focus-visible:dsw-ring-opacity-75" :class="brand.settings.enable_products ? 'dsw-bg-green-600' : 'dsw-bg-gray-500'">
                    <span aria-hidden="true" class="dsw-pointer-events-none dsw-inline-block dsw-h-6 dsw-w-6 dsw-rounded-full dsw-bg-white dsw-shadow-lg dsw-transform ring-0 dsw-transition dsw-ease-in-out dsw-duration-200" :class="brand.settings.enable_products ? 'dsw-translate-x-6' : 'dsw-translate-x-0'" />
                </Switch>
                <div class="dsw-mt-0.5 dsw-ml-3 dsw-text-base">
                    <span>Products</span> ({{contentStats.product_count}})
                </div>

            </div>
            <div class="dsw-w-1/2 dsw-flex">
                <Switch checked={brand.settings.enable_posts} @click="clickContentTypeOnOff ('posts')" class="dsw-relative dsw-inline-flex dsw-flex-shrink-0 dsw-h-7 dsw-w-[52px] dsw-border-2 dsw-border-transparent dsw-rounded-full dsw-cursor-pointer dsw-transition-colors dsw-ease-in-out dsw-duration-200 focus:dsw-outline-none focus-visible:dsw-ring-2  focus-visible:dsw-ring-white focus-visible:dsw-ring-opacity-75" :class="brand.settings.enable_posts ? 'dsw-bg-green-600' : 'dsw-bg-gray-500'">
                    <span aria-hidden="true" class="dsw-pointer-events-none dsw-inline-block dsw-h-6 dsw-w-6 dsw-rounded-full dsw-bg-white dsw-shadow-lg dsw-transform ring-0 dsw-transition dsw-ease-in-out dsw-duration-200" :class="brand.settings.enable_posts ? 'dsw-translate-x-6' : 'dsw-translate-x-0'" />
                </Switch>
                <div class="dsw-mt-0.5 dsw-ml-3 dsw-text-base">
                    <span>Blog Posts</span> ({{contentStats.post_count}})
                </div>
            </div>
        </div>
        <div class="dsw-flex dsw-mt-5">
            <div class="dsw-w-1/4 dsw-flex">
                <Switch checked={brand.settings.enable_pages} @click="clickContentTypeOnOff ('pages')" class="dsw-relative dsw-inline-flex dsw-flex-shrink-0 dsw-h-7 dsw-w-[52px] dsw-border-2 dsw-border-transparent dsw-rounded-full dsw-cursor-pointer dsw-transition-colors dsw-ease-in-out dsw-duration-200 focus:dsw-outline-none focus-visible:dsw-ring-2  focus-visible:dsw-ring-white focus-visible:dsw-ring-opacity-75" :class="brand.settings.enable_pages ? 'dsw-bg-green-600' : 'dsw-bg-gray-500'">
                    <span aria-hidden="true" class="dsw-pointer-events-none dsw-inline-block dsw-h-6 dsw-w-6 dsw-rounded-full dsw-bg-white dsw-shadow-lg dsw-transform ring-0 dsw-transition dsw-ease-in-out dsw-duration-200" :class="brand.settings.enable_pages ? 'dsw-translate-x-6' : 'dsw-translate-x-0'" />
                </Switch>
                <div class="dsw-mt-0.5 dsw-ml-3 dsw-text-base">
                    <span>Web Pages</span> ({{contentStats.page_count}})
                </div>
            </div>
            <div class="dsw-w-1/2 dsw-flex">
                <Switch checked={brand.settings.enable_articles} @click="clickContentTypeOnOff ('articles')" class="dsw-relative dsw-inline-flex dsw-flex-shrink-0 dsw-h-7 dsw-w-[52px] dsw-border-2 dsw-border-transparent dsw-rounded-full dsw-cursor-pointer dsw-transition-colors dsw-ease-in-out dsw-duration-200 focus:dsw-outline-none focus-visible:dsw-ring-2  focus-visible:dsw-ring-white focus-visible:dsw-ring-opacity-75" :class="brand.settings.enable_articles ? 'dsw-bg-green-600' : 'dsw-bg-gray-500'">
                    <span aria-hidden="true" class="dsw-pointer-events-none dsw-inline-block dsw-h-6 dsw-w-6 dsw-rounded-full dsw-bg-white dsw-shadow-lg dsw-transform ring-0 dsw-transition dsw-ease-in-out dsw-duration-200" :class="brand.settings.enable_articles ? 'dsw-translate-x-6' : 'dsw-translate-x-0'" />
                </Switch>
                <div class="dsw-mt-0.5 dsw-ml-3 dsw-text-base">
                    <span>Knowledge Base Articles</span> ({{contentStats.article_count}})
                </div>
            </div>
        </div>

        <div class="dsw-text-lg dsw-mt-10 dsw-mb-5">
            Manage {{brand.name}} Syndicated URLs
        </div>

        <div v-if="brand.settings.enable_products" id="scroll_to_top_of_products" class="dsw-tab dsw-w-full dsw-overflow-hidden dsw-text-lg dsw-mb-5">
            <input :id="'tab-products-'+brand.id" type="checkbox" name="tabs" class="dsw-absolute dsw-opacity-0">
            <label :for="'tab-products-'+brand.id" class="dsw-block dsw-py-4 dsw-px-7 dsw-z-20 dsw-relative dsw-leading-normal dsw-cursor-pointer dsw-bg-slate-800 dsw-text-white dsw-flex dsw-items-center">
                <span>Products</span>
                <div class="dsw-ml-auto dsw-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="dsw-w-8 dsw-svg-arrow">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                </div>
            </label>
            <div class="dsw-tab-content dsw-z-10 dsw-shadow-md dsw-relative dsw-overflow-hidden dsw-bg-white dsw-leading-normal dsw-transition-height dsw-duration-500 dsw-ease-in-out">
                <div class="dsw-p-7">

                    <table class="dsw-w-full dsw-divide-y dsw-divide-gray-200">
                        <tbody>
                            <tr class="dsw-border-b-2">
                                <td class="dsw-w-48 dsw-p-4 dsw-font-bold dsw-text-center">
                                    Auto-Update
                                </td>
                                <td class="dsw-p-4 dsw-pr-0 dsw-font-bold dsw-relative">

                                    <div v-if="!brand.settings.enable_all_products" class="dsw-w-80 dsw-flex dsw-h-11 dsw-absolute dsw-right-0 dsw-top-0">
                                        <input v-model="product_search_terms" @keyup="productSearchKeyUp" class="dsw-w-full dsw-font-dsw dsw-border dsw-border-gray-300 dsw-rounded dsw-p-2 dsw-text-md dsw-leading-snug" type="text" placeholder="Filter by Keyword">
                                        <div class="dsw-max-w-0 dsw-font-dsw">
                                            <button class="dsw-transform dsw-font-dsw dsw--translate-x-10 dsw-mt-3 dsw-ml-3 dsw-bg-white w-auto dsw-flex dsw-justify-end dsw-items-center"><svg xmlns="http://www.w3.org/2000/svg" class="dsw-h-5 dsw-w-5 dsw-primary-site-svg" viewBox="0 0 20 20" fill="#7E7E7E">
                                                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                                                </svg></button></div>
                                    </div>

                                    Product Name
                                </td>
                            </tr>
                            <tr class="dsw-border-b dsw-text-base">
                                <td class="dsw-w-48 dsw-p-4 dsw-text-center">
                                    <Switch checked={brand.settings.enable_all_products} @click="clickContentTypeAllOnOff ('products')" class="dsw-relative dsw-inline-flex dsw-flex-shrink-0 dsw-h-7 dsw-w-[52px] dsw-border-2 dsw-border-transparent dsw-rounded-full dsw-cursor-pointer dsw-transition-colors dsw-ease-in-out dsw-duration-200 focus:dsw-outline-none focus-visible:dsw-ring-2  focus-visible:dsw-ring-white focus-visible:dsw-ring-opacity-75" :class="brand.settings.enable_all_products ? 'dsw-bg-green-600' : 'dsw-bg-gray-500'">
                                        <span aria-hidden="true" class="dsw-pointer-events-none dsw-inline-block dsw-h-6 dsw-w-6 dsw-rounded-full dsw-bg-white dsw-shadow-lg dsw-transform ring-0 dsw-transition dsw-ease-in-out dsw-duration-200" :class="brand.settings.enable_all_products ? 'dsw-translate-x-6' : 'dsw-translate-x-0'" />
                                    </Switch>
                                </td>
                                <td class="dsw-p-4">
                                    <div>All Products ({{brand.products.length}})</div>
                                </td>
                            </tr>
                            <tr v-if="!brand.settings.enable_all_products && !product_search_terms" class="dsw-border-b dsw-text-base" v-for="row in brand.products.slice(product_pagination.current_page_first_index-1,product_pagination.current_page_last_index)" :key="row.id">
                                <td class="dsw-w-48 dsw-p-4 dsw-text-center">
                                    <Switch checked={row.enabled} @click="row.enabled = !row.enabled" class="dsw-relative dsw-inline-flex dsw-flex-shrink-0 dsw-h-7 dsw-w-[52px] dsw-border-2 dsw-border-transparent dsw-rounded-full dsw-cursor-pointer dsw-transition-colors dsw-ease-in-out dsw-duration-200 focus:dsw-outline-none focus-visible:dsw-ring-2  focus-visible:dsw-ring-white focus-visible:dsw-ring-opacity-75" :class="row.enabled ? 'dsw-bg-green-600' : 'dsw-bg-gray-500'">
                                        <span aria-hidden="true" class="dsw-pointer-events-none dsw-inline-block dsw-h-6 dsw-w-6 dsw-rounded-full dsw-bg-white dsw-shadow-lg dsw-transform ring-0 dsw-transition dsw-ease-in-out dsw-duration-200" :class="row.enabled ? 'dsw-translate-x-6' : 'dsw-translate-x-0'" />
                                    </Switch>
                                </td>
                                <td class="dsw-p-4">{{row.name}}</td>
                            </tr>
                            <tr v-else-if="product_search_terms" class="dsw-border-b dsw-text-base" v-for="row in product_search_results" :key="row.id">
                                <td class="dsw-w-48 dsw-p-4 dsw-text-center">
                                    <Switch checked={row.enabled} @click="row.enabled = !row.enabled" class="dsw-relative dsw-inline-flex dsw-flex-shrink-0 dsw-h-7 dsw-w-[52px] dsw-border-2 dsw-border-transparent dsw-rounded-full dsw-cursor-pointer dsw-transition-colors dsw-ease-in-out dsw-duration-200 focus:dsw-outline-none focus-visible:dsw-ring-2  focus-visible:dsw-ring-white focus-visible:dsw-ring-opacity-75" :class="row.enabled ? 'dsw-bg-green-600' : 'dsw-bg-gray-500'">
                                        <span aria-hidden="true" class="dsw-pointer-events-none dsw-inline-block dsw-h-6 dsw-w-6 dsw-rounded-full dsw-bg-white dsw-shadow-lg dsw-transform ring-0 dsw-transition dsw-ease-in-out dsw-duration-200" :class="row.enabled ? 'dsw-translate-x-6' : 'dsw-translate-x-0'" />
                                    </Switch>
                                </td>
                                <td class="dsw-p-4">{{row.name}}</td>
                            </tr>
                        </tbody>
                    </table>
                    <Pagination v-if="product_pagination.total_pages && !brand.settings.enable_all_products && !product_search_terms" @changeResultsPerPage="changeResultsPerPage" @prevHandle="productPrevHandle" @nextHandle="productNextHandle" @handleClick="productHandleClick" :currentItemsFirst="product_pagination.current_page_first_index" :currentItemsLast="product_pagination.current_page_last_index" :totalItemCount="product_pagination.total_results_count" :currentPage="product_pagination.current_page" :pageCount="product_pagination.total_pages"></Pagination>
                </div>
            </div>
        </div>

        <div v-if="brand.settings.enable_pages" id="scroll_to_top_of_pages" class="dsw-tab dsw-w-full dsw-overflow-hidden dsw-text-lg dsw-mb-5">
            <input :id="'tab-pages-'+brand.id" type="checkbox" name="tabs" class="dsw-absolute dsw-opacity-0">
            <label :for="'tab-pages-'+brand.id" class="dsw-block dsw-py-4 dsw-px-7 dsw-z-20 dsw-relative dsw-leading-normal dsw-cursor-pointer dsw-bg-slate-800 dsw-text-white dsw-flex dsw-items-center">
                <span>Web Pages</span>
                <div class="dsw-ml-auto dsw-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="dsw-w-8 dsw-svg-arrow">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                </div>
            </label>
            <div class="dsw-tab-content dsw-z-10 dsw-shadow-md dsw-relative dsw-overflow-hidden dsw-bg-white dsw-leading-normal dsw-transition-height dsw-duration-500 dsw-ease-in-out">
                <div class="dsw-p-7">

                    <table class="dsw-w-full dsw-divide-y dsw-divide-gray-200">
                        <tbody>
                            <tr class="dsw-border-b-2">
                                <td class="dsw-w-48 dsw-p-4 dsw-font-bold dsw-text-center">
                                    Auto-Update
                                </td>

                                <td class="dsw-p-4 dsw-pr-0 dsw-font-bold dsw-relative">

                                    <div v-if="!brand.settings.enable_all_pages" class="dsw-w-80 dsw-flex dsw-h-11 dsw-absolute dsw-right-0 dsw-top-0">
                                        <input v-model="page_search_terms" @keyup="pageSearchKeyUp" class="dsw-w-full dsw-font-dsw dsw-border dsw-border-gray-300 dsw-rounded dsw-p-2 dsw-text-md dsw-leading-snug" type="text" placeholder="Filter by Keyword">
                                        <div class="dsw-max-w-0 dsw-font-dsw">
                                            <button class="dsw-transform dsw-font-dsw dsw--translate-x-10 dsw-mt-3 dsw-ml-3 dsw-bg-white w-auto dsw-flex dsw-justify-end dsw-items-center"><svg xmlns="http://www.w3.org/2000/svg" class="dsw-h-5 dsw-w-5 dsw-primary-site-svg" viewBox="0 0 20 20" fill="#7E7E7E">
                                                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                                                </svg></button></div>
                                    </div>

                                    Web Page Name
                                </td>
                            </tr>
                            <tr class="dsw-border-b dsw-text-base">
                                <td class="dsw-w-48 dsw-p-4 dsw-text-center">
                                    <Switch checked={brand.settings.enable_all_pages} @click="clickContentTypeAllOnOff ('pages')" class="dsw-relative dsw-inline-flex dsw-flex-shrink-0 dsw-h-7 dsw-w-[52px] dsw-border-2 dsw-border-transparent dsw-rounded-full dsw-cursor-pointer dsw-transition-colors dsw-ease-in-out dsw-duration-200 focus:dsw-outline-none focus-visible:dsw-ring-2  focus-visible:dsw-ring-white focus-visible:dsw-ring-opacity-75" :class="brand.settings.enable_all_pages ? 'dsw-bg-green-600' : 'dsw-bg-gray-500'">
                                        <span aria-hidden="true" class="dsw-pointer-events-none dsw-inline-block dsw-h-6 dsw-w-6 dsw-rounded-full dsw-bg-white dsw-shadow-lg dsw-transform ring-0 dsw-transition dsw-ease-in-out dsw-duration-200" :class="brand.settings.enable_all_pages ? 'dsw-translate-x-6' : 'dsw-translate-x-0'" />
                                    </Switch>
                                </td>
                                <td class="dsw-p-4">
                                    <div>All Web Pages ({{brand.pages.length}})</div>
                                </td>
                            </tr>
                            <tr v-if="!brand.settings.enable_all_pages && !page_search_terms" class="dsw-border-b dsw-text-base" v-for="row in brand.pages.slice(page_pagination.current_page_first_index-1,page_pagination.current_page_last_index)" :key="row.id">
                                <td class="dsw-w-48 dsw-p-4 dsw-text-center">
                                    <Switch checked={row.enabled} @click="row.enabled = !row.enabled" class="dsw-relative dsw-inline-flex dsw-flex-shrink-0 dsw-h-7 dsw-w-[52px] dsw-border-2 dsw-border-transparent dsw-rounded-full dsw-cursor-pointer dsw-transition-colors dsw-ease-in-out dsw-duration-200 focus:dsw-outline-none focus-visible:dsw-ring-2  focus-visible:dsw-ring-white focus-visible:dsw-ring-opacity-75" :class="row.enabled ? 'dsw-bg-green-600' : 'dsw-bg-gray-500'">
                                        <span aria-hidden="true" class="dsw-pointer-events-none dsw-inline-block dsw-h-6 dsw-w-6 dsw-rounded-full dsw-bg-white dsw-shadow-lg dsw-transform ring-0 dsw-transition dsw-ease-in-out dsw-duration-200" :class="row.enabled ? 'dsw-translate-x-6' : 'dsw-translate-x-0'" />
                                    </Switch>
                                </td>
                                <td class="dsw-p-4">{{row.name}}</td>
                            </tr>
                            <tr v-else-if="page_search_terms" class="dsw-border-b dsw-text-base" v-for="row in page_search_results" :key="row.id">
                                <td class="dsw-w-48 dsw-p-4 dsw-text-center">
                                    <Switch checked={row.enabled} @click="row.enabled = !row.enabled" class="dsw-relative dsw-inline-flex dsw-flex-shrink-0 dsw-h-7 dsw-w-[52px] dsw-border-2 dsw-border-transparent dsw-rounded-full dsw-cursor-pointer dsw-transition-colors dsw-ease-in-out dsw-duration-200 focus:dsw-outline-none focus-visible:dsw-ring-2  focus-visible:dsw-ring-white focus-visible:dsw-ring-opacity-75" :class="row.enabled ? 'dsw-bg-green-600' : 'dsw-bg-gray-500'">
                                        <span aria-hidden="true" class="dsw-pointer-events-none dsw-inline-block dsw-h-6 dsw-w-6 dsw-rounded-full dsw-bg-white dsw-shadow-lg dsw-transform ring-0 dsw-transition dsw-ease-in-out dsw-duration-200" :class="row.enabled ? 'dsw-translate-x-6' : 'dsw-translate-x-0'" />
                                    </Switch>
                                </td>
                                <td class="dsw-p-4">{{row.name}}</td>
                            </tr>
                        </tbody>
                    </table>
                    <Pagination v-if="page_pagination.total_pages && !brand.settings.enable_all_pages && !page_search_terms" @prevHandle="pagePrevHandle" @nextHandle="pageNextHandle" @handleClick="pageHandleClick" :currentItemsFirst="page_pagination.current_page_first_index" :currentItemsLast="page_pagination.current_page_last_index" :totalItemCount="page_pagination.total_results_count" :currentPage="page_pagination.current_page" :pageCount="page_pagination.total_pages"></Pagination>
                </div>
            </div>
        </div>

         <div v-if="brand.settings.enable_posts" id="scroll_to_top_of_posts" class="dsw-tab dsw-w-full dsw-overflow-hidden dsw-text-lg dsw-mb-5">
            <input :id="'tab-posts-'+brand.id" type="checkbox" name="tabs" class="dsw-absolute dsw-opacity-0">
            <label :for="'tab-posts-'+brand.id" class="dsw-block dsw-py-4 dsw-px-7 dsw-z-20 dsw-relative dsw-leading-normal dsw-cursor-pointer dsw-bg-slate-800 dsw-text-white dsw-flex dsw-items-center">
                <span>Blog Posts</span>
                <div class="dsw-ml-auto dsw-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="dsw-w-8 dsw-svg-arrow">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                </div>
            </label>
            <div class="dsw-tab-content dsw-z-10 dsw-shadow-md dsw-relative dsw-overflow-hidden dsw-bg-white dsw-leading-normal dsw-transition-height dsw-duration-500 dsw-ease-in-out">
                <div class="dsw-p-7">

                    <table class="dsw-w-full dsw-divide-y dsw-divide-gray-200">
                        <tbody>
                            <tr class="dsw-border-b-2">
                                <td class="dsw-w-48 dsw-p-4 dsw-font-bold dsw-text-center">
                                    Auto-Update
                                </td>

                                <td class="dsw-p-4 dsw-pr-0 dsw-font-bold dsw-relative">

                                    <div v-if="!brand.settings.enable_all_posts" class="dsw-w-80 dsw-flex dsw-h-11 dsw-absolute dsw-right-0 dsw-top-0">
                                        <input v-model="post_search_terms" @keyup="postSearchKeyUp" class="dsw-w-full dsw-font-dsw dsw-border dsw-border-gray-300 dsw-rounded dsw-p-2 dsw-text-md dsw-leading-snug" type="text" placeholder="Filter by Keyword">
                                        <div class="dsw-max-w-0 dsw-font-dsw">
                                            <button class="dsw-transform dsw-font-dsw dsw--translate-x-10 dsw-mt-3 dsw-ml-3 dsw-bg-white w-auto dsw-flex dsw-justify-end dsw-items-center"><svg xmlns="http://www.w3.org/2000/svg" class="dsw-h-5 dsw-w-5 dsw-primary-site-svg" viewBox="0 0 20 20" fill="#7E7E7E">
                                                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                                                </svg></button></div>
                                    </div>

                                    Blog Post Name
                                </td>
                            </tr>
                            <tr class="dsw-border-b dsw-text-base">
                                <td class="dsw-w-48 dsw-p-4 dsw-text-center">
                                    <Switch checked={brand.settings.enable_all_posts} @click="clickContentTypeAllOnOff ('posts')" class="dsw-relative dsw-inline-flex dsw-flex-shrink-0 dsw-h-7 dsw-w-[52px] dsw-border-2 dsw-border-transparent dsw-rounded-full dsw-cursor-pointer dsw-transition-colors dsw-ease-in-out dsw-duration-200 focus:dsw-outline-none focus-visible:dsw-ring-2  focus-visible:dsw-ring-white focus-visible:dsw-ring-opacity-75" :class="brand.settings.enable_all_posts ? 'dsw-bg-green-600' : 'dsw-bg-gray-500'">
                                        <span aria-hidden="true" class="dsw-pointer-events-none dsw-inline-block dsw-h-6 dsw-w-6 dsw-rounded-full dsw-bg-white dsw-shadow-lg dsw-transform ring-0 dsw-transition dsw-ease-in-out dsw-duration-200" :class="brand.settings.enable_all_posts ? 'dsw-translate-x-6' : 'dsw-translate-x-0'" />
                                    </Switch>
                                </td>
                                <td class="dsw-p-4">
                                    <div>All Blog Posts ({{brand.posts.length}})</div>
                                </td>
                            </tr>
                            <tr v-if="!brand.settings.enable_all_posts && !post_search_terms" class="dsw-border-b dsw-text-base" v-for="row in brand.posts.slice(post_pagination.current_page_first_index-1,post_pagination.current_page_last_index)" :key="row.id">
                                <td class="dsw-w-48 dsw-p-4 dsw-text-center">
                                    <Switch checked={row.enabled} @click="row.enabled = !row.enabled" class="dsw-relative dsw-inline-flex dsw-flex-shrink-0 dsw-h-7 dsw-w-[52px] dsw-border-2 dsw-border-transparent dsw-rounded-full dsw-cursor-pointer dsw-transition-colors dsw-ease-in-out dsw-duration-200 focus:dsw-outline-none focus-visible:dsw-ring-2  focus-visible:dsw-ring-white focus-visible:dsw-ring-opacity-75" :class="row.enabled ? 'dsw-bg-green-600' : 'dsw-bg-gray-500'">
                                        <span aria-hidden="true" class="dsw-pointer-events-none dsw-inline-block dsw-h-6 dsw-w-6 dsw-rounded-full dsw-bg-white dsw-shadow-lg dsw-transform ring-0 dsw-transition dsw-ease-in-out dsw-duration-200" :class="row.enabled ? 'dsw-translate-x-6' : 'dsw-translate-x-0'" />
                                    </Switch>
                                </td>
                                <td class="dsw-p-4">{{row.name}}</td>
                            </tr>
                            <tr v-else-if="post_search_terms" class="dsw-border-b dsw-text-base" v-for="row in post_search_results" :key="row.id">
                                <td class="dsw-w-48 dsw-p-4 dsw-text-center">
                                    <Switch checked={row.enabled} @click="row.enabled = !row.enabled" class="dsw-relative dsw-inline-flex dsw-flex-shrink-0 dsw-h-7 dsw-w-[52px] dsw-border-2 dsw-border-transparent dsw-rounded-full dsw-cursor-pointer dsw-transition-colors dsw-ease-in-out dsw-duration-200 focus:dsw-outline-none focus-visible:dsw-ring-2  focus-visible:dsw-ring-white focus-visible:dsw-ring-opacity-75" :class="row.enabled ? 'dsw-bg-green-600' : 'dsw-bg-gray-500'">
                                        <span aria-hidden="true" class="dsw-pointer-events-none dsw-inline-block dsw-h-6 dsw-w-6 dsw-rounded-full dsw-bg-white dsw-shadow-lg dsw-transform ring-0 dsw-transition dsw-ease-in-out dsw-duration-200" :class="row.enabled ? 'dsw-translate-x-6' : 'dsw-translate-x-0'" />
                                    </Switch>
                                </td>
                                <td class="dsw-p-4">{{row.name}}</td>
                            </tr>
                        </tbody>
                    </table>
                    <Pagination v-if="post_pagination.total_pages && !brand.settings.enable_all_posts && !post_search_terms" @prevHandle="postPrevHandle" @nextHandle="postNextHandle" @handleClick="postHandleClick" :currentItemsFirst="post_pagination.current_page_first_index" :currentItemsLast="post_pagination.current_page_last_index" :totalItemCount="post_pagination.total_results_count" :currentPage="post_pagination.current_page" :pageCount="post_pagination.total_pages"></Pagination>
                </div>
            </div>
        </div>

        <div v-if="brand.settings.enable_articles" id="scroll_to_top_of_articles" class="dsw-tab dsw-w-full dsw-overflow-hidden dsw-text-lg dsw-mb-5">
            <input :id="'tab-articles-'+brand.id" type="checkbox" name="tabs" class="dsw-absolute dsw-opacity-0">
            <label :for="'tab-articles-'+brand.id" class="dsw-block dsw-py-4 dsw-px-7 dsw-z-20 dsw-relative dsw-leading-normal dsw-cursor-pointer dsw-bg-slate-800 dsw-text-white dsw-flex dsw-items-center">
                <span>Knowldege Base Articles</span>
                <div class="dsw-ml-auto dsw-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="dsw-w-8 dsw-svg-arrow">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                </div>
            </label>
            <div class="dsw-tab-content dsw-z-10 dsw-shadow-md dsw-relative dsw-overflow-hidden dsw-bg-white dsw-leading-normal dsw-transition-height dsw-duration-500 dsw-ease-in-out">
                <div class="dsw-p-7">

                    <table class="dsw-w-full dsw-divide-y dsw-divide-gray-200">
                        <tbody>
                            <tr class="dsw-border-b-2">
                                <td class="dsw-w-48  dsw-p-4 dsw-font-bold dsw-text-center">
                                    Auto-Update
                                </td>
                                <td class="dsw-p-4 dsw-pr-0 dsw-font-bold dsw-relative">

                                    <div v-if="!brand.settings.enable_all_articles" class="dsw-w-80 dsw-flex dsw-h-11 dsw-absolute dsw-right-0 dsw-top-0">
                                        <input v-model="article_search_terms" @keyup="articleSearchKeyUp" class="dsw-w-full dsw-font-dsw dsw-border dsw-border-gray-300 dsw-rounded dsw-p-2 dsw-text-md dsw-leading-snug" type="text" placeholder="Filter by Keyword">
                                        <div class="dsw-max-w-0 dsw-font-dsw">
                                            <button class="dsw-transform dsw-font-dsw dsw--translate-x-10 dsw-mt-3 dsw-ml-3 dsw-bg-white w-auto dsw-flex dsw-justify-end dsw-items-center"><svg xmlns="http://www.w3.org/2000/svg" class="dsw-h-5 dsw-w-5 dsw-primary-site-svg" viewBox="0 0 20 20" fill="#7E7E7E">
                                                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                                                </svg></button></div>
                                    </div>

                                    Article Name
                                </td>
                            </tr>
                            <tr class="dsw-border-b dsw-text-base">
                                <td class="dsw-w-48 dsw-p-4 dsw-text-center">
                                    <Switch checked={brand.settings.enable_all_articles} @click="clickContentTypeAllOnOff ('articles')" class="dsw-relative dsw-inline-flex dsw-flex-shrink-0 dsw-h-7 dsw-w-[52px] dsw-border-2 dsw-border-transparent dsw-rounded-full dsw-cursor-pointer dsw-transition-colors dsw-ease-in-out dsw-duration-200 focus:dsw-outline-none focus-visible:dsw-ring-2  focus-visible:dsw-ring-white focus-visible:dsw-ring-opacity-75" :class="brand.settings.enable_all_articles ? 'dsw-bg-green-600' : 'dsw-bg-gray-500'">
                                        <span aria-hidden="true" class="dsw-pointer-events-none dsw-inline-block dsw-h-6 dsw-w-6 dsw-rounded-full dsw-bg-white dsw-shadow-lg dsw-transform ring-0 dsw-transition dsw-ease-in-out dsw-duration-200" :class="brand.settings.enable_all_articles ? 'dsw-translate-x-6' : 'dsw-translate-x-0'" />
                                    </Switch>
                                </td>
                                <td class="dsw-p-4">
                                    <div>All Knowldege Base Articles ({{brand.knowledgebase_articles.length}})</div>
                                </td>
                            </tr>
                            <tr v-if="!brand.settings.enable_all_articles && !article_search_terms" class="dsw-border-b dsw-text-base" v-for="row in brand.knowledgebase_articles.slice(article_pagination.current_page_first_index-1,article_pagination.current_page_last_index)" :key="row.id">
                                <td class="dsw-w-48 dsw-p-4 dsw-text-center">
                                    <Switch checked={row.enabled} @click="row.enabled = !row.enabled" class="dsw-relative dsw-inline-flex dsw-flex-shrink-0 dsw-h-7 dsw-w-[52px] dsw-border-2 dsw-border-transparent dsw-rounded-full dsw-cursor-pointer dsw-transition-colors dsw-ease-in-out dsw-duration-200 focus:dsw-outline-none focus-visible:dsw-ring-2  focus-visible:dsw-ring-white focus-visible:dsw-ring-opacity-75" :class="row.enabled ? 'dsw-bg-green-600' : 'dsw-bg-gray-500'">
                                        <span aria-hidden="true" class="dsw-pointer-events-none dsw-inline-block dsw-h-6 dsw-w-6 dsw-rounded-full dsw-bg-white dsw-shadow-lg dsw-transform ring-0 dsw-transition dsw-ease-in-out dsw-duration-200" :class="row.enabled ? 'dsw-translate-x-6' : 'dsw-translate-x-0'" />
                                    </Switch>
                                </td>
                                <td class="dsw-p-4">{{row.name}}</td>
                            </tr>
                            <tr v-else-if="article_search_terms" class="dsw-border-b dsw-text-base" v-for="row in article_search_results" :key="row.id">
                                <td class="dsw-w-48 dsw-p-4 dsw-text-center">
                                    <Switch checked={row.enabled} @click="row.enabled = !row.enabled" class="dsw-relative dsw-inline-flex dsw-flex-shrink-0 dsw-h-7 dsw-w-[52px] dsw-border-2 dsw-border-transparent dsw-rounded-full dsw-cursor-pointer dsw-transition-colors dsw-ease-in-out dsw-duration-200 focus:dsw-outline-none focus-visible:dsw-ring-2  focus-visible:dsw-ring-white focus-visible:dsw-ring-opacity-75" :class="row.enabled ? 'dsw-bg-green-600' : 'dsw-bg-gray-500'">
                                        <span aria-hidden="true" class="dsw-pointer-events-none dsw-inline-block dsw-h-6 dsw-w-6 dsw-rounded-full dsw-bg-white dsw-shadow-lg dsw-transform ring-0 dsw-transition dsw-ease-in-out dsw-duration-200" :class="row.enabled ? 'dsw-translate-x-6' : 'dsw-translate-x-0'" />
                                    </Switch>
                                </td>
                                <td class="dsw-p-4">{{row.name}}</td>
                            </tr>
                        </tbody>
                    </table>
                    <Pagination v-if="article_pagination.total_pages && !brand.settings.enable_all_articles && !article_search_terms" @prevHandle="articlePrevHandle" @nextHandle="articleNextHandle" @handleClick="articleHandleClick" :currentItemsFirst="article_pagination.current_page_first_index" :currentItemsLast="article_pagination.current_page_last_index" :totalItemCount="article_pagination.total_results_count" :currentPage="article_pagination.current_page" :pageCount="article_pagination.total_pages"></Pagination>
                </div>
            </div>
        </div>
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
</div>

<modal :show="show" @close="closeModal">
    <template #title>
        Brand Categories
    </template>
    <template #content>
        <div class="dsw-space-y-6 dsw-text-gray-900 dsw-text-base dsw-leading-6 dsw-z-50">

            <div class="dsw-grid dsw-grid-cols-4 dsw-gap-4">
                <div class="dsw-p-2 dsw-col-span-2 dsw-bg-white" v-for="(category, categoryIndex) in brand.product_categories" :key="categoryIndex">

                    <Accordion>
                        <template #title>
                            <p class="dsw-text-bold dsw-p-2">{{ category.name }}</p>
                        </template>
                        <template #content>
                            <div v-if="category.items.length > 0" class="dsw-mt-2">
                                <div class="dsw-p-2 dsw-bg-white dsw-border-b dsw-border-gray-400" v-for="(subcategory, subcategoryIndex) in category.items" :key="subcategoryIndex">

                                    
                                    <Switcher>
                                        <template #label>
                                            {{ subcategory.name }}
                                        </template>
                                        <template #content>
                                            <div>
                                                <p class="dsw-text-sm dsw-text-gray-600">Pick a WooCommerce Category</p>

                                                <!-- DropDown of WooCommerce Categories -->
                                                <DropDown :syncID="subcategory.id" @selected="wooCommerceSelected"></DropDown>
                                                <br />
                                                
                                                <Button :primary="true" @click="save(category.id, subcategory.id)">
                                                    <template #text>
                                                        <span>Save</span>
                                                    </template>
                                                </Button>
                                            </div>
                                        </template>
                                    </Switcher>

                                </div>
                            </div>
                        </template>
                    </Accordion>

                </div>
            </div>

        </div>
    </template>
</modal>

<Notification :success="success" @success="emitSuccess">
    <template #message>
        Saved!
    </template>
</Notification>
</template>

<script>
import axios from 'axios';
import Modal from '../components/Modal.vue';
import Button from '../components/Button.vue';
import Accordion from '../components/Accordion.vue';
import DropDown from '../components/DropDown.vue';
import Notification from '../components/Notification.vue';
import Pagination from '../components/Pagination.vue';
import {
    Switch
} from '@headlessui/vue';

import Switcher from '../components/Switch.vue';

export default {
    components: {
        Modal,
        Button,
        Accordion,
        Switch,
        DropDown,
        Notification,
        Switch,
        Pagination,
        Switcher
    },
    props: ['id'],
    data() {
        return {
            brand: null,
            expander_id: 1,
            selection: [],
            wooCommerceCategories: [],
            show: false,
            success: false,
            contentStats: {
                total_count: 0,
                product_count: 0,
                page_count: 0,
                post_count: 0,
                article_count: 0,
            },
            product_search_terms: null,
            product_search_results: [],
            page_search_terms: null,
            page_search_results: [],
            post_search_terms: null,
            post_search_results: [],
            article_search_terms: null,
            article_search_results: [],
            product_pagination: {
                current_page_first_index: 0,
                current_page_last_index: 0,
                total_results_count: 0,
                current_page: 0,
                total_pages: 0,
                items_per_page: 100
            },
            page_pagination: {
                current_page_first_index: 0,
                current_page_last_index: 0,
                total_results_count: 0,
                current_page: 0,
                total_pages: 0,
                items_per_page: 100
            },
            post_pagination: {
                current_page_first_index: 0,
                current_page_last_index: 0,
                total_results_count: 0,
                current_page: 0,
                total_pages: 0,
                items_per_page: 100
            },
            article_pagination: {
                current_page_first_index: 0,
                current_page_last_index: 0,
                total_results_count: 0,
                current_page: 0,
                total_pages: 0,
                items_per_page: 100
            },
            old_brand: null, // used to check number changes
            number_of_changes: 0,
            queued_sync_count: 0,
            syncCountIntervalHandle: null,
            currently_saving: false

        }
    },
    created() {

      
        axios.get('/wp-json/dswaves/v1/get_sync_brand', {
                params: {
                    id: this.id
                }
            })
            .then(response => {
                this.brand = response.data.data;

                this.productHandleClick(1);
                this.pageHandleClick(1);
                this.postHandleClick(1);
                this.articleHandleClick(1);

                this.old_brand = JSON.parse(JSON.stringify(this.brand));

                const self = this;  
                self.setSyndicationQueueCount ();        
                this.syncCountIntervalHandle = setInterval(function(){
                    self.setSyndicationQueueCount ();
                }, 5000);
            })
            .catch(error => {
                console.log(error);
            });

    },
    beforeRouteLeave: function(to, from, next) {
        clearInterval (this.syncCountIntervalHandle);
        next();
    },
    watch: {
        "brand": {
            deep: true,
            handler(value) {

                this.setContentCount('product_count', this.brand.settings.enable_products, this.brand.settings.enable_all_products, this.brand.products);
                this.setContentCount('post_count', this.brand.settings.enable_posts, this.brand.settings.enable_all_posts, this.brand.posts);
                this.setContentCount('page_count', this.brand.settings.enable_pages, this.brand.settings.enable_all_pages, this.brand.pages);
                this.setContentCount('article_count', this.brand.settings.enable_articles, this.brand.settings.enable_all_articles, this.brand.knowledgebase_articles);

                this.contentStats.total_count = 0;

                if (this.brand.settings.enable_products)
                    this.contentStats.total_count += this.contentStats.product_count;

                if (this.brand.settings.enable_pages)
                    this.contentStats.total_count += this.contentStats.page_count;

                if (this.brand.settings.enable_posts)
                    this.contentStats.total_count += this.contentStats.post_count;

                if (this.brand.settings.enable_articles)
                    this.contentStats.total_count += this.contentStats.article_count;


                // number of changes
                var changeCounter = 0;
                var equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);

                var app = this;

               
                Object.keys(app.brand.settings).forEach(function (key, index) {

                    if (app.old_brand.settings[key])
                        app.old_brand.settings[key] = 1;
                    else
                        app.old_brand.settings[key] = 0;

                    if (app.brand.settings[key])
                        app.brand.settings[key] = 1;
                    else
                        app.brand.settings[key] = 0;         

                    var isSame = equals(app.old_brand.settings[key], app.brand.settings[key]);

                    if (!isSame)
                        changeCounter++;
                });

                Object.keys(app.brand.pages).forEach(function (key, index) {
                    var isSame = equals(app.old_brand.pages[key].enabled, app.brand.pages[key].enabled);
                    if (!isSame)
                        changeCounter++;
                });

                Object.keys(app.brand.knowledgebase_articles).forEach(function (key, index) {
                    var isSame = equals(app.old_brand.knowledgebase_articles[key].enabled, app.brand.knowledgebase_articles[key].enabled);
                    if (!isSame)
                        changeCounter++;
                });

                Object.keys(app.brand.posts).forEach(function (key, index) {
                    var isSame = equals(app.old_brand.posts[key].enabled, app.brand.posts[key].enabled);
                    if (!isSame)
                        changeCounter++;
                });

                Object.keys(app.brand.products).forEach(function (key, index) {
                    var isSame = equals(app.old_brand.products[key].enabled, app.brand.products[key].enabled);
                    if (!isSame)
                        changeCounter++;
                });

                app.number_of_changes = changeCounter;
            }
        }
    },
    methods: {
        closeModal() {
            this.show = false;
        },
        emitSuccess(e) {
            this.success = false;
        },
        save(dsWavesCatID, dsWavesCatChildID) {

            //get the selected category from selection
            let selectedCategory = this.selection.find(element => element.syndID == dsWavesCatChildID);

            axios.post('/wp-json/dswaves/v1/save_woo_category', {
                    dsWavesCatID: dsWavesCatID,
                    dsWavesCatChildID: dsWavesCatChildID,
                    dsWavesCatGrandChildID: null,
                    term_id: selectedCategory.selected.term_id
                })
                .then(response => {
                    this.success = true;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        wooCommerceSelected(e) {
            //check if syndID number exists on selection syndID number
            let selectedCategory = this.selection.find(element => element.syndID == e.syndID);
            if (selectedCategory) {
                //    console.log(selectedCategory);
                selectedCategory.selected = e.selected;
            } else {
                //if not, add it
                this.selection.push(e);
            }

        },
        clickContentTypeOnOff(type) {


            if (type == 'products')
                this.brand.settings.enable_products = !this.brand.settings.enable_products;
            else if (type == 'posts')
                this.brand.settings.enable_posts = !this.brand.settings.enable_posts;
            else if (type == 'pages')
                this.brand.settings.enable_pages = !this.brand.settings.enable_pages;
            else if (type == 'articles')
                this.brand.settings.enable_articles = !this.brand.settings.enable_articles;

        },
        clickContentTypeAllOnOff(type) {

            if (type == 'products')
                this.brand.settings.enable_all_products = !this.brand.settings.enable_all_products;
            else if (type == 'posts')
                this.brand.settings.enable_all_posts = !this.brand.settings.enable_all_posts;
            else if (type == 'pages')
                this.brand.settings.enable_all_pages = !this.brand.settings.enable_all_pages;
            else if (type == 'articles')
                this.brand.settings.enable_all_articles = !this.brand.settings.enable_all_articles;

            this.product_search_terms = null;
            this.page_search_terms = null;
            this.post_search_terms = null;
            this.article_search_terms = null;

            this.product_pagination.current_page = 1;
            this.page_pagination.current_page = 1;
            this.post_pagination.current_page = 1;
            this.article_pagination.current_page = 1;
        },
        setContentCount(type, enabled, enabledAll, items) {

            var returnCount = 0;

            if (!enabled || enabled && enabledAll) // turned off or all selected
            {
                returnCount = items.length;
            }

            if (enabled && !enabledAll) {

                for (var i in items) {
                    if (items[i].enabled)
                        returnCount++;
                }
            }

            this.contentStats[type] = returnCount;
        },
        changeResultsPerPage (value) {
            this.product_pagination.items_per_page = value;
            this.product_pagination.current_page = 0;
            this.productHandleClick (1);

            this.page_pagination.items_per_page = value;
            this.page_pagination.current_page = 0;
            this.pageHandleClick (1);

            this.post_pagination.items_per_page = value;
            this.post_pagination.current_page = 0;
            this.postHandleClick (1);

            this.article_pagination.items_per_page = value;
            this.article_pagination.current_page = 0;
            this.articleHandleClick (1);
        },
        productSearchKeyUp() {
           
            if (this.product_search_terms)
            {
                var results = JSON.parse(JSON.stringify(this.brand.products));

                var searchParts = this.product_search_terms.split (" ", 1000);
                if (searchParts.length)
                {
                    for (var i in searchParts)
                    {
                        if (searchParts[i])
                        {
                            for (var y = results.length - 1 ; y >= 0 ; y--)
                            {
                                if (results[y].name.toLowerCase ().search(searchParts[i].toLowerCase ()) == -1)
                                {
                                    results.splice (y, 1);
                                }
                            }
                        }
                        
                    }
                }

                this.product_search_results = results;
                this.product_pagination.current_page = -1;
            }
            else
            {
                this.productHandleClick (1);
            }
            
        },
        productPrevHandle() {
            var usePage = this.product_pagination.current_page - 1;
            if (usePage < 1) {
                usePage = 1;
                return;
            }

            this.productHandleClick(usePage);
        },
        productNextHandle() {
            var usePage = this.product_pagination.current_page + 1;
            if (usePage > this.product_pagination.total_pages) {
                usePage = this.product_pagination.total_pages;
                return;
            }

            this.productHandleClick(usePage);
        },
        productHandleClick(page) {
            
            if (this.product_pagination.current_page == page) {
               return;
            }

            this.product_pagination.current_page = page;

            this.product_pagination.total_results_count = this.brand.products.length;
            this.product_pagination.total_pages = Math.ceil(this.brand.products.length / this.product_pagination.items_per_page);
            this.product_pagination.current_page_first_index = this.product_pagination.current_page * this.product_pagination.items_per_page - this.product_pagination.items_per_page + 1;
            this.product_pagination.current_page_last_index = this.product_pagination.current_page * this.product_pagination.items_per_page;
            if (this.product_pagination.current_page_last_index > this.brand.products.length)
                this.product_pagination.current_page_last_index = this.brand.products.length;

            if (document.getElementById('scroll_to_top_of_products') != null) //  typeof(document.getElementById('scroll_to_top_of_products')) != 'undefined')
                document.getElementById("scroll_to_top_of_products").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});   
        },
        pageSearchKeyUp() {
           
            if (this.page_search_terms)
            {
                var results = JSON.parse(JSON.stringify(this.brand.pages));

                var searchParts = this.page_search_terms.split (" ", 1000);
                if (searchParts.length)
                {
                    for (var i in searchParts)
                    {
                        if (searchParts[i])
                        {
                            for (var y = results.length - 1 ; y >= 0 ; y--)
                            {
                                if (results[y].name.toLowerCase ().search(searchParts[i].toLowerCase ()) == -1)
                                {
                                    results.splice (y, 1);
                                }
                            }
                        }
                        
                    }
                }

                this.page_search_results = results;
                this.page_pagination.current_page = -1;
            }
            else
            {
                this.pageHandleClick (1);
            }
            
        },
        pagePrevHandle() {
            var usePage = this.page_pagination.current_page - 1;
            if (usePage < 1) {
                usePage = 1;
                return;
            }

            this.pageHandleClick(usePage);
        },
        pageNextHandle() {
            var usePage = this.page_pagination.current_page + 1;
            if (usePage > this.page_pagination.total_pages) {
                usePage = this.page_pagination.total_pages;
                return;
            }

            this.pageHandleClick(usePage);
        },
        pageHandleClick(page) {
            
            if (this.page_pagination.current_page == page) {
               return;
            }

            this.page_pagination.current_page = page;

            this.page_pagination.total_results_count = this.brand.pages.length;
            this.page_pagination.total_pages = Math.ceil(this.brand.pages.length / this.page_pagination.items_per_page);
            this.page_pagination.current_page_first_index = this.page_pagination.current_page * this.page_pagination.items_per_page - this.page_pagination.items_per_page + 1;
            this.page_pagination.current_page_last_index = this.page_pagination.current_page * this.page_pagination.items_per_page;
            if (this.page_pagination.current_page_last_index > this.brand.pages.length)
                this.page_pagination.current_page_last_index = this.brand.pages.length;

            if (document.getElementById('scroll_to_top_of_pages') != null) //  typeof(document.getElementById('scroll_to_top_of_pages')) != 'undefined')
                document.getElementById("scroll_to_top_of_pages").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});   
        },
        postSearchKeyUp() {
           
            if (this.post_search_terms)
            {
                var results = JSON.parse(JSON.stringify(this.brand.posts));

                var searchParts = this.post_search_terms.split (" ", 1000);
                if (searchParts.length)
                {
                    for (var i in searchParts)
                    {
                        if (searchParts[i])
                        {
                            for (var y = results.length - 1 ; y >= 0 ; y--)
                            {
                                if (results[y].name.toLowerCase ().search(searchParts[i].toLowerCase ()) == -1)
                                {
                                    results.splice (y, 1);
                                }
                            }
                        }
                        
                    }
                }

                this.post_search_results = results;
                this.post_pagination.current_page = -1;
            }
            else
            {
                this.postHandleClick (1);
            }
            
        },
        postPrevHandle() {
            var usePage = this.post_pagination.current_page - 1;
            if (usePage < 1) {
                usePage = 1;
                return;
            }

            this.postHandleClick(usePage);
        },
        postNextHandle() {
            var usePage = this.post_pagination.current_page + 1;
            if (usePage > this.post_pagination.total_pages) {
                usePage = this.post_pagination.total_pages;
                return;
            }

            this.postHandleClick(usePage);
        },
        postHandleClick(page) {
            
            if (this.post_pagination.current_page == page) {
            return;
            }

            this.post_pagination.current_page = page;

            this.post_pagination.total_results_count = this.brand.posts.length;
            this.post_pagination.total_pages = Math.ceil(this.brand.posts.length / this.post_pagination.items_per_page);
            this.post_pagination.current_page_first_index = this.post_pagination.current_page * this.post_pagination.items_per_page - this.post_pagination.items_per_page + 1;
            this.post_pagination.current_page_last_index = this.post_pagination.current_page * this.post_pagination.items_per_page;
            if (this.post_pagination.current_page_last_index > this.brand.posts.length)
                this.post_pagination.current_page_last_index = this.brand.posts.length;

            if (document.getElementById('scroll_to_top_of_posts') != null) //  typeof(document.getElementById('scroll_to_top_of_posts')) != 'undefined')
                document.getElementById("scroll_to_top_of_posts").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});   
        },
        articleSearchKeyUp() {
           
            if (this.article_search_terms)
            {
                var results = JSON.parse(JSON.stringify(this.brand.knowledgebase_articles));

                var searchParts = this.article_search_terms.split (" ", 1000);
                if (searchParts.length)
                {
                    for (var i in searchParts)
                    {
                        if (searchParts[i])
                        {
                            for (var y = results.length - 1 ; y >= 0 ; y--)
                            {
                                if (results[y].name.toLowerCase ().search(searchParts[i].toLowerCase ()) == -1)
                                {
                                    results.splice (y, 1);
                                }
                            }
                        }
                        
                    }
                }

                this.article_search_results = results;
                this.article_pagination.current_page = -1;
            }
            else
            {
                this.articleHandleClick (1);
            }
            
        },
        articlePrevHandle() {
            var usePage = this.article_pagination.current_page - 1;
            if (usePage < 1) {
                usePage = 1;
                return;
            }

            this.articleHandleClick(usePage);
        },
        articleNextHandle() {
            var usePage = this.article_pagination.current_page + 1;
            if (usePage > this.article_pagination.total_pages) {
                usePage = this.article_pagination.total_pages;
                return;
            }

            this.articleHandleClick(usePage);
        },
        articleHandleClick(page) {
            
            if (this.article_pagination.current_page == page) {
            return;
            }

            this.article_pagination.current_page = page;

            this.article_pagination.total_results_count = this.brand.knowledgebase_articles.length;
            this.article_pagination.total_pages = Math.ceil(this.brand.knowledgebase_articles.length / this.article_pagination.items_per_page);
            this.article_pagination.current_page_first_index = this.article_pagination.current_page * this.article_pagination.items_per_page - this.article_pagination.items_per_page + 1;
            this.article_pagination.current_page_last_index = this.article_pagination.current_page * this.article_pagination.items_per_page;
            if (this.article_pagination.current_page_last_index > this.brand.knowledgebase_articles.length)
                this.article_pagination.current_page_last_index = this.brand.knowledgebase_articles.length;

            if (document.getElementById('scroll_to_top_of_articles') != null) //  typeof(document.getElementById('scroll_to_top_of_articles')) != 'undefined')
                document.getElementById("scroll_to_top_of_articles").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});   
        },
        saveBrand () {

            this.currently_saving = true;

            axios.post('/wp-json/dswaves/v1/save_sync_brand', {
                params: {
                    brand: {
                        id: this.brand.id,
                        settings: this.brand.settings,
                        pages: this.brand.pages,
                        posts: this.brand.posts,
                        products: this.brand.products,
                        knowledgebase_articles: this.brand.knowledgebase_articles
                    }
                }
            })
            .then(response => {

                this.currently_saving = false;

                if (response.data == 'currently_syncing_error')
                    alert ('Cannot save. Syndication sync currently in progress. Try again later.');

                if (response.data != 'currently_syncing_error')
                {
                    this.queued_sync_count = response.data;
                    this.number_of_changes = 0;
                    this.old_brand = JSON.parse(JSON.stringify(this.brand));

                    this.setSyndicationQueueCount ();
                }
                    
            })
            .catch(error => {
                console.log(error);
            });

        },
        setSyndicationQueueCount () {
            axios.get('/wp-json/dswaves/v1/get_sync_queue_count')
            .then(response => {
                this.queued_sync_count = response.data;
            })
            .catch(error => {
                console.log(error);
            });
        }
    }
}
</script>

<style lang="css" scoped>
</style>
