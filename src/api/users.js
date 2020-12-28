import Vue from 'vue'

const API_URL = process.env.VUE_APP_API_URL + '/users';

export default {
    async login(payload) {
        const response = await Vue.axios.post(`${API_URL}/login`, payload);
        Vue.axios.defaults.headers.common['Authorization'] = `${response.data.type} ${response.data.token}`;
        return response;
    },
    async me() {
        return await Vue.axios.get(`${API_URL}/me`);
    }
}