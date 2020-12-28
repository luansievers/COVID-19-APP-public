<template>
    <section>
        <v-molecule-map-search/>
        <v-molecule-map-refresh-button/>
        <v-organism-map-settings/>
    </section>
</template>

<script>
    import VMoleculeMapSearch from "../molecules/VMoleculeMapSearch";
    import VMoleculeMapRefreshButton from "../molecules/VMoleculeMapRefreshButton";
    import VOrganismMapSettings from "./VOrganismMapSettings";
    export default {
        name: "VOrganismButtons",
        components: {VOrganismMapSettings, VMoleculeMapRefreshButton, VMoleculeMapSearch}
    }
</script>

<style scoped>

</style>
