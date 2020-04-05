<template>
    <v-navigation-drawer fixed temporary width="200" right v-model="isActiveDisplay" class="grey lighten-4">
        <v-list dense>
            <template v-for="(item, i) in dataSubDrawerRight.drawer">
                <v-list-item :key="i" :to="dataSubDrawerRight.to">
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="grey--text">
                            {{ item.name }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </template>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: 'SubNavigationDrawerRight',
        props: ['isActiveSubDrawerRight', 'dataSubDrawerRight'],
        data: () => ({
            isActiveDisplay: false,
        }),
        watch: {
            isActiveSubDrawerRight: function(isActiveSubDrawerRight) {
                isActiveSubDrawerRight !== this.isActiveDisplay
                    ? (this.isActiveDisplay = isActiveSubDrawerRight)
                    : console.log('Равенство!')
            },
            isActiveDisplay: function(isActiveDisplay) {
                if (isActiveDisplay !== this.isActiveSubDrawerRight)
                    this.$parent.$options.parent.showNavigationSubDrawerRight(isActiveDisplay)
            },
        },
    }
</script>
