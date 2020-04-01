<template lang="pug">
    v-footer.footer(app='' padless='' color='amber')
        span {{ title }}
        v-spacer
        span(v-html='copy')

</template>

<script>
    export default {
        name: 'Footer',
        data: () => ({
            title: 'IT Helps',
            copy: '&copy; Malyshkin Co. Ltd. 2019',
        }),
    }
</script>

<style scoped lang="sass">
    .v-footer
        font-size: 8px
        padding: 0 4px
</style>
