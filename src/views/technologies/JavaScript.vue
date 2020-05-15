<template lang='pug'>
    div
        v-toolbar(dense, dark elevation='24', src=('http://localhost:8080/banner.jpg'))
            v-toolbar-title
                h2 JavaScript
            v-spacer
            v-chip.ma-2(color='white darken-3', outlined='', link='', to='/js/array')
                v-icon(left='') $prototype
                | Array
            v-chip.ma-2(color='white darken-3', outlined='', link='', to='/js/object')
                v-icon(left='') $prototype
                | Object
        router-view

</template>

<script>
    export default {
        name: 'JavaScript',
        data: () => ({}),
    }
</script>
