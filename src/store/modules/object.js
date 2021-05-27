import action from '../action'

export default {
    actions: {
        async fetchJSObject(ctx) {
            await ctx.commit('updateJSObject', await action(ctx, 'javascript/object.html'))
        },
    },
    mutations: {
        updateJSObject(state, jsObject) {
            state.jsObject = jsObject
        },
    },
    state: {
        jsObject: [],
    },
    getters: {
        allJSObject(state) {
            return state.jsObject
        },
    },
}
