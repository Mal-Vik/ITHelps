export default {
    // actions - содержит функции для получения данных в store через mutations обновляя state
    actions: {
        async fetchDrawerRight(ctx) {
            const response = await fetch(process.env.VUE_APP_DB_URL + "/" + process.env.VUE_APP_TABLE_DRAWER_RIGHT)
            const drawerRight = await response.json();
            ctx.commit('updateDrawerRight', drawerRight)
        }
    },
    // mutations - содежит функции которые будут напрямую обновлять store
    mutations: {
        updateDrawerRight(state, drawerRight) {
            state.drawerRight = drawerRight
        }
    },
    //state - определяем изначальные данные
    state: {
        drawerRight: []
    },
    // getters - для трансформации данных и получения их из store
    getters: {
        allDrawerRight(state) {
            return state.drawerRight
        },
        drawerRightSubId: state => id => {
            try {
                return state.drawerRight.find(todo => todo.sub_drawer.find(to => to.id === id))['sub_drawer'].find(todo => todo.id === id)
            } catch (e) { return '' }
        }
    }
}
