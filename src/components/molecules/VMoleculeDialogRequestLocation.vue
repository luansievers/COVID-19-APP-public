<template>
    <v-dialog v-model="dialog" max-width="350">
        <v-card>
            <v-card-title class="headline">{{ $vuetify.lang.t('$vuetify.location.title') }}</v-card-title>
            <v-card-text>
                {{ $vuetify.lang.t('$vuetify.location.text') }}
                <v-img :src="require('@/assets/allow.jpg')"></v-img>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="close">
                    {{ $vuetify.lang.t('$vuetify.button.close') }}
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "VMoleculeDialogRequestLocation",
        data() {
            return {
                dialog: false
            }
        },
        methods: {
            close() {
                this.dialog = false;
                this.$store.commit('locations/location_start_map');
            }
        },
        async created() {
            try{
                const result = await navigator.permissions.query({name: 'geolocation'});
                if (result.state !== 'granted') {
                    this.dialog = true
                } else {
                    this.$store.commit('locations/location_start_map');
                }
            }catch (exception) {
                this.dialog = true;
                this.$store.commit('locations/location_start_map');
            }
        }
    }
</script>

<style scoped>

</style>
