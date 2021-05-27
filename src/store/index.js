import Vue         from 'vue'
import Vuex        from 'vuex'
import drawerRight from "./modules/drawerRight";
import html from "./modules/html";
import array from "./modules/array";
import date from "./modules/date";
import jsFunction from "./modules/jsFunction";
import jsGenerator from "./modules/jsGenerator";
import object from "./modules/object";
import string from "./modules/string";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: { drawerRight, html, array, date, jsFunction, jsGenerator, object, string }
})
