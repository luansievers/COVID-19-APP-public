<template>
    <div style="align-items: baseline">
        <v-speed-dial
                v-model="fab"
                :direction="direction"
                :transition="transition"
                fixed bottom left
                style="bottom: 125px"
        >
            <v-btn slot="activator" color="#F6511D" dark fab v-model="fab" @click="clickOnSettings">
                <v-icon v-if="fab">mdi-chevron-triple-down</v-icon>
                <v-icon v-else>mdi-chevron-triple-up</v-icon>
            </v-btn>

            <v-tooltip right :value="true" nudge-top="10" color="#FFB400">
                <!--eslint-disable-next-line vue/no-unused-vars-->
                <template v-slot:activator="{ on }">
                    <v-molecule-translation color="#FFB400"/>
                </template>
                <span>{{ $vuetify.lang.t('$vuetify.button.translation') }}</span>
            </v-tooltip>
            <v-tooltip right :value="true" nudge-top="10" nudge-right="6" color="#00A6ED">
                <!--eslint-disable-next-line vue/no-unused-vars-->
                <template v-slot:activator="{ on }">
                    <v-atom-button-update-answers color="#00A6ED"/>
                </template>
                <span>{{ $vuetify.lang.t('$vuetify.button.update_answers') }}</span>
            </v-tooltip>
            <v-tooltip right :value="true" nudge-top="10" nudge-right="6" color="#7FB800">
                <!--eslint-disable-next-line vue/no-unused-vars-->
                <template v-slot:activator="{ on }">
                    <v-btn fab dark color="#7FB800" @click.native.stop="showUnofficial = !showUnofficial">
                        <v-icon v-if="showUnofficial">mdi-checkbox-multiple-marked-circle-outline</v-icon>
                        <v-icon v-else>mdi-checkbox-multiple-blank-circle-outline</v-icon>
                    </v-btn>
                </template>
                <span>{{ $vuetify.lang.t('$vuetify.button.show.unofficial') }}</span>
            </v-tooltip>
            <v-tooltip right :value="true" nudge-top="10" nudge-right="6" color="#0D2C54">
                <!--eslint-disable-next-line vue/no-unused-vars-->
                <template v-slot:activator="{ on }">
                    <v-molecule-button-show-official color="#0D2C54"/>
                </template>
                <span>{{ $vuetify.lang.t('$vuetify.button.show.official') }}</span>
            </v-tooltip>
        </v-speed-dial>
    </div>
</template>

<script>
    import VMoleculeTranslation from "../molecules/VMoleculeTranslation";
    import VMoleculeButtonShowOfficial from "../molecules/VMoleculeButtonShowOfficial";
    import VAtomButtonUpdateAnswers from "../atoms/VAtomButtonUpdateAnswers";

    export default {
        name: "VOrganismMapSettings",
        components: {VAtomButtonUpdateAnswers, VMoleculeButtonShowOfficial, VMoleculeTranslation},
        data() {
            return {
                direction: 'top',
                fab: false,
                transition: 'slide-y-reverse-transition',
            }
        },
        computed: {
            isLoggedIn() {
                return this.$store.getters['users/isLoggedIn'];
            },
            isQuestionsAnswered() {
                return this.$store.getters['users/isQuestionsAnswered'];
            },
            showUnofficial: {
                get() {
                    return this.$store.getters['locations/showUnofficial'];
                },
                set(value) {
                    this.$store.commit('locations/location_set_show_unofficial', value);
                    if (value) {
                        this.$ga.event('button', 'click', 'show-unofficial');
                    }
                }
            }
        },
        methods: {
            clickOnSettings() {
                if (!this.fab) {
                    this.$ga.event('button', 'click', 'settings');
                }
            },
        },
    }
</script>

<style>
    /*.v-speed-dial__list {*/
    /*    align-items: baseline;*/
    /*}*/
</style>
