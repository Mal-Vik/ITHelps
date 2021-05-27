import action from '../action'

export default {
    actions: {
        async fetchJSGenerator(ctx) {
            await ctx.commit('updateJSGenerator', await action(ctx, 'javascript/generator.html'))
        },
    },
    mutations: {
        updateJSGenerator(state, jsGenerator) {
            state.jsGenerator = jsGenerator
        },
    },
    state: {
        jsGenerator: [],
    },
    getters: {
        allJSGenerator(state) {
            return state.jsGenerator
        },
    },
}
