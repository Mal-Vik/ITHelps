<template lang='pug'>
    v-navigation-drawer.grey.lighten-4(v-model='isActiveDrawerRight' app clipped right)
        v-list()
            template(v-for='(item, i) in allDrawerRight')
                v-layout(v-if='item.heading' :key='i' row align-center)
                    v-flex(xs6)
                        v-subheader(v-if='item.heading')
                            | {{ item.heading }}
                    v-flex.text-xs-right(xs6)
                        v-btn(small text) edit
                v-divider.my-3(v-else-if='item.divider' :key='i')
                v-list-item(v-else :key='i' @click.stop='openSubDrawerRight(item)')
                    v-list-item-action(style='margin-right:20px')
                        v-icon(style='margin:auto') {{ item.icon_name }}
                    v-list-item-content
                        v-list-item-title.grey--text
                            | {{ item.name }}
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'NavigationDrawerRight',
        props: [ 'isActiveDrawerRight' ],
        computed: mapGetters([ 'allDrawerRight' ]),
        async mounted() {
            await this.$store.dispatch('fetchDrawerRight')
        },
        methods: {
            openSubDrawerRight(item) {
                this.$emit('emitDisplaySubDrawerRight', item)
            },
        },
    }
</script>
