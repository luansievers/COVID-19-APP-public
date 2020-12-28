<template>
    <div>
        <v-btn depressed block outlined :color="color" dark v-if="normal" @click.native.stop="dialog = !dialog">
            {{ $vuetify.lang.t('$vuetify.button.translation') }}
        </v-btn>
        <v-btn :color="color" dark @click.native.stop="dialog = !dialog" v-else fab>
            <v-icon>mdi-translate</v-icon>
        </v-btn>

        <v-dialog v-model="dialog" scrollable max-width="300px">
            <v-card>
                <v-card-title>{{ $vuetify.lang.t('$vuetify.button.translation') }}</v-card-title>
                <v-divider></v-divider>
                <v-card-text style="height: 200px;">
                    <v-radio-group v-model="locale" column @change="changeLocal">
                        <v-radio v-for="locale in locales" :key="locale.index" :label="locale.label"
                                 :value="locale.value">
                        </v-radio>
                    </v-radio-group>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer/>
                    <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    export default {
        name: "VMoleculeTranslation",
        props: {
            normal: {
                type: Boolean,
                default: false
            },
            color: {
                type: String,
                default: 'primary'
            }
        },
        data() {
            return {
                dialog: false,
                locale: 'en',
                locales: [
                    // {value: 'af', label: 'Afrikaans (Afrikaans)'},
                    // {value: 'ar', label: 'Arabic (اللغة العربية)'},
                    // {value: 'ca', label: 'Catalan (català)'},
                    // {value: 'cs', label: 'Czech (čeština)'},
                    // {value: 'de', label: 'German (Deutsch)'},
                    // {value: 'el', label: 'Greek (Ελληνικά)'},
                    {value: 'en', label: 'English'},
                    // {value: 'es', label: 'Spanish (Español)'},
                    // {value: 'et', label: 'Estonian (eesti)'},
                    // {value: 'fa', label: 'Persian (فارسی)'},
                    // {value: 'fr', label: 'French (Français)'},
                    // {value: 'he', label: 'Hebrew (עברית)'},
                    // {value: 'hr', label: 'Croatian (hrvatski jezik)'},
                    // {value: 'hu', label: 'Hungarian (magyar)'},
                    // {value: 'id', label: 'Indonesian (Indonesian)'},
                    // {value: 'it', label: 'Italian (Italiano)'},
                    // {value: 'ja', label: 'Japanese (日本語)'},
                    // {value: 'ko', label: 'Korean (한국어)'},
                    // {value: 'lt', label: 'Lithuanian (lietuvių kalba)'},
                    // {value: 'lv', label: 'Latvian (latviešu valoda)'},
                    // {value: 'nl', label: 'Dutch (Nederlands)'},
                    // {value: 'no', label: 'Norwegian (Norsk)'},
                    // {value: 'pl', label: 'Polish (język polski)'},
                    {value: 'pt', label: 'Portuguese (Português)'},
                    // {value: 'ro', label: 'Romanian (Română)'},
                    // {value: 'ru', label: 'Russian (Русский)'},
                    // {value: 'sl', label: 'Slovene (slovenski jezik)'},
                    // {value: 'srCyrl', label: 'Serbian (српски језик)'},
                    // {value: 'sv', label: 'Swedish (svenska)'},
                    // {value: 'th', label: 'Thai (ไทย)'},
                    // {value: 'tr', label: 'Turkish (Türkçe)'},
                    // {value: 'uk', label: 'Ukrainian (Українська)'},
                    // {value: 'zhHans', label: 'Chinese (中文)'},
                    // {value: 'zhHant', label: 'Chinese (中文)'}
                ]
            }
        },
        methods: {
            changeLocal(locale) {
                this.$vuetify.lang.current = locale;
                localStorage.setItem("locale", locale);
                this.$ga.event('button', 'click', `translate-${locale}`);
            }
        },
        created() {
            let lang = localStorage.getItem("locale") || 'en';
            this.locale = lang;
            this.$vuetify.lang.current = lang;
        }
    }
</script>

<style scoped>

</style>
