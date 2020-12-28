<template>
    <div>
        <v-list-item v-if="typeof item.value === 'undefined'">
            <v-list-item-content>
                <v-skeleton-loader type="list-item-three-line" width="100%"></v-skeleton-loader>
            </v-list-item-content>
        </v-list-item>
        <v-list-item v-else>
            <v-list-item-icon>
                <v-icon :color="item.color">{{item.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title>{{ $vuetify.lang.t(`$vuetify.${item.label}`) }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-content>
                <v-list-item-title class="text-center">{{Number(item.value).toLocaleString()}}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </div>
</template>

<script>
    export default {
        name: "VMoleculeMapInfoDialogListItem",
        props: {
            item: {
                type: Object,
                required: true
            },
        },
    }
</script>

<style scoped>

</style>
