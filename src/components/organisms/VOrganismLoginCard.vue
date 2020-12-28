<template>
    <v-container fluid style="background-color: #f6f6f6; min-width: 320px; height: calc(100vh - 80px)" v-resize="onResize">
        <v-row justify="center" class="mt-9" v-if="height > 545">
            <v-img :src="require('@/assets/logo.svg')" width="70" height="70"
                   style="max-height: 70px; max-width: 70px;">
            </v-img>
        </v-row>
        <v-row justify="center" class="text-center" v-if="height > 600">
            <v-col cols="12" class="py-4 headline">
                {{ $vuetify.lang.t('$vuetify.sign_in_to_covid_19_map') }}
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="12" style="max-width: 340px">
                <v-card elevation="1" shaped>
                    <v-card-title v-if="height > 320">
                        {{ $vuetify.lang.t('$vuetify.login.title') }}
                    </v-card-title>
                    <v-card-text>
                        <v-atom-button-facebook/>
                        <br>
                        <v-atom-button-google/>
                        <br>
                        <v-molecule-translation :normal="true"/>
                    </v-card-text>
                    <v-card-subtitle align="center" v-if="height > 412">
                        {{ $vuetify.lang.t('$vuetify.login.subtitle') }}
                    </v-card-subtitle>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import VAtomButtonFacebook from "../atoms/VAtomButtonFacebook";
    import VAtomButtonGoogle from "../atoms/VAtomButtonGoogle";
    import VMoleculeTranslation from "../molecules/VMoleculeTranslation";

    export default {
        name: 'VOrganismLoginCard',
        components: {VMoleculeTranslation, VAtomButtonGoogle, VAtomButtonFacebook},
        data() {
            return {
                height: null
            }
        },
        methods: {
            onResize() {
                this.height = window.innerHeight
            }
        },
    }
</script>

<style scoped>

</style>
