import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import JavaScript from '../views/JavaScript'
import VueJS from '../views/VueJS'
import Frame from '../views/Frame'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
    {
        path: '/js',
        name: 'JavaScript',
        component: JavaScript,
    },
    {
        path: '/vue-js',
        name: 'VueJS',
        component: VueJS,
    },
    {
        path: '/frame',
        name: 'Frame',
        component: Frame,
    },
]

const router = new VueRouter({
    routes,
})

export default router
