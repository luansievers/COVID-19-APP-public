<template>
    <v-dialog :value="true" max-width="450" @click:outside="emitOff">
        <v-card :loading="loading" tile>
            <v-list-item three-line shaped>
                <v-list-item-content>
                    <div class="overline mb-4">
                        <v-btn icon color="red" @click="emitOff">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                        {{ $vuetify.lang.t('$vuetify.information_provided_by') }}
                        {{ $vuetify.lang.t('$vuetify.corona_api') }}
                    </div>
                    <v-list-item-title class="headline mb-1">{{information.country_full}}</v-list-item-title>
                    <v-list-item-subtitle>
                        {{ $vuetify.lang.t('$vuetify.updated_at') }} {{ moment(information.updated).format('MMMM Do YYYY, h:mm:ss a')}}
                    </v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar tile width="20%" height="20%" color="grey">
                    <v-img v-if="information.countryInfo" :src="information.countryInfo.flag"></v-img>
                </v-list-item-avatar>
            </v-list-item>
            <v-molecule-map-info-dialog-list-item
                    :item="{color: 'pink', icon: 'mdi-allergy', label: 'cases', value: information.cases}"/>
            <v-molecule-map-info-dialog-list-item
                    :item="{color: 'pink', icon: 'mdi-bacteria', label: 'todayCases', value: information.todayCases}"/>
            <v-molecule-map-info-dialog-list-item
                    :item="{color: 'pink', icon: 'mdi-skull', label: 'deaths', value: information.deaths}"/>
            <v-molecule-map-info-dialog-list-item
                    :item="{color: 'pink', icon: 'mdi-coffin', label: 'todayDeaths', value: information.todayDeaths}"/>
            <v-molecule-map-info-dialog-list-item
                    :item="{color: 'pink', icon: 'mdi-pill', label: 'recovered', value: information.recovered}"/>
            <v-molecule-map-info-dialog-list-item
                    :item="{color: 'pink', icon: 'mdi-heart-flash', label: 'active', value: information.active}"/>
            <v-molecule-map-info-dialog-list-item
                    :item="{color: 'pink', icon: 'mdi-alert-decagram', label: 'critical', value: information.critical}"/>
            <v-molecule-map-info-dialog-list-item
                    :item="{color: 'pink', icon: 'mdi-counter', label: 'casesPerOneMillion', value: information.casesPerOneMillion}"/>
            <v-molecule-map-info-dialog-list-item
                    :item="{color: 'pink', icon: 'mdi-counter', label: 'deathsPerOneMillion', value: information.deathsPerOneMillion}"/>
        </v-card>
    </v-dialog>
</template>

<script>
    import {NovelCovid} from 'novelcovid';
    import VMoleculeMapInfoDialogListItem from "../molecules/VMoleculeMapInfoDialogListItem";

    export default {
        name: "VOrganismMapInfoDialog",
        components: {VMoleculeMapInfoDialogListItem},
        props: {
            value: {
                type: Object,
                default: null
            },
        },
        data() {
            return {
                novelAPI: null,
                information: this.value,
                loading: true
            }
        },
        methods: {
            emitOff() {
                this.$emit('showInfo', false)
            }
        },
        async created() {
            this.novelAPI = new NovelCovid();
            const result = await this.novelAPI.countries(this.information.country);
            this.information = Object.assign(result, this.information);
            this.loading = false
        }
    }
</script>

<style scoped>

</style>
