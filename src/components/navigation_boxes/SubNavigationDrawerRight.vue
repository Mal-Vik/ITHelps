<template>
    <v-navigation-drawer v-model="isActiveSubDrawerRight" fixed temporary width="200" right>
        <v-list dense class="grey lighten-4">
            <template v-for="(item, i) in dataSubDrawerRight.drawer">
                <v-list-item :key="i" :to="dataSubDrawerRight.to">
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="grey--text">
                            {{ item.text }}
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
        data: () => ({}),
    }
</script>

<style scoped></style>
