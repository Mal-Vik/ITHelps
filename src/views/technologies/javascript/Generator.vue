<template lang="pug">
    .Generator
        t-j-s-table(:title='title' :items='items')
</template>

<script>
    import { mapGetters } from 'vuex'
    import TJSTable from '../../../components/templates/TJSTable'

    export default {
        name: 'Generator',
        components: { TJSTable },
        data: () => ({
            title: 'JS Core Generator Props & Methods',
        }),
        computed: {
            ...mapGetters({ items: 'allJSGenerator' }),
        },
        async mounted() {
            await this.$store.dispatch('fetchJSGenerator')
        },
    }
</script>

<style scoped lang="scss">
    .Generator {
        margin: 5px;
    }
</style>
