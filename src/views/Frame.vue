<template lang='pug'>
    .Frame
        .iframe-wrapper
            .iframe-loading(v-if='iframeLoading')
                | iframe loading...
            vue-friendly-iframe(
                :src="drawerRightSubId ? drawerRightSubId : '' ",
                :style="{ display: iframeLoading ? 'none' : 'block' }",
                @iframe-load='onIframeLoad',
                @load='onLoad',
                allow='encrypted-media',
                frameborder='0',
                gesture='media',
                ref='iframeEl'
            )
</template>

<script>
    export default {
        name: 'Frame',
        data: () => ({
            iframeLoading: true,
        }),
        computed: {
            drawerRightSubId() {
                return this.$store.getters.drawerRightSubId(this.$route.params.id).link_frame
            }
        },
        methods: {
            onLoad() {
                console.log('iframe loaded FRAME')

                this.iframeLoading = false
            },
            onIframeLoad() {
                console.log('iframe loaded')
            },
        },
    }
</script>

<style lang="scss">
    .Frame {
        height: 100%;
        .iframe-wrapper {
            border: 1px solid gray;
            height: 100%;

            .vue-friendly-iframe {
                height: 100%;
                width: 100%;
                iframe {
                    height: 100%;
                    width: 100%;
                }
            }
        }
    }
</style>
