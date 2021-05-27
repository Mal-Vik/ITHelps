<template lang="pug">
    .String
        t-j-s-table(:title='title' :items='items')
</template>

<script>
    import { mapGetters } from 'vuex'
    import TJSTable from '../../../components/templates/TJSTable'

    export default {
        name: 'String',
        components: { TJSTable },
        data: () => ({
            title: 'JS Core String Props & Methods',
        }),
        computed: {
            ...mapGetters({ items: 'allJSString' }),
        },
        async mounted() {
            await this.$store.dispatch('fetchJSString')
        },
    }
</script>

<style scoped lang="scss">
    .String {
        margin: 5px;
    }
</style>
