<template lang="pug">
    v-app-bar(dense='' app='' clipped-right='' color='amber')
        v-app-bar-nav-icon(@click.stop='sendDrawerLeftToParent(!drawerLeft)')
        router-link(to='/')
            span.title.ml-3.mr-5
                | IT&nbsp;
                span.font-weight-light Helps
        v-text-field(solo-inverted='' flat='' hide-details='' label='Search' prepend-inner-icon='mdi-magnify')
        v-spacer
        v-app-bar-nav-icon(@click.stop='sendDrawerRightToParent(!drawerRight)')
</template>

<script>
    export default {
        name: 'AppBar',
        props: ['drawerLeft', 'drawerRight'],
        data: () => ({
            // drawerLeftLocal: this.drawerLeft,
            // drawerRight: false,
        }),
        methods: {
            sendDrawerLeftToParent(drawerLeftLocal) {
                console.log('AppBar this.drawerLeft')
                console.log(drawerLeftLocal)
                this.$emit('drawerLeftLocal', drawerLeftLocal)
            },
            sendDrawerRightToParent(drawerRight) {
                console.log('AppBar this.drawerRight')
                console.log(drawerRight)
                this.$emit('drawerRightLocal', drawerRight)
            },
        },
    }
</script>

<style scoped></style>
