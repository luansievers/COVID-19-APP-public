import Vue from 'vue';
import VueAnalytics from 'vue-analytics';

Vue.use(VueAnalytics, {
    id: 'UA-162339261-1',
    debug: {
        sendHitTask: process.env.NODE_ENV === 'production'
    }
});
