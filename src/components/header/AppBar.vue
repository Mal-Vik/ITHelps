<template lang="pug">
    v-app-bar(dense='' app='' clipped-right='' color='pink darken-4')
        v-app-bar-nav-icon(@click.stop='emitChangeDisplayDrawerLeft(!isActiveDrawerLeft)')
        router-link(to='/')
            v-icon.mb-1(size='34') home
            span.title.ml-3.mr-5
                | IT&nbsp;
                span.font-weight-light Helps
        v-text-field(solo-inverted='' flat='' hide-details='' label='Search' prepend-inner-icon='fas fa-search')
        v-spacer
        v-app-bar-nav-icon(@click.stop='emitChangeDisplayDrawerRight(!isActiveDrawerRight)')
</template>

<script>
    export default {
        name: 'AppBar',
        props: [ 'isActiveDrawerLeft', 'isActiveDrawerRight' ],
        data: () => ({}),
        methods: {
            emitChangeDisplayDrawerLeft(isActiveDrawerLeft) {
                this.$emit('emitChangeDisplayDrawerLeft', isActiveDrawerLeft)
            },
            emitChangeDisplayDrawerRight(isActiveDrawerRight) {
                this.$emit('emitChangeDisplayDrawerRight', isActiveDrawerRight)
            },
        },
    }
</script>
