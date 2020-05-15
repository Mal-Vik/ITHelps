<template lang="pug">
    .Array
        t-j-s-table(:title='title' :items='items')
</template>

<script>
    import { mapGetters } from 'vuex'
    import TJSTable from '../../../components/templates/TJSTable'

    export default {
        name: 'Array',
        components: { TJSTable },
        data: () => ({
            title: 'JS Core Array Props & Methods',
        }),
        computed: {
            ...mapGetters({ items: 'allJSArray' }),
        },
        async mounted() {
            await this.$store.dispatch('fetchJSArray')
        },
    }
</script>

<style lang="scss">
    .Array {
        margin: 5px;
    }
</style>
