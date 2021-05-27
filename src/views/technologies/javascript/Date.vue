<template lang="pug">
    .Date
        t-j-s-table(:title='title' :items='items')
</template>

<script>
    import { mapGetters } from 'vuex'
    import TJSTable from '../../../components/templates/TJSTable'

    export default {
        name: 'Date',
        components: { TJSTable },
        data: () => ({
            title: 'JS Core Date Props & Methods',
        }),
        computed: {
            ...mapGetters({ items: 'allJSDate' }),
        },
        async mounted() {
            await this.$store.dispatch('fetchJSDate')
        },
    }
</script>

<style scoped lang="scss">
    .Date {
        margin: 5px;
    }
</style>
