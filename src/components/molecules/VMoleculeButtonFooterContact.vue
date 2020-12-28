<template>
    <v-dialog v-model="dialog" max-width="290">
        <template v-slot:activator="{ on }">
            <v-btn text dark v-on="on" @click="clickOn('contact')">
                {{ $vuetify.lang.t('$vuetify.button.contact') }}
            </v-btn>
        </template>
        <v-card>
            <v-card-title class="headline">{{ $vuetify.lang.t('$vuetify.contact.title') }}</v-card-title>

            <v-card-text>
                {{ $vuetify.lang.t('$vuetify.contact.text') }}
                <a href="mailto:luan.sievers@gmail.com" target="_blank" @click="clickOn('contact-luan')">luan.sievers@gmail.com</a>.
                <br/>{{ $vuetify.lang.t('$vuetify.contact.text2') }}
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="dialog = false">
                {{ $vuetify.lang.t('$vuetify.button.close') }}
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "VMoleculeButtonFooterContact",
        data() {
            return {
                dialog: false
            }
        },
        methods: {
            clickOn(value) {
                this.$ga.event('button', 'click', value);
            }
        },
    }
</script>

<style scoped>

</style>
