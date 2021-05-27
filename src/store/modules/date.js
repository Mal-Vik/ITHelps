import action from '../action'

export default {
    actions: {
        async fetchJSDate(ctx) {
            await ctx.commit('updateJSDate', await action(ctx, 'javascript/date.html'))
        },
    },
    mutations: {
        updateJSDate(state, jsDate) {
            state.jsDate = jsDate
        },
    },
    state: {
        jsDate: [],
    },
    getters: {
        allJSDate(state) {
            return state.jsDate
        },
    },
}
