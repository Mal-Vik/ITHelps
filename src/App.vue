<template>
    <v-app id="inspire">
        <AppBar
            :isActiveDrawerLeft="isActiveDrawerLeft"
            :isActiveDrawerRight="isActiveDrawerRight"
            @emitChangeDisplayDrawerLeft="changeDisplayDrawerLeft"
            @emitChangeDisplayDrawerRight="changeDisplayDrawerRight"
        />
        <NavigationDrawerLeft :isActiveDrawerLeft="isActiveDrawerLeft" />
        <NavigationDrawerRight :isActiveDrawerRight="isActiveDrawerRight" @emitDisplaySubDrawerRight="showNavigationSubDrawerRight" />
        <NavigationSubDrawerRight :isActiveSubDrawerRight="isActiveSubDrawerRight" :dataSubDrawerRight="dataSubDrawerRight" />

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
    import NavigationSubDrawerRight from './components/navigation_boxes/NavigationSubDrawerRight'

    export default {
        name: 'App',
        components: {
            AppBar,
            NavigationDrawerLeft,
            NavigationDrawerRight,
            NavigationSubDrawerRight,
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
            changeDisplayDrawerLeft(isActiveDrawerLeft) {
                this.isActiveDrawerLeft = isActiveDrawerLeft
            },
            changeDisplayDrawerRight(isActiveDrawerRight) {
                this.isActiveDrawerRight = isActiveDrawerRight
            },
            showSubNavigationDrawerLeft() {
                this.isActiveSubDrawerLeft = !this.isActiveSubDrawerLeft
            },
            showNavigationSubDrawerRight(item) {
                let isActiveSubDrawerRight = this.isActiveSubDrawerRight
                this.isActiveSubDrawerRight = !isActiveSubDrawerRight
                this.dataSubDrawerRight = item
            },
        },
    }
</script>

<style></style>
