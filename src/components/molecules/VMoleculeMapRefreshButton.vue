<template>
    <v-btn style="z-index: 4" dark fixed top right color="#536DFE" @click="updateMap" :loading="isLoading"
           v-if="showUnofficial" large>
        <v-icon>mdi-refresh</v-icon>
        {{ $vuetify.lang.t('$vuetify.button.refresh') }}
    </v-btn>
</template>

<script>
    export default {
        name: "VMoleculeMapRefreshButton",
        props: {
            bounds: {
                type: Object,
                default: null
            },
        },
        computed: {
            isLoading() {
                return this.$store.getters['locations/isLoading'];
            },
            isQuestionsAnswered() {
                return this.$store.getters['users/isQuestionsAnswered'];
            },
            showUnofficial() {
                return this.$store.getters['locations/showUnofficial'];
            }
        },
        methods: {
            updateMap() {
                this.$ga.event('button', 'click', 'refresh');
                this.$store.dispatch('locations/find');
            }
        },
    }
</script>

<style scoped>

</style>
