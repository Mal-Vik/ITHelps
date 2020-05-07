<template lang="pug">
    .HTML
        v-card
            v-card-title
                | {{title}}
                v-spacer
                v-text-field(v-model='search', append-icon='fas fa-search', label='Search', single-line='', hide-details='')
            v-data-table.elevation-1(dense :headers='headers' :items='items' :search='search'
                :itemsPerPage='itemsPerPage' multi-sort item-key='name' :loading='loading'
                :loading-text='loadingText')

                template(v-slot:item='{item}')
                    tr(:class='item.isExpulsion ? "bg-lightpink" : "bg-lightgray"')
                        td {{ item.id }}
                        td#tdIcon
                            span
                                template(v-for='(value, key) in item.expulsion')
                                    v-icon(size=20) ${{ value }}
                                v-icon(size=20 v-if='!item.isTranslate') $no_translate
                        td#tdName
                            a(:href='"https://developer.mozilla.org/"+item.link' target='_blank' :title='item.description')
                                code {{ item.name }}
                        td {{ item.description }}
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'HTML',
        props: [],
        data: () => ({
            title: 'HTML Elements',
            search: '',
            headers: [
                { text: '#', align: 'center', sortable: false, value: 'id' },
                { text: 'Expulsion', align: 'center', sortable: false, value: 'expulsion' },
                { text: 'Element', align: 'start', value: 'name', },
                { text: 'Description', value: 'description' },
            ],
            itemsPerPage: -1,
            loading: true,
            loadingText: 'Loading... Please wait'
        }),
        watch: {
            items(items) {
                this.loading = !items
                console.log("HTML =>", items)
            }
        },
        computed: { ...mapGetters({ items: 'allHtmlElements' }) },
        methods: {},
        beforeCreate: function () {},
        create: function () {},
        beforeMount: function () {},
        async mounted() {
            await this.$store.dispatch('fetchHtmlElements')
        },
        beforeUpdate: function () {},
        updated: function () {},
        beforeDestroy: function () {},
        destroyed: function () {}
    }
</script>

<style lang="scss">
    .HTML {
        margin: 20px;
    }

    #tdIcon span {
        display: flex;
        justify-content: center;
        i {
            padding-left: 2px;
        }
    }

    #tdName a code {
        font-size: 18px;
        padding: 5px;
    }

    .bg-lightpink{
        background:lightpink
    }
    .bg-lightgray{
        background:lightgray
    }
</style>
