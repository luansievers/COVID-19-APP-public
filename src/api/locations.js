import Vue from 'vue'

const API_URL = process.env.VUE_APP_API_URL + '/locations';

export default {
    async find(payload) {
        return await Vue.axios.post(`${API_URL}/find`, payload);
    },
    async store(payload) {
        await Vue.axios.post(`${API_URL}/store`, payload);
    }
}