<template>
    <l-map ref="theMap" :options="options" @update:bounds="updateBounds" v-if="show" :center="options.center">
        <slot></slot>
    </l-map>
</template>

<script>
    import {latLngBounds} from "leaflet";

    export default {
        name: "VAtomMap",
        data() {
            return {
                show: true,
                firstUpdateBounds: false,
                center: [0,0]
            }
        },
        computed: {
            options() {
                return {
                    maxZoom: this.isLoggedIn ? 18 : 17,
                    minZoom: this.isLoggedIn ? 0 : 18,
                    zoomControl: false,
                    center: this.center,
                    zoom: 17,
                    maxBounds: this.isLoggedIn ? null : latLngBounds([this.center, this.center]),
                }
            },
            isLoggedIn() {
                return this.$store.getters['users/isLoggedIn'];
            },
            flyToBounds() {
                return this.$store.getters['locations/getFlyToBounds'];
            },
            startMap() {
                return this.$store.getters['locations/getStartMap'];
            }
        },
        methods: {
            updateBounds(bounds) {
                this.$store.commit('locations/location_set_map_bounds', bounds);
                if (!this.firstUpdateBounds) {
                    this.$store.dispatch('locations/find');
                    this.firstUpdateBounds = true
                }
            }
        },
        watch: {
            isLoggedIn(value) {
                // setting zoom break cluster, so re-render the map.
                if (value) {
                    this.show = false;
                    setTimeout(() => {
                        this.show = true;
                    }, 500)
                }
            },
            flyToBounds(bounds) {
                this.$nextTick(() => {
                    this.$refs.theMap.mapObject.flyToBounds(bounds);
                    this.$store.dispatch('locations/forceFind', bounds)
                });
            },
            async startMap() {
                this.$ga.event('browser', 'location', 'request');
                try {
                    const coordinates = await this.$getLocation({timeout: 10000, enableHighAccuracy: true});
                    this.$ga.event('browser', 'location', 'success');
                    this.center = [coordinates.lat, coordinates.lng];
                    this.$store.commit('locations/location_set_current', {coordinates: this.options.center});
                } catch (exception) {
                    this.$ga.event('browser', 'location', 'error');
                    this.$ga.exception(JSON.stringify(exception));
                    console.log(exception);
                    this.$store.commit('locations/location_set_not_available');
                }
            }
        }
    }
</script>

<style scoped>

</style>
