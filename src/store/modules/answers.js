import api from '../../api/answers'

// initial state
const state = {
    status: ''
};

// getters
const getters = {
    isLoading: state => state.status === 'loading',
};

// actions
const actions = {
    async store({commit}, payload) {
        try {
            commit('answer_request');
            await api.store(payload);
            commit('answer_success')
        } catch (e) {
            commit('answer_error')
        }
    }
};

// mutations
const mutations = {
    answer_request(state) {
        state.status = 'loading';
    },
    answer_success(state) {
        state.status = 'success';
    },
    answer_error(state) {
        state.status = 'error';
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}