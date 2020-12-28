<template>
    <l-marker v-if="show" :lat-lng="userLocation.coordinates" :icon="icon">
        <l-tooltip>
            {{ $vuetify.lang.t('$vuetify.marker.you') }}
        </l-tooltip>
    </l-marker>
</template>

<script>
    import L from "leaflet";

    export default {
        name: "VMoleculeMapMarkerUser",
        data() {
            return {
                icon: L.divIcon({
                    className: 'user-location-dot marker marker-anchor-center',
                    iconSize: [16, 16]
                }),
            }
        },
        computed: {
            show(){
                return this.userLocation && this.userLocation.coordinates
            },
            userLocation() {
                return this.$store.getters['locations/getCurrentLocation'];
            }
        },
    }
</script>


<style>
    .marker {
        position: absolute;
        top: 0;
        left: 0;
        will-change: transform;
    }

    .user-location-dot {
        background-color: #1da1f2;
        width: 15px;
        height: 15px;
        border-radius: 50%;
    }

    .user-location-dot::before {
        background-color: #1da1f2;
        content: '';
        width: 15px;
        height: 15px;
        border-radius: 50%;
        position: absolute;
        -webkit-animation: user-location-dot-pulse 2s infinite;
        -moz-animation: user-location-dot-pulse 2s infinite;
        -ms-animation: user-location-dot-pulse 2s infinite;
        animation: user-location-dot-pulse 2s infinite;
    }

    .user-location-dot::after {
        border-radius: 50%;
        border: 2px solid #fff;
        content: '';
        height: 19px;
        left: -2px;
        position: absolute;
        top: -2px;
        width: 19px;
        box-sizing: border-box;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.35);
    }

    @-webkit-keyframes user-location-dot-pulse {
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

    @-ms-keyframes user-location-dot-pulse {
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

    @keyframes user-location-dot-pulse {
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

    .user-location-dot-stale {
        background-color: #aaa;
    }

    .user-location-dot-stale::after {
        display: none;
    }

</style>