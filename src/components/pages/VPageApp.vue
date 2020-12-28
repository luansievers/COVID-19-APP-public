<template>
    <section>
        <v-row no-gutters>
            <v-col v-show="show">
                <v-template-map style="z-index: 1"/>
            </v-col>
            <v-col v-if="!isLoggedIn">
                <v-organism-login-card/>
            </v-col>
            <v-organism-questionnaire v-if="isQuestionsNotAnswered"/>
            <v-molecule-dialog-request-location/>
        </v-row>
        <v-organism-buttons v-if="isQuestionsAnswered && isLoggedIn"/>
        <v-molecule-cookie-law/>
    </section>
</template>

<script>

    import VTemplateMap from "../template/VTemplateMap";
    import VOrganismLoginCard from "../organisms/VOrganismLoginCard";
    import VOrganismQuestionnaire from "../organisms/VOrganismQuestionnaire";
    import VOrganismButtons from "../organisms/VOrganismButtons";
    import VMoleculeDialogRequestLocation from "../molecules/VMoleculeDialogRequestLocation";
    import VMoleculeCookieLaw from "../molecules/VMoleculeCookieLaw";

    export default {
        name: "VPageApp",
        components: {
            VMoleculeCookieLaw,
            VMoleculeDialogRequestLocation,
            VOrganismButtons, VOrganismQuestionnaire, VOrganismLoginCard, VTemplateMap},
        computed: {
            show() {
                if (this.isLoggedIn) {
                    return true
                } else if (this.$vuetify.breakpoint.name === 'xs') {
                    return false
                }
                return true
            },
            isLoggedIn() {
                return this.$store.getters['users/isLoggedIn'];
            },
            isQuestionsNotAnswered() {
                return this.$store.getters['users/isQuestionsNotAnswered'];
            },
            isQuestionsAnswered() {
                return this.$store.getters['users/isQuestionsAnswered'];
            }
        },
        created() {
            this.$ga.page(this.$router)
        },
    }
</script>

<style scoped>

</style>
