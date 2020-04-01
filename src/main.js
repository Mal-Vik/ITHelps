import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
// import VueFriendlyIframe from './plugins/vue-friendly-iframe'
import './assets/styles/style.scss'

import VueFriendlyIframe from 'vue-friendly-iframe'
Vue.component('vue-friendly-iframe', VueFriendlyIframe)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    // VueFriendlyIframe,
    render: h => h(App),
}).$mount('#app')
