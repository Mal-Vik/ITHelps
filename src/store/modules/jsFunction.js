import action from '../action'

export default {
    actions: {
        async fetchJSFunction(ctx) {
            await ctx.commit('updateJSFunction', await action(ctx, 'javascript/function.html'))
        },
    },
    mutations: {
        updateJSFunction(state, jsFunction) {
            state.jsFunction = jsFunction
        },
    },
    state: {
        jsFunction: [],
    },
    getters: {
        allJSFunction(state) {
            return state.jsFunction
        },
    },
}
