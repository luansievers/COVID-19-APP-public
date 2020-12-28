<template>
    <v-app>
        <v-content>
            <v-responsive class="mx-auto overflow-visible">
                <v-organsim-banner-location/>
                <v-container fluid ma-0 pa-0>
                    <router-view/>
                </v-container>
                <v-organism-footer/>
            </v-responsive>
        </v-content>
    </v-app>
</template>

<script>
    import VOrganismFooter from "./components/organisms/VOrganismFooter";
    import VOrgansimBannerLocation from "./components/organisms/VOrgansimBannerLocation";

    export default {
        name: 'App',
        components: {VOrgansimBannerLocation, VOrganismFooter}
    };
</script>

<style>
</style>
