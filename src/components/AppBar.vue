<template lang="pug">
    v-app-bar(dense='' app='' clipped-right='' color='amber')
        v-app-bar-nav-icon(@click.stop='emitChangeDisplayDrawerLeft(!isActiveDrawerLeft)')
        router-link(to='/')
            span.title.ml-3.mr-5
                | IT&nbsp;
                span.font-weight-light Helps
        v-text-field(solo-inverted='' flat='' hide-details='' label='Search' prepend-inner-icon='mdi-magnify')
        v-spacer
        v-app-bar-nav-icon(@click.stop='emitChangeDisplayDrawerRight(!isActiveDrawerRight)')
</template>

<script>
    export default {
        name: 'AppBar',
        props: ['isActiveDrawerLeft', 'isActiveDrawerRight'],
        data: () => ({
            // drawerLeftLocal: this.drawerLeft,
            // drawerRight: false,
        }),
        methods: {
            emitChangeDisplayDrawerLeft(isActiveDrawerLeft) {
                console.log('AppBar this.isActiveDrawerLeft')
                console.log(isActiveDrawerLeft)
                this.$emit('emitChangeDisplayDrawerLeft', isActiveDrawerLeft)
            },
            emitChangeDisplayDrawerRight(isActiveDrawerRight) {
                console.log('AppBar this.isActiveDrawerRight')
                console.log(isActiveDrawerRight)
                this.$emit('emitChangeDisplayDrawerRight', isActiveDrawerRight)
            },
        },
    }
</script>

<style scoped></style>
