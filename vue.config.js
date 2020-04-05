// eslint-disable-next-line no-unused-vars
// import VueFriendlyIframe from './src/plugins/vue-friendly-iframe'

module.exports = {
    assetsDir: 'static',
    publicPath: './',
    outputDir: 'dist',
    indexPath: 'index.html',
    transpileDependencies: ['vuetify', 'vue-friendly-iframe', 'VueFriendlyIframe'],
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.csv$/,
                    loader: 'csv-loader',
                    options: {
                        dynamicTyping: true,
                        header: true,
                        skipEmptyLines: true,
                    },
                },
            ],
        },
    },
}
