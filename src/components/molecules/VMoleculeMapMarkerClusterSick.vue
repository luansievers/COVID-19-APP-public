<template>
    <l-marker-cluster :options="{chunkedLoading: true}" v-if="showUnofficial">
        <l-marker v-for="location in locations" :key="location.index" :lat-lng="location" :icon="icon">
            <l-tooltip>
                {{ $vuetify.lang.t('$vuetify.marker.sick') }}
            </l-tooltip>
        </l-marker>
    </l-marker-cluster>
</template>

<script>
    import LMarkerCluster from 'vue2-leaflet-markercluster'
    import L from "leaflet";

    export default {
        name: "VMoleculeMapMarkerClusterSick",
        components: {
            LMarkerCluster
        },
        data() {
            return {
                icon: L.divIcon({className: 'case-location-dot marker marker-anchor-center', iconSize: [9, 9]}),
            }
        },
        computed: {
            locations() {
                return this.$store.getters['locations/getAll'];
            },
            showUnofficial() {
                return this.$store.getters['locations/showUnofficial'];
            }
        },
    }
</script>

<style>
    @import "../../../node_modules/leaflet.markercluster/dist/MarkerCluster.css";
    @import "../../../node_modules/leaflet.markercluster/dist/MarkerCluster.Default.css";

    .marker {
        position: absolute;
        top: 0;
        left: 0;
        will-change: transform;
    }

    .case-location-dot {
        background-color: darkorange;
        border-radius: 50%;
    }

    .case-location-dot::before {
        background-color: darkorange;
        content: '';
        width: 8px;
        height: 8px;
        border-radius: 50%;
        position: absolute;
        -webkit-animation: case-location-dot-pulse 2s infinite;
        -moz-animation: case-location-dot-pulse 2s infinite;
        -ms-animation: case-location-dot-pulse 2s infinite;
        animation: case-location-dot-pulse 2s infinite;
    }

    .case-location-dot::after {
        border-radius: 50%;
        border: 2px solid black;
        content: '';
        height: 12px;
        left: -2px;
        position: absolute;
        top: -2px;
        width: 12px;
        box-sizing: border-box;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.35);
    }

    @-webkit-keyframes case-location-dot-pulse {
        0% {
            -webkit-transform: scale(1);
            opacity: 1;
        }
        70% {
            -webkit-transform: scale(3);
            opacity: 0;
        }
        100% {
            -webkit-transform: scale(1);
            opacity: 0;
        }
    }

    @-ms-keyframes case-location-dot-pulse {
        0% {
            -ms-transform: scale(1);
            opacity: 1;
        }
        70% {
            -ms-transform: scale(3);
            opacity: 0;
        }
        100% {
            -ms-transform: scale(1);
            opacity: 0;
        }
    }

    @keyframes case-location-dot-pulse {
        0% {
            transform: scale(1);
            opacity: 1;
        }
        70% {
            transform: scale(3);
            opacity: 0;
        }
        100% {
            transform: scale(1);
            opacity: 0;
        }
    }

    .case-location-dot-stale {
        background-color: #aaa;
    }

    .case-location-dot-stale::after {
        display: none;
    }
</style>