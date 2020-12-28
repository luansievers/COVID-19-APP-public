import api from '../../api/locations'

// initial state
const state = {
    all: [],
    status: '',
    current: [],
    show_official: false,
    show_unofficial: true,
    map_bounds: null,
    flyToBounds: null,
    available: true,
    startMap: null
};

// getters
const getters = {
    isLoading: state => state.status === 'loading',
    getAll: state => state.all,
    showOfficial: state => state.show_official,
    showUnofficial: state => state.show_unofficial,
    getMapBounds: state => state.map_bounds,
    getCurrentLocation: state => state.current,
    getFlyToBounds: state => state.flyToBounds,
    isNotAvailable: state => !state.available,
    getStartMap: state => state.startMap,
};

// actions
const actions = {
    async forceFind({commit, dispatch}, payload) {
        commit('location_set_map_bounds', payload);
        dispatch('find')
    },
    async find({commit, state}) {
        try {
            commit('location_request');
            const response = await api.find(state.map_bounds);
            commit('location_find_success', response.data)
        } catch (e) {
            commit('location_error')
        }
    },
    async store({commit, state}) {
        try {
            commit('location_request');
            await api.store(state.current);
            commit('location_store_success')
        } catch (e) {
            commit('location_error')
        }
    },
};

// mutations
const mutations = {
    location_start_map(state) {
        state.startMap = new Date()
    },
    location_set_not_available(state) {
        state.available = false
    },
    location_dispatch_flyToBounds(state, flyToBounds) {
        state.flyToBounds = flyToBounds
    },
    location_set_map_bounds(state, map_bounds) {
        state.map_bounds = map_bounds
    },
    location_set_show_unofficial(state, show_unofficial) {
        state.show_unofficial = show_unofficial
    },
    location_set_show_official(state, show_official) {
        state.show_official = show_official
    },
    location_set_current(state, location) {
        state.current = location
    },
    location_request(state) {
        state.status = 'loading';
    },
    location_find_success(state, locations) {
        state.status = 'success';
        state.all = locations
    },
    location_store_success(state) {
        state.status = 'success';
    },
    location_error(state) {
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
