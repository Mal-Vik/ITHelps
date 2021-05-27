<template lang="pug">
    .Object
        t-j-s-table(:title='title' :items='items')
</template>

<script>
    import { mapGetters } from 'vuex'
    import TJSTable from '../../../components/templates/TJSTable'

    export default {
        name: 'Object',
        components: { TJSTable },
        data: () => ({
            title: 'JS Core Object Props & Methods',
        }),
        computed: {
            ...mapGetters({ items: 'allJSObject' }),
        },
        async mounted() {
            await this.$store.dispatch('fetchJSObject')
        },
    }
</script>

<style scoped lang="scss">
    .Object {
        margin: 5px;
    }
</style>
