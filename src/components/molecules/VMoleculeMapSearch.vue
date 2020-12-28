<template>
    <div>
        <v-btn fixed top left fab @click.native.stop="searchBox">
            <v-icon color="#1976d2">mdi-magnify</v-icon>
        </v-btn>
        <transition name="slide-fade">
            <v-combobox v-if="showSearch" solo dense :label="$vuetify.lang.t('$vuetify.button.search')" hide-details
                        style="position: fixed; width: 300px; z-index: 4; top: 80px; left: 20px"
                        v-model="value" :search-input.sync="search"
                        :items="options" :loading="loading"
                        item-text="label" :return-object="true" large
                        :filter="filter">
            </v-combobox>
        </transition>
    </div>
</template>

<script>
    import {latLngBounds} from "leaflet";
    import {OpenStreetMapProvider} from "leaflet-geosearch";

    export default {
        name: "VMoleculeMapSearch",
        data() {
            return {
                showSearch: false,
                value: '',
                search: '',
                options: [],
                loading: false,
            }
        },
        computed: {
            isLoggedIn() {
                return this.$store.getters['users/isLoggedIn'];
            },
            isQuestionsAnswered() {
                return this.$store.getters['users/isQuestionsAnswered'];
            }
        },
        methods: {
            searchBox(){
                this.showSearch = !this.showSearch;
                this.$ga.event('button', 'click', 'search');
            },
            async fetch(search) {
                if (!search) {
                    this.options = [];
                    this.value = '';
                }
                if (this.loading) {
                    return
                }
                this.loading = true;
                this._provider = new OpenStreetMapProvider();
                const results = await this._provider.search({query: search});
                this.loading = false;
                this.options = results
            },
            fetchEntriesDebounced(search) {
                clearTimeout(this._timerId);
                this._timerId = setTimeout(() => {
                    this.fetch(search);
                    this.$ga.event('keyboard', 'type', 'search');
                }, 500);
            },
            filter() {
                //return all that is returned
                return true
            },
        },
        watch: {
            search(value) {
                if (!value) {
                    return
                }
                this.fetchEntriesDebounced(value);
            },
            value(value) {
                if (value && value.bounds) {
                    const bounds = latLngBounds([
                        value.bounds[0],
                        value.bounds[1]
                    ]);
                    this.$store.commit('locations/location_dispatch_flyToBounds', bounds);
                    this.$ga.event('button', 'click', 'select-search-location');
                }
            }
        }
    }
</script>

<style scoped>
    .slide-fade-enter-active {
        transition: opacity .25s, transform .25s;
    }

    .slide-fade-leave-active {
        transition: opacity .25s, transform .25s;
    }

    .slide-fade-enter, .slide-fade-leave-to {
        transform: scaleX(0);
        opacity: 0;
        transition: opacity .25s, transform .25s;
        transform-origin: 0 0;
    }
</style>
