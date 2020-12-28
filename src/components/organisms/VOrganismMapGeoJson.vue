<template>
    <div>
        <l-geo-json v-if="showOfficial" :geojson="worldJson" :options="options"/>
        <v-molecule-map-info-dialog :value="information" v-if="showInfo" @showInfo="setShowInfo"/>
    </div>
</template>

<script>
    import geoJson from '@/assets/custom.geo.json'
    import VMoleculeMapInfoDialog from "./VOrganismMapInfoDialog";

    export default {
        name: "VOrganismMapGeoJson",
        components: {VMoleculeMapInfoDialog},
        data() {
            return {
                worldJson: geoJson.features,
                showInfo: false,
                information: null
            }
        },
        computed: {
            showOfficial() {
                return this.$store.getters['locations/showOfficial'];
            },
            options() {
                return {
                    onEachFeature: this.onEachFeature
                };
            },
        },
        methods: {
            setShowInfo(value) {
                this.showInfo = value
            },
            async onEachFeature(feature, layer) {
                let vm = this;
                layer.on('click', function () {
                    vm.showInfo = true;
                    vm.information = {
                        country: feature.properties.iso_a3,
                        country_full: feature.properties.name
                    };
                    vm.$ga.event('button', 'click', `country-${feature.properties.iso_a3}`);
                });
            },
        }
    }
</script>

<style scoped>

</style>
