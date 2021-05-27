import Vue               from 'vue'
import VueRouter         from 'vue-router'
import Home              from '../views/Home.vue'
import JavaScript        from '../views/technologies/JavaScript'
import Array             from '../views/technologies/javascript/Array'
import Date             from '../views/technologies/javascript/Date'
import Function             from '../views/technologies/javascript/Function'
import Generator             from '../views/technologies/javascript/Generator'
import Json             from '../views/technologies/javascript/Json'
import Map             from '../views/technologies/javascript/Map'
import Math             from '../views/technologies/javascript/Math'
import Number             from '../views/technologies/javascript/Number'
import Object             from '../views/technologies/javascript/Object'
import Promise             from '../views/technologies/javascript/Promise'
import Reflect             from '../views/technologies/javascript/Reflect'
import RegExp             from '../views/technologies/javascript/RegExp'
import Set             from '../views/technologies/javascript/Set'
import String             from '../views/technologies/javascript/String'
import Symbol             from '../views/technologies/javascript/Symbol'
import WeakMap             from '../views/technologies/javascript/WeakMap'
import WeakSet             from '../views/technologies/javascript/WeakSet'
import VueJS             from '../views/technologies/VueJS'
import HTML              from '../views/technologies/HTML'
import Frame             from '../views/Frame'
import NotFoundComponent from '../views/NotFoundComponent'

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
        name: 'js',
        component: JavaScript,
        children: [
            { path: 'array', name: 'array', component: Array },
            { path: 'date', name: 'date', component: Date },
            { path: 'function', name: 'function', component: Function },
            { path: 'generator', name: 'generator', component: Generator },
            { path: 'json', name: 'json', component: Json },
            { path: 'map', name: 'map', component: Map },
            { path: 'math', name: 'math', component: Math },
            { path: 'number', name: 'number', component: Number },
            { path: 'object', name: 'object', component: Object },
            { path: 'promise', name: 'promise', component: Promise },
            { path: 'reflect', name: 'reflect', component: Reflect },
            { path: 'regexp', name: 'regexp', component: RegExp },
            { path: 'set', name: 'set', component: Set },
            { path: 'string', name: 'string', component: String },
            { path: 'symbol', name: 'symbol', component: Symbol },
            { path: 'weakmap', name: 'weakmap', component: WeakMap },
            { path: 'weakset', name: 'weakset', component: WeakSet },
        ],
    },
    {
        path: '/vue-js',
        name: 'VueJS',
        component: VueJS,
    },
    {
        path: '/html',
        name: 'HTML',
        component: HTML,
    },
    {
        path: '/frame/:id',
        name: 'Frame',
        component: Frame,
    },
    {
        // сопоставляется со всем
        path: '*',
        component: NotFoundComponent,
    },
]

const router = new VueRouter({
    routes,
})

export default router
