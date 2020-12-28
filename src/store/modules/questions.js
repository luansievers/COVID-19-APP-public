import api from '../../api/questions'

// initial state
const state = {
    status: '',
    all: []
};

// getters
const getters = {
    isLoading: state => state.status === 'loading',
    getAll: state => state.all
};

// actions
const actions = {
    async index({commit}) {
        try {
            commit('questions_request');
            const response = await api.index();
            commit('questions_success', response.data)
        } catch (e) {
            commit('questions_error')
        }
    }
};

// mutations
const mutations = {
    questions_request(state) {
        state.status = 'loading';
    },
    questions_success(state, questions) {
        state.status = 'success';
        state.all = questions;
    },
    questions_error(state) {
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