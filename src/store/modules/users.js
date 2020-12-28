import api from '../../api/users'

// initial state
const state = {
    status: '',
    token: '',
    user: {},
};

// getters
const getters = {
    isLoading: state => state.status === 'loading',
    isLoggedIn: state => !!state.token,
    isQuestionsAnswered: state => state.user.answers && state.user.answers.length > 0,
    isQuestionsNotAnswered: state => state.user.answers && state.user.answers.length === 0,
};

// actions
const actions = {
    async onGoogleFacebookSuccess({dispatch}, payload) {
        await dispatch('login', payload);
        await dispatch('me');
    },
    async login({commit}, payload) {
        try {
            commit('auth_request');
            const response = await api.login(payload);
            commit('auth_success', response.data.token);
            window.dispatchEvent(new Event('resize'));
        } catch (e) {
            commit('auth_error')
        }
    },
    async me({commit}) {
        try {
            commit('me_request');
            const response = await api.me();
            commit('me_success', response.data)
        } catch (e) {
            commit('me_error')
        }
    }
};

// mutations
const mutations = {
    set_answers_update(state){
        state.user.answers = []
    },
    auth_request(state) {
        state.status = 'loading';
    },
    auth_success(state, token) {
        state.status = 'success';
        state.token = token;
    },
    auth_error(state) {
        state.status = 'error';
    },
    me_request(state) {
        state.status = 'loading';
    },
    me_success(state, user) {
        state.status = 'success';
        state.user = user;
    },
    me_error(state) {
        state.status = 'error';
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
