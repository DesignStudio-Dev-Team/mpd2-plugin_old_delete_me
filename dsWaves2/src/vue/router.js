import { createRouter, createWebHashHistory } from 'vue-router'
import Brands from './pages/Brands.vue'
import Approvals from './pages/Approvals.vue'
import Request from './pages/Request.vue'
import Support from './pages/Support.vue'
import Settings from './pages/Settings.vue'
import About from './pages/About.vue'
import Brand from './pages/Brand.vue'

const routes = [
    { path: '/', component: Brands,  meta: { scrollTop: 0, }, },
    { path: '/brand/:id', component: Brand, props: true, name: 'Brand', meta: { scrollTop: 0, }, },
    { path: '/approvals', component: Approvals,  meta: { scrollTop: 0, }, },
    { path: '/request', component: Request,  meta: { scrollTop: 0, }, },
    { path: '/support', component: Support,  meta: { scrollTop: 0, }, },
    { path: '/settings', component: Settings,  meta: { scrollTop: 0, }, },
    { path: '/about', component: About,  meta: { scrollTop: 0, }, },

]

const scrollBehavior = (to, from, savedPosition) => {
    return savedPosition || { top: 0, left: 0 }
}

const router = createRouter({ history: createWebHashHistory(), routes, scrollBehavior })
export default router