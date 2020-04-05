// eslint-disable-next-line no-unused-vars
// import VueFriendlyIframe from './src/plugins/vue-friendly-iframe'

module.exports = {
    assetsDir: 'static',
    publicPath: './',
    outputDir: 'dist',
    indexPath: 'index.html',
    configureWebpack: {
        resolve: {
            extensions: ['*', '.js', '.vue', '.json'],
            // alias: {
            //     '@': '/Users/Viktor/WebstormProjects/MyProjectsVUE/src',
            //     src: '/Users/Viktor/WebstormProjects/MyProjectsVUE/src',
            //     app: '/Users/Viktor/WebstormProjects/MyProjectsVUE/src/app',
            //     assets: '/Users/Viktor/WebstormProjects/MyProjectsVUE/src/assets',
            //     '@components': '/Users/Viktor/WebstormProjects/MyProjectsVUE/src/app/components',
            //     layouts: '/Users/Viktor/WebstormProjects/MyProjectsVUE/src/app/layouts',
            //     locale: '/Users/Viktor/WebstormProjects/MyProjectsVUE/src/app/locale',
            //     mixins: '/Users/Viktor/WebstormProjects/MyProjectsVUE/src/app/mixins',
            //     pages: '/Users/Viktor/WebstormProjects/MyProjectsVUE/src/app/pages',
            //     services: '/Users/Viktor/WebstormProjects/MyProjectsVUE/src/app/services',
            //     store: '/Users/Viktor/WebstormProjects/MyProjectsVUE/src/app/store',
            //     utils: '/Users/Viktor/WebstormProjects/MyProjectsVUE/src/app/utils',
            // },
        },
    },
    transpileDependencies: ['vuetify', 'vue-friendly-iframe', 'VueFriendlyIframe'],
    // css: {
    //     loaderOptions: {
    //         sass: {
    //             prependData: `@import "@/assets/styles/style.scss";`,
    //         },
    //     },
    // },
}
