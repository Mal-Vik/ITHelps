<template>
    <v-navigation-drawer v-model="isActiveDrawerLeft" app class="black lighten-4">
        <v-list dense class="white-bg">
            <v-list-item @click="openSubDrawerLeft">
                <v-list-item-action>
                    <v-icon>exit_to_app</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Open Temporary Drawer</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-subheader class="mt-3 grey--text text--darken-1 text-uppercase">begetter</v-subheader>
            <v-list>
                <v-list-item v-for="item in items2" :key="item.text" @click="">
                    <v-list-item-avatar>
                        <img :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`" alt="" />
                    </v-list-item-avatar>
                    <v-list-item-title v-text="item.text" />
                </v-list-item>
            </v-list>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: 'NavigationDrawerLeft',
        props: ['isActiveDrawerLeft'],
        data: () => ({
            items2: [
                { picture: 28, text: 'Joseph' },
                { picture: 38, text: 'Apple' },
                { picture: 48, text: 'Xbox Ahoy' },
                { picture: 58, text: 'Nokia' },
                { picture: 78, text: 'MKBHD' },
            ],
        }),
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
