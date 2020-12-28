<template>
    <div>
        <v-banner :value="showBanner"
                  single-line
                  app icon="mdi-map-marker-off" icon-color="error" style="z-index: 4">
            {{ $vuetify.lang.t('$vuetify.location.noLocation') }}
            <template v-slot:actions>
                <v-btn color="primary" text @click.stop="dialogOn">
                    {{ $vuetify.lang.t('$vuetify.location.correct') }}
                </v-btn>
            </template>
        </v-banner>
        <v-dialog v-model="dialog" max-width="350">
            <v-card>
                <v-card-title class="headline">Fix browser location</v-card-title>
                <v-card-text v-for="(plataform, index) in plataforms" :key="index">
                    <v-btn :href="plataform.url" target="_blank" text color="primary" outlined block
                           @click="clickOn(plataform.name)">
                        <v-icon left>{{plataform.icon}}</v-icon>
                    {{ $vuetify.lang.t('$vuetify.clickMap.clickHere') }} {{plataform.name}}
                    </v-btn>
                </v-card-text>
                <v-card-text>
                    <v-btn href="https://caniuse.com/#feat=geolocation" target="_blank" text color="primary" outlined
                           block @click="clickOn('browser-compatibility')">
                        {{ $vuetify.lang.t('$vuetify.clickMap.browser') }}
                    </v-btn>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" text @click="dialog = false">
                        {{ $vuetify.lang.t('$vuetify.button.close') }}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    export default {
        name: "VOrgansimBannerLocation",
        data() {
            return {
                dialog: false,
                plataforms: [
                    {
                        name: 'chrome',
                        url: 'https://support.google.com/chrome/answer/142065?co=GENIE.Platform%3DDesktop&hl=en&oco=1',
                        icon: 'mdi-google-chrome'
                    },
                    {
                        name: 'apple', url: 'https://support.apple.com/en-ca/HT204690',
                        icon: 'mdi-apple-safari'
                    },
                    {
                        name: 'mozilla',
                        url: 'https://support.mozilla.org/en-US/kb/does-firefox-share-my-location-websites#w_how-do-i-undo-a-permission-granted-to-a-site',
                        icon: 'mdi-firefox'
                    }
                ]
            }
        },
        methods: {
            clickOn(name) {
                this.$ga.event('button', 'click', name);
            },
            dialogOn() {
                this.dialog = true;
                this.$ga.event('button', 'click', 'location-fix');
            }
        },
        computed: {
            showBanner() {
                return this.$store.getters['locations/isNotAvailable'];
            }
        },
    }
</script>

<style scoped>

</style>
