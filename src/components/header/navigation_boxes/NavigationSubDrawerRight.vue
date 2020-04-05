<template lang='pug'>
    v-navigation-drawer.grey.lighten-4(fixed temporary width='200' right v-model='isActiveDisplay')
        v-list(dense)
            template(v-for='(item, i) in items')
                v-list-item(:key='i' :to='dataSubDrawerRight.to')
                    v-list-item-action
                        v-icon {{ item.icon }}
                    v-list-item-content
                        v-list-item-title.grey--text
                            | {{ item.name }}
</template>

<script>
    import axios from 'axios'
    import resource from 'resource-axios' // Применение 'resource-axios'
    const DB = resource(process.env.VUE_APP_DB, axios) // Применение 'resource-axios'

    export default {
        name: 'SubNavigationDrawerRight',
        props: ['isActiveSubDrawerRight', 'dataSubDrawerRight'],
        data: () => ({
            isActiveDisplay: false,
            items: [],
            prefix: '-table.csv'
        }),
        watch: {
            isActiveSubDrawerRight: function(isActiveSubDrawerRight) {
                if(isActiveSubDrawerRight !== this.isActiveDisplay) {
                    this.isActiveDisplay = isActiveSubDrawerRight;
                    let db = (this.dataSubDrawerRight.name+this.prefix).toLowerCase()
                    DB.get(db).then(response => {
                        this.items = this.$papa.parse(response.data, { header: true }).data
                    }).catch(response=>{
                        console.log(response)
                    })
                } else {
                    console.log('Равенство!')
                }
            },
            isActiveDisplay: function(isActiveDisplay) {
                if (isActiveDisplay !== this.isActiveSubDrawerRight)
                    this.$parent.showNavigationSubDrawerRight(isActiveDisplay)
            },
        },
    }
</script>
