<template lang="pug">
    .Array
        v-card(dark)
            v-card-title.pa-1
                | {{title}}
                v-spacer
                v-text-field(v-model='search', append-icon='fas fa-search', label='Search', single-line='', hide-details='')
            v-data-table.elevation-1(dense :headers='headers' :items='items' :search='search'
                :itemsPerPage='itemsPerPage' multi-sort item-key='name' :loading='loading'
                :loading-text='loadingText')

                template(v-slot:item='{item, index}')
                    tr(:class='item.isExpulsion ? "bg-lightpink" : ""')
                        td#indexId.align-center {{ index+1 }}|{{ item.id }}
                        td#tdIcon
                            span
                                template(v-for='(value, key) in item.expulsion')
                                    v-icon(size=20) ${{ value }}
                                template(v-for='(value, key) in item.designation')
                                    v-icon(size=20) ${{ value }}
                                v-icon(size=20 v-if='!item.isTranslate') $no_translate
                                v-icon(size=20 v-if='(/prototype/g).test(item.name)' area-label='lkjlkj') $prototype
                        td#tdName
                            a(:href='"https://developer.mozilla.org/"+item.link' target='_blank' :title='item.description')
                                code
                                    span(v-html='tm(item.name)' style='white-space: nowrap;')
                        td {{ item.description }}
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'Array',
        // el: '',
        // render: {},
        props: [],
        data: () => ({
            title: 'JS Core Props & Methods',
            search: '',
            headers: [
                { text: '#', align: 'center', sortable: false, class: [ 'pl-1', 'pr-1' ], value: 'id' },
                { text: 'Expulsion', align: 'center', sortable: false, class: [ 'pl-1', 'pr-1' ], value: 'expulsion' },
                { text: 'Element', align: 'start', class: [ 'pl-1', 'pr-1' ], value: 'name', },
                { text: 'Description', class: [ 'pl-1', 'pr-1' ], value: 'description' },
                { text: 'CallBack', class: [ 'pl-1', 'pr-1' ], value: 'callback' },
                { text: 'ES', class: [ 'pl-1', 'pr-1' ], value: 'es' },

            ],
            itemsPerPage: -1,
            loading: true,
            loadingText: 'Loading... Please wait'
        }),
        watch: {
            items(items) {
                this.loading = !items
                console.log("JS Array =>", items)
            }
        },
        computed: { ...mapGetters({ items: 'allJSArray' }) },
        methods: {
            tm(name) {
                console.log(name)
                let temp = (/(?!Array$)\.\S+/g).test(name) ? name.match(/(?!Array$)\.\S+/g)[0] : name;
                // console.log(temp)
                temp = temp.replace(/(.prototype)/, '')
                return temp
            }
        },
        beforeCreate: function () {},
        create: function () {},
        beforeMount: function () {},
        async mounted() {
            await this.$store.dispatch('fetchJSArray')
        },
        beforeUpdate: function () {},
        updated: function () {},
        beforeDestroy: function () {},
        destroyed: function () {}
    }
</script>

<style lang="scss">
    .Array {
        margin: 5px;
        .v-card .v-data-table td {
            padding: 0 4px !important;
        }
        .v-data-table th, .v-data-table td {
            font-size: inherit !important;
        }

        #indexId {
            text-align: center;
            font-size: 12px !important;
        }

        #tdIcon span {
            display: flex;
            justify-content: center;
            i {
                padding-left: 2px;
            }
        }

        #tdName a code {
            font-size: 16px;
            padding: 3px;
        }

        .bg-lightpink {
            background: darkmagenta;
        }

        .bg-lightgray {
            background: lightgray
        }
    }
</style>
