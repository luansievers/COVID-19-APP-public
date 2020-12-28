<template>
    <v-footer padless fixed>
        <v-card tile width="100%" class="red lighten-1 text-center">
            <v-card-text class="pa-0">
                <v-atom-button-footer-home v-if="$route.name !== 'home'"/>
                <v-atom-button-footer-privacy-policy v-if="$route.name !== 'privacy-policy'"/>
                <v-atom-button-footer-terms-and-conditions v-if="$route.name !== 'terms-and-conditions'"/>
                <v-molecule-button-footer-contact/>
                <v-molecule-button-footer-about/>
                <!--                <v-molecule-button-footer-donate/>-->
            </v-card-text>
            <v-card-text class="white--text pt-1 pb-5">
                {{ new Date().getFullYear() }} — <strong>COVID-19 MAP</strong>
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
    import VAtomButtonFooterHome from "../atoms/VAtomButtonFooterHome";
    import VAtomButtonFooterPrivacyPolicy from "../atoms/VAtomButtonFooterPrivacyPolicy";
    import VAtomButtonFooterTermsAndConditions from "../atoms/VAtomButtonFooterTermsAndConditions";
    import VMoleculeButtonFooterContact from "../molecules/VMoleculeButtonFooterContact";
    import VMoleculeButtonFooterAbout from "../molecules/VMoleculeButtonFooterAbout";

    export default {
        name: "VOrganismFooter",
        components: {
            VMoleculeButtonFooterAbout,
            VMoleculeButtonFooterContact,
            VAtomButtonFooterTermsAndConditions,
            VAtomButtonFooterPrivacyPolicy, VAtomButtonFooterHome
        }
    }
</script>

<style scoped>

</style>
