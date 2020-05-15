import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import vuetify from './plugins/vuetify'
import VuePapaParse from './plugins/vue-papa-parse'
import VueFriendlyIframe from './plugins/vue-friendly-iframe'

//import './assets/styles/style.scss'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    VuePapaParse,
    VueFriendlyIframe,
    render: h => h(App),
}).$mount('#app')
