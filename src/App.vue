<template>
    <v-app id="inspire">
        <Header />
        <v-content>
            <router-view />
            <!--<vue-friendly-iframe src="https://www.npmjs.com/package/vue-cli-plugin-pug" @load="onLoad" name="name" />-->
        </v-content>
        <Footer />
    </v-app>
</template>

<script>
    // import VueFriendlyIframe from 'vue-friendly-iframe'
    import Header from './components/Header'
    import Footer from './components/Footer'

    export default {
        name: 'App',
        components: {
            Header,
            Footer,
            // VueFriendlyIframe,
        },
    }
</script>
