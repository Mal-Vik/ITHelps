<template>
    <div id="examples">
        <h2>Example</h2>
        <div class="example-1">
            <form>
                <div class="form-group">
                    <label>Enter a search term:</label>
                    <input class="form-control" v-model="example1Form.searchTerm" />
                </div>
                <div class="form-group">
                    <label>Iframe URL:</label>
                    <input class="form-control" :value="example1Form.src + '/' + example1Form.searchTerm" readonly="readonly" />
                </div>
            </form>
            <div class="iframe-wrapper">
                <div class="iframe-loading" v-if="iframeLoading">
                    iframe loading...
                </div>
                <!--<vue-friendly-iframe-->
                <!--    ref="iframeEl"-->
                <!--    :style="{ display: iframeLoading ? 'none' : 'block' }"-->
                <!--    :src="example1Form.src + '/' + example1Form.searchTerm"-->
                <!--    @load="onLoad"-->
                <!--    @iframe-load="onIframeLoad"-->
                <!--    frameborder="0"-->
                <!--    gesture="media"-->
                <!--    allow="encrypted-media"-->
                <!--&gt;-->
                <!--</vue-friendly-iframe>-->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Frame',
        data() {
            return {
                example1Form: {
                    src: 'https://www.pexels.com/search',
                    searchTerm: 'tiger',
                },
                iframeLoading: true,
            }
        },
        methods: {
            onLoad() {
                console.log('iframe loaded')

                this.iframeLoading = false
            },
            onIframeLoad() {
                console.log('iframe loaded')
            },
        },
    }
</script>

<style lang="scss">
    #examples {
        .iframe-wrapper {
            border: 1px solid gray;
            height: 600px;

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
