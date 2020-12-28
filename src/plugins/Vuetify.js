import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

import * as locales from '../i18n/'

export default new Vuetify({
    theme: {
        dark: false,
    },
    lang: {
        locales: locales,
        current: 'en',
    },
})