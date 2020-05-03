<template lang='pug'>
    v-navigation-drawer.grey.lighten-4(fixed temporary width='200' right v-model='isActiveDisplay')
        v-list
            template(v-for='(item, i) in items')
                v-list-item(:key='i' :to='framePath+"/"+item.id')
                    v-list-item-action(style='margin-right:20px')
                        v-icon(style='margin:auto') {{ item.icon }}
                    v-list-item-content
                        v-list-item-title.grey--text
                            | {{ item.name }}
</template>

<script>
    export default {
        name: 'SubNavigationDrawerRight',
        props: [ 'isActiveSubDrawerRight', 'dataDrawerRight' ],
        data: () => ({
            isActiveDisplay: false,
            items: [],
            framePath: process.env.VUE_APP_ROUTER_FRAME
        }),
        watch: {
            isActiveSubDrawerRight: function (isActiveSubDrawerRight) {
                if (isActiveSubDrawerRight !== this.isActiveDisplay) {
                    this.isActiveDisplay = isActiveSubDrawerRight;
                    this.items = this.dataDrawerRight['sub_drawer'];
                } else {
                    console.log('Равенство!')
                }
            },
            isActiveDisplay: function (isActiveDisplay) {
                if (isActiveDisplay !== this.isActiveSubDrawerRight)
                    this.$parent.showNavigationSubDrawerRight(isActiveDisplay)
            },
        },
    }
</script>
