import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/Vuetify';
import store from './store'
import router from './plugins/VueRouter';
import './plugins/Vue2Leaflet';
import './plugins/VueAxios';
import './plugins/VueMoment';
import './plugins/VueAnalytics';
import './plugins/VueGeolocation';
// import './plugins/VueAdsense';

Vue.config.productionTip = true;

document.title = `${process.env.VUE_APP_TITLE}`;

Vue.use(require('vue-moment'));

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app');
