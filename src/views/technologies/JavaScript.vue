<template lang='pug'>
    div
        v-toolbar(dense, dark elevation='24')
            v-toolbar-title
                h2 JavaScript
            v-spacer
            template(v-for='item in items')
                v-chip.ma-2(:color='st(item)', outlined='', link='', :to='to(item.name)') {{item.name}}
        router-view

</template>

<script>
    export default {
        name: 'JavaScript',
        data: () => ({
            items: [
                { name: 'Array' },
                { name: 'Date' },
                { name: 'Function' },
                { name: 'Generator' },
                { name: 'JSON' },
                { name: 'Map' },
                { name: 'Math' },
                { name: 'Number' },
                { name: 'Object' },
                { name: 'Promise' },
                { name: 'Reflect' },
                { name: 'RegExp' },
                { name: 'Set' },
                { name: 'String' },
                { name: 'Symbol' },
                { name: 'WeakMap' },
                { name: 'WeakSet' },
            ],
            rework: [
                { name: 'Date' },
                { name: 'Function' },
                { name: 'Generator' },
                { name: 'JSON' },
                { name: 'Map' },
                { name: 'Math' },
                { name: 'Number' },
                { name: 'Promise' },
                { name: 'Reflect' },
                { name: 'RegExp' },
                { name: 'Set' },
                { name: 'Symbol' },
                { name: 'WeakMap' },
                { name: 'WeakSet' },
            ],
        }),
        methods: {
            to(name) {
                return '/js/' + name.toLowerCase();
            },
            st(item) {
                return this.rework.some(i => i.name === item.name) ? "red darken-3" : "white darken-3"
            }
        }
    }
</script>
