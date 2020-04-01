<template>
    <v-navigation-drawer v-model="drawerRight" app clipped color="grey lighten-4" right>
        <v-list dense class="grey lighten-4">
            <template v-for="(item, i) in items">
                <v-layout v-if="item.heading" :key="i" row align-center>
                    <v-flex xs6>
                        <v-subheader v-if="item.heading">
                            {{ item.heading }}
                        </v-subheader>
                    </v-flex>
                    <v-flex xs6 class="text-xs-right">
                        <v-btn small text>edit</v-btn>
                    </v-flex>
                </v-layout>
                <v-divider v-else-if="item.divider" :key="i" dark class="my-3" />
                <v-list-item v-else :key="i" @click.stop="openSubDrawerRight(item)">
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="grey--text">
                            {{ item.label }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </template>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: 'NavigationDrawerRight',
        props: ['drawerRight'],
        data: () => ({
            items: [
                {
                    icon: 'lightbulb_outline',
                    label: 'JavaScript',
                    drawer: [
                        { icon: 'lightbulb_outline', text: 'ES1' },
                        { icon: 'lightbulb_outline', text: 'ES2' },
                        { icon: 'lightbulb_outline', text: 'ES3' },
                        { icon: 'lightbulb_outline', text: 'ES4' },
                        { icon: 'lightbulb_outline', text: 'ES5' },
                        { icon: 'lightbulb_outline', text: 'ES6' },
                        { icon: 'lightbulb_outline', text: 'ES7' },
                        { icon: 'lightbulb_outline', text: 'ES8' },
                        { icon: 'lightbulb_outline', text: 'ES9' },
                        { icon: 'lightbulb_outline', text: 'ES10' },
                        { icon: 'lightbulb_outline', text: 'ES11' },
                    ],
                    to: '/js',
                },
                {
                    icon: 'lightbulb_outline',
                    label: 'VueJS',
                    drawer: [
                        { icon: 'lightbulb_outline', text: 'Установка' },
                        { icon: 'lightbulb_outline', text: 'Хуки жизненного цикла экземпляра' },
                        { icon: 'lightbulb_outline', text: 'ES3' },
                        { icon: 'lightbulb_outline', text: 'ES4' },
                        { icon: 'lightbulb_outline', text: 'ES5' },
                        { icon: 'lightbulb_outline', text: 'ES6' },
                        { icon: 'lightbulb_outline', text: 'ES7' },
                        { icon: 'lightbulb_outline', text: 'ES8' },
                        { icon: 'lightbulb_outline', text: 'ES9' },
                        { icon: 'lightbulb_outline', text: 'ES10' },
                        { icon: 'lightbulb_outline', text: 'ES11' },
                    ],
                    to: '/vue-js',
                },
                { icon: 'lightbulb_outline', label: 'Vuetify' },
                { icon: 'lightbulb_outline', label: 'HTML5' },
                { icon: 'lightbulb_outline', label: 'CSS3' },
                { icon: 'lightbulb_outline', label: 'WebPack' },
                { icon: 'lightbulb_outline', label: 'SASS/SCSS' },
                { icon: 'lightbulb_outline', label: 'Prettier' },
                { icon: 'lightbulb_outline', label: 'ESLint' },
                { icon: 'lightbulb_outline', label: 'Babel' },
                { icon: 'lightbulb_outline', label: 'BrowsersList' },
                { icon: 'lightbulb_outline', label: 'vue-router' },
                { icon: 'lightbulb_outline', label: 'VUEX' },
                { icon: 'lightbulb_outline', label: 'Material Icons' },
                { icon: 'lightbulb_outline', label: 'MDI' },
                { divider: true },
                { icon: 'lightbulb_outline', label: 'Notes' },
                { icon: 'lightbulb_outline', label: 'Notes' },
                { icon: 'lightbulb_outline', label: 'Notes' },
                { icon: 'lightbulb_outline', label: 'Notes' },
                { icon: 'touch_app', label: 'Reminders' },
                { divider: true },
                { heading: 'Labels' },
                { icon: 'add', label: 'Create new label' },
                { divider: true },
                { icon: 'archive', label: 'Archive' },
                { icon: 'delete', label: 'Trash' },
                { divider: true },
                { icon: 'settings', label: 'Settings' },
                { icon: 'chat_bubble', label: 'Trash' },
                { icon: 'help', label: 'Help' },
                { icon: 'phonelink', label: 'App downloads' },
                { icon: 'keyboard', label: 'Keyboard shortcuts' },
            ],
        }),
        watch: {
            drawerRight: function(isShow) {
                this.$emit('drawerRightLocal', isShow)
            },
        },
        methods: {
            openSubDrawerRight(item) {
                this.$parent.$options.parent.showSubNavigationDrawerRight(item)
                // this.$root.$options.methods.showLeftSubNavigationDrawer('dsfsdf')
            },
        },
    }
</script>

<style scoped></style>
