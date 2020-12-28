import Vue from 'vue';
import VueRouter from 'vue-router';

const router = new VueRouter({
    routes: [
        { path: '/', name: 'home', component: () => import('../components/pages/VPageApp') },
        { path: '/privacy-policy', name: 'privacy-policy', component: () => import('../components/pages/VPagePrivacyPolicy') },
        { path: '/terms-and-conditions', name: 'terms-and-conditions', component: () => import('../components/pages/VPageTermsAndConditions') }
    ]
});

Vue.use(VueRouter);

export default router
