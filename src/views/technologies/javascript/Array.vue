<template lang="pug">
    .Array
        v-card(dark)
            v-card-title.pa-1
                | {{title}}
                v-spacer
                v-switch.mt-2( v-model="singleExpand" label="Single Expand")
                v-spacer
                v-switch.mt-2( v-model="showExpulsion" label="Expulsion")
                v-spacer
                v-text-field(v-model='search', append-icon='fas fa-search', label='Search', single-line='', hide-details='')
            v-data-table.elevation-1(dense :headers='filteredHeaders' :items='filteredItems' :search='search'
                :itemsPerPage='itemsPerPage' multi-sort item-key='name' :loading='loading'
                :loading-text='loadingText' :single-expand='singleExpand'
                :expanded.sync='expanded' show-expand)
                template(v-slot:item='{item, index}')
                    tr(:class='item.isExpulsion ? "bg-lightpink" : ""')
                        td#tdIndexId.align-center {{ index+1 }}|{{ item.id }}
                        td#tdIconExpulsion(v-show='showExpulsion')
                            span
                                template(v-for='(value, key) in item.expulsion')
                                    v-tooltip(bottom)
                                        template(v-slot:activator="{on}")
                                            v-icon(dark v-on="on" size=20) ${{ value }}
                                        span {{value.toUpperCase().replace('_', ' ')}}
                        td#tdIconDescription
                            span
                                template(v-for='(value, key) in item.designation')
                                    v-tooltip.pl-2(top)
                                        template(v-slot:activator="{on}")
                                            v-icon(dark v-on="on" size=20) ${{ value }}
                                        span {{value.toUpperCase().replace('_', ' ')}}
                        td#tdName
                            a(:href='"https://developer.mozilla.org/"+item.link' target='_blank' :title='item.description')
                                code
                                    span(v-html='item.name' style='white-space: nowrap;')
                        td
                            v-icon.pr-4(size=20 v-if='!item.isTranslate') $no_translate
                            | {{ item.description }}
                template(v-slot:expanded-item='{ headers, item }')
                    td(:colspan='headers.length') More info about {{ item.name }}

</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'Array',
        // el: '',
        // render: {},
        props: [],
        data: () => ({

            title: 'JS Core Array Props & Methods',
            search: '',
            headers: [
                { text: '#', align: 'center', sortable: false, class: [ 'pl-1', 'pr-1' ], value: 'id' },
                { text: 'Expulsion', align: 'center', sortable: true, class: [ 'pl-1', 'pr-1' ], value: 'expulsion' },
                { text: 'Designation', align: 'center', sortable: true, class: [ 'pl-1', 'pr-1' ], value: 'designation' },
                { text: 'Property', align: 'start', class: [ 'pl-1', 'pr-1' ], value: 'name', },
                { text: 'Description', class: [ 'pl-1', 'pr-1' ], value: 'description' },
                { text: '', value: 'data-table-expand' },
                //{ text: 'CallBack', class: [ 'pl-1', 'pr-1' ], value: 'callback' },
                //{ text: 'ES', class: [ 'pl-1', 'pr-1' ], value: 'es' },

            ],
            itemsPerPage: -1,
            expanded: [],
            singleExpand: true,
            loading: true,
            loadingText: 'Loading... Please wait',
            selectedFilter:'',
            showExpulsion: true
        }),
        watch: {
            items(items) {
                this.loading = !items
                console.log("JS Array =>", items)
            }
        },
        computed: {
            ...mapGetters({ items: 'allJSArray' }),
            filteredItems() {
                //return this.items.filter(item => !item['expulsion'].some((i)=>i === this.selectedFilter))
                return this.items.filter(item => !this.showExpulsion ? !item.isExpulsion : true)
            },
            filteredHeaders() {
                return this.headers.filter(item => !this.showExpulsion ? !(item.value === "expulsion") : true)
            }
        },
        methods: {
            tm(name) {
                let temp = (/(?!Array$)\.\S+/g).test(name) ? name.match(/(?!Array$)\.\S+/g)[0] : name;
                temp = temp.replace(/(.prototype)/, '')
                return temp
            }
        },
        async mounted() {
            await this.$store.dispatch('fetchJSArray')
        },
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

        #tdIndexId {
            text-align: center;
            font-size: 12px !important;
        }

        #tdIconExpulsion span, #tdIconDescription span {
            display: flex;
            justify-content: center;
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
