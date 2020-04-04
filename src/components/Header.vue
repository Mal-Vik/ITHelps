<template>
    <div>
        <AppBar
            :isActiveDrawerLeft="isActiveDrawerLeft"
            :isActiveDrawerRight="isActiveDrawerRight"
            @emitChangeDisplayDrawerLeft="changeDisplayDrawerLeft"
            @emitChangeDisplayDrawerRight="changeDisplayDrawerRight"
        />
        <NavigationDrawerLeft :isActiveDrawerLeft="isActiveDrawerLeft" />
        <NavigationDrawerRight :isActiveDrawerRight="isActiveDrawerRight" @emitDisplaySubDrawerRight="showNavigationSubDrawerRight" />
        <NavigationSubDrawerRight :isActiveSubDrawerRight="isActiveSubDrawerRight" :dataSubDrawerRight="dataSubDrawerRight" />
    </div>
</template>

<script>
    import AppBar from '../components/header/AppBar'
    import NavigationDrawerLeft from '../components/header/navigation_boxes/NavigationDrawerLeft'
    import NavigationDrawerRight from '../components/header/navigation_boxes/NavigationDrawerRight'
    import NavigationSubDrawerRight from '../components/header/navigation_boxes/NavigationSubDrawerRight'

    export default {
        name: 'Header',
        components: {
            AppBar,
            NavigationDrawerLeft,
            NavigationDrawerRight,
            NavigationSubDrawerRight,
        },
        data: () => ({
            isActiveDrawerLeft: true,
            isActiveDrawerRight: true,
            isActiveSubDrawerLeft: false,
            isActiveSubDrawerRight: false,
            dataSubDrawerRight: '',
        }),
        methods: {
            changeDisplayDrawerLeft(isActiveDrawerLeft) {
                this.isActiveDrawerLeft = isActiveDrawerLeft
            },
            changeDisplayDrawerRight(isActiveDrawerRight) {
                this.isActiveDrawerRight = isActiveDrawerRight
            },
            showSubNavigationDrawerLeft() {
                this.isActiveSubDrawerLeft = !this.isActiveSubDrawerLeft
            },
            showNavigationSubDrawerRight(item) {
                let isActiveSubDrawerRight = this.isActiveSubDrawerRight
                this.isActiveSubDrawerRight = !isActiveSubDrawerRight
                this.dataSubDrawerRight = item
            },
        },
    }
</script>
