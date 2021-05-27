<template lang="pug">
    .Function
        t-j-s-table(:title='title' :items='items')
</template>

<script>
    import { mapGetters } from 'vuex'
    import TJSTable from '../../../components/templates/TJSTable'

    export default {
        name: 'Function',
        components: { TJSTable },
        data: () => ({
            title: 'JS Core Function Props & Methods',
        }),
        computed: {
            ...mapGetters({ items: 'allJSFunction' }),
        },
        async mounted() {
            await this.$store.dispatch('fetchJSFunction')
        },
    }
</script>

<style scoped lang="scss">
    .Function {
        margin: 5px;
    }
</style>
