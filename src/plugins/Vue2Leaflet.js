import Vue from 'vue';
import { LMap, LTileLayer, LMarker, LTooltip, LControl, LControlZoom, LGeoJson } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.component('l-tooltip', LTooltip);
Vue.component('l-control', LControl);
Vue.component('l-control-zoom', LControlZoom);
Vue.component('l-geo-json', LGeoJson);
