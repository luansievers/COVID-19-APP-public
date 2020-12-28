<template>
    <v-dialog v-model="dialog" max-width="360">
        <template v-slot:activator="{ on }">
            <v-btn text dark v-on="on" @click="clickOn('about')">
                {{ $vuetify.lang.t('$vuetify.button.about') }}
            </v-btn>
        </template>
        <v-card tile>
            <v-card-title>{{ $vuetify.lang.t('$vuetify.about.title') }}</v-card-title>
            <v-card-text>
                {{ $vuetify.lang.t('$vuetify.about.text') }}
            </v-card-text>
            <v-card-text>
                <v-list avatar>
                    <v-divider></v-divider>
                    <template v-for="(item, index) in contributors">
                        <v-list-item :key="item.name">
                            <v-list-item-avatar size="70">
                                <v-img :src="item.photo"></v-img>
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title v-text="item.name"></v-list-item-title>
                                <v-list-item-subtitle>
                                    <v-btn color="red lighten-3" class="white--text" fab icon small
                                           :href="item.instagram" target="_blank" @click="clickOn(`instagram-${item.kebab}`)">
                                        <v-icon>mdi-instagram</v-icon>
                                    </v-btn>
                                    <v-btn color="cyan darken-1" class="white--text" fab icon small
                                           :href="item.linkedin" target="_blank" @click="clickOn(`linkedin-${item.kebab}`)">
                                        <v-icon>mdi-linkedin</v-icon>
                                    </v-btn>
                                    <v-btn color="indigo" class="white--text" fab icon small
                                           :href="`mailto:${item.email}`" target="_blank" @click="clickOn(`email-${item.kebab}`)">
                                        <v-icon>mdi-email</v-icon>
                                    </v-btn>
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-divider :key="index"></v-divider>
                    </template>
                </v-list>
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
        name: "VMoleculeButtonFooterAbout",
        data() {
            return {
                dialog: false,
                contributors: [
                    {
                        name: 'Bruno Surdi Oliveira',
                        instagram: 'https://instagram.com/brunosurdi/',
                        linkedin: 'https://www.linkedin.com/in/bruno-surdi-oliveira/',
                        email: 'bruno.surdi.oliveira@gmail.com',
                        photo: require('@/assets/bruno-surdi.jpg'),
                        kebab: 'bruno-surdi'
                    },
                    {
                        name: 'Luan Felipe Sievers',
                        instagram: 'https://instagram.com/luansievers/',
                        linkedin: 'https://www.linkedin.com/in/luan-sievers/',
                        email: 'luan.sievers@gmail.com',
                        photo: require('@/assets/luan-sievers.jpg'),
                        kebab: 'luan-sievers'
                    },
                ]
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
