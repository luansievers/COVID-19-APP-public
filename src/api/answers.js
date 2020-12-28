import Vue from 'vue'

const API_URL = process.env.VUE_APP_API_URL + '/answers';

export default {
    async store(payload) {
        await Vue.axios.post(`${API_URL}`, payload);
    }
}