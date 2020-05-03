import Vue         from 'vue'
import Vuex        from 'vuex'
import drawerRight from "./modules/drawerRight";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: { drawerRight }
})
