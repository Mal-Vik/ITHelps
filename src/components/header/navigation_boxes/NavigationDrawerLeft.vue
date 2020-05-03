<template lang='pug'>
    v-navigation-drawer.black.lighten-4(v-model='isActiveDrawerLeft', app)
        v-list.white-bg(dense)
            v-list-item(@click='openSubDrawerLeft')
                v-list-item-action
                    v-icon exit_to_app
                v-list-item-content
                    v-list-item-title Open Temporary Drawer
            v-subheader.mt-3.grey--text.text--darken-1.text-uppercase begetter
            v-list
                v-list-item(v-for='item in items', :key='item.text', @click='')
                    v-list-item-avatar(v-if='item.text !== ""')
                        img(:src='`https://randomuser.me/api/portraits/men/${item.picture}.jpg`', alt='')
                    v-list-item-title(v-text='item.text', v-if='item.text !== ""')
</template>

<script>
    import {mapGetters} from 'vuex'
    import axios    from 'axios'
    import resource from 'resource-axios' // Применение 'resource-axios'
    const DB = resource(process.env.VUE_APP_DB, axios) // Применение 'resource-axios'

    export default {
        name: 'NavigationDrawerLeft',
        props: ['isActiveDrawerLeft'],
        data: () => ({
            items: [],
        }),
        mounted() {
            // axios.get(process.env.VUE_APP_DB + process.env.VUE_APP_DB_TECHNOLOGIES).then(response => { // применение 'axios'
            DB.get(process.env.VUE_APP_DB_BEGETTER).then(response => {
                // Применение 'resource-axios'
                this.items = this.$papa.parse(response.data, { header: true }).data
            })
        },
        methods: {
            openSubDrawerLeft() {
                // this.$parent.$options.parent.showSubNavigationDrawerLeft()
                // console.log(this.$root.$options)
                console.log('Сработал метод открытия Sub Drawer Right!')
            },
        },
    }
</script>

<style>
    .white-bg {
        background: #ffffff !important;
    }
</style>
