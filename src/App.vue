<template>
    <v-app id="inspire">
        <AppBar
            :drawerLeft="isActiveDrawerLeft"
            :drawerRight="isActiveDrawerRight"
            @drawerLeftLocal="showChildLeft"
            @drawerRightLocal="showChildRight"
        />

        <NavigationDrawerLeft :drawerLeft="isActiveDrawerLeft" @drawerLeftLocal="showChildLeft" />
        <v-navigation-drawer v-model="isActiveSubDrawerLeft" fixed temporary />

        <NavigationDrawerRight :drawerRight="isActiveDrawerRight" @drawerRightLocal="showChildRight" />

        <SubNavigationDrawerRight :isActiveSubDrawerRight="isActiveSubDrawerRight" :dataSubDrawerRight="dataSubDrawerRight" />

        <v-content>
            <router-view />
            <vue-friendly-iframe src="https://www.npmjs.com/package/vue-cli-plugin-pug" @load="onLoad" name="name" />
        </v-content>

        <Footer />
    </v-app>
</template>

<script>
    // import VueFriendlyIframe from 'vue-friendly-iframe'
    import AppBar from './components/AppBar'
    import Footer from './components/Footer'
    import NavigationDrawerLeft from './components/navigation_boxes/NavigationDrawerLeft'
    import NavigationDrawerRight from './components/navigation_boxes/NavigationDrawerRight'
    import SubNavigationDrawerRight from './components/navigation_boxes/SubNavigationDrawerRight'

    export default {
        name: 'App',
        components: {
            AppBar,
            NavigationDrawerLeft,
            NavigationDrawerRight,
            SubNavigationDrawerRight,
            Footer,
            // VueFriendlyIframe,
        },

        data: () => ({
            isActiveDrawerLeft: true,
            isActiveDrawerRight: true,
            isActiveSubDrawerLeft: false,
            isActiveSubDrawerRight: false,
            dataSubDrawerRight: '',
        }),
        methods: {
            showChildLeft(isShow) {
                this.isActiveDrawerLeft = isShow
            },
            showChildRight(isShow) {
                this.isActiveDrawerRight = isShow
            },
            showSubNavigationDrawerLeft() {
                this.isActiveSubDrawerLeft = !this.isActiveSubDrawerLeft
            },
            showSubNavigationDrawerRight(item) {
                this.isActiveSubDrawerRight = !this.isActiveSubDrawerRight
                this.dataSubDrawerRight = item
            },
            onLoad() {
                alert('dsdf')
            },
        },
    }
</script>
