<template lang='pug'>
    v-navigation-drawer.grey.lighten-4(v-model='isActiveDrawerRight' app clipped right)
        v-list(dense)
            template(v-for='(item, i) in items')
                v-layout(v-if='item.heading' :key='i' row align-center)
                    v-flex(xs6)
                        v-subheader(v-if='item.heading')
                            | {{ item.heading }}
                    v-flex.text-xs-right(xs6)
                        v-btn(small text) edit
                v-divider.my-3(v-else-if='item.divider' :key='i')
                v-list-item(v-else :key='i' @click.stop='openSubDrawerRight(item)')
                    v-list-item-action
                        v-icon {{ item.icon }}
                    v-list-item-content
                        v-list-item-title.grey--text
                            | {{ item.name }}
</template>

<script>
    import axios from 'axios'
    import resource from 'resource-axios' // Применение 'resource-axios'
    const DB = resource(process.env.VUE_APP_DB, axios) // Применение 'resource-axios'

    export default {
        name: 'NavigationDrawerRight',
        props: ['isActiveDrawerRight'],
        data: () => ({
            items: [],
        }),
        mounted() {
            // axios.get(process.env.VUE_APP_DB + process.env.VUE_APP_DB_TECHNOLOGIES).then(response => { // применение 'axios'
            DB.get(process.env.VUE_APP_DB_TECHNOLOGIES).then(response => {
                // Применение 'resource-axios'
                this.items = this.$papa.parse(response.data, { header: true }).data
            })
        },
        methods: {
            openSubDrawerRight(item) {
                this.$emit('emitDisplaySubDrawerRight', item)
                // this.$parent.$options.parent.showSubNavigationDrawerRight(item) // Альтернативный вариант
            },
        },
    }
</script>
