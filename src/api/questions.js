import Vue from 'vue'

const API_URL = process.env.VUE_APP_API_URL + '/questions';

export default {
    async index() {
        return await Vue.axios.get(`${API_URL}`);
    }
}