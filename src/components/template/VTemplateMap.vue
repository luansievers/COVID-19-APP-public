<template>
    <v-atom-map style="height: calc(100vh - 80px)">
        <v-atom-map-tile/>
        <v-molecule-map-marker-cluster-sick/>
        <v-molecule-map-marker-user/>
        <v-organism-map-geo-json/>
    </v-atom-map>
</template>

<script>
    import VAtomMap from "../atoms/VAtomMap";
    import VAtomMapTile from "../atoms/VAtomMapTile";
    import VOrganismMapGeoJson from "../organisms/VOrganismMapGeoJson";
    import VMoleculeMapMarkerClusterSick from "../molecules/VMoleculeMapMarkerClusterSick";
    import VMoleculeMapMarkerUser from "../molecules/VMoleculeMapMarkerUser";

    export default {
        name: "VTemplateMap",
        components: {
            VMoleculeMapMarkerUser,
            VMoleculeMapMarkerClusterSick,
            VOrganismMapGeoJson,
            VAtomMapTile,
            VAtomMap
        }
    };
</script>

<style>

</style>
