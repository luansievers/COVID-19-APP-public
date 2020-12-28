<template>
    <div>
        <v-btn fab dark :color="color" @click.native.stop="showOfficial = !showOfficial">
            <v-icon v-if="showOfficial">mdi-checkbox-multiple-marked-circle-outline</v-icon>
            <v-icon v-else>mdi-checkbox-multiple-blank-circle-outline</v-icon>
        </v-btn>
        <v-snackbar v-model="snackbar" color="info" bottom right style="bottom: 90px">
            {{ $vuetify.lang.t('$vuetify.clickMap.text') }}
            <v-btn dark text @click="snackbar = false">
                {{ $vuetify.lang.t('$vuetify.button.close') }}
            </v-btn>
        </v-snackbar>
    </div>
</template>

<script>
    import {latLngBounds} from "leaflet";

    export default {
        name: "VMoleculeButtonShowOfficial",
        props: {
            color: {
                type: String,
                default: 'primary'
            },
        },
        data() {
            return {
                snackbar: false
            }
        },
        computed: {
            showOfficial: {
                get() {
                    return this.$store.getters['locations/showOfficial'];
                },
                set(value) {
                    this.$store.commit('locations/location_set_show_official', value);
                    if (value) {
                        this.snackbar = true;
                        const bounds = latLngBounds([
                            {"lat": -51.43962349885364, "lng": -285.8398509016155},
                            {"lat": 66.90465008519085, "lng": 248.1835865983846}
                        ]);
                        this.$store.commit('locations/location_dispatch_flyToBounds', bounds);
                        this.$ga.event('button', 'click', 'show-official');
                    }
                }
            },
        },
    }
</script>

<style scoped>

</style>
