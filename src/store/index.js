import Vue from 'vue'
import Vuex from 'vuex'
import locations from './modules/locations'
import users from './modules/users'
import questions from './modules/questions'
import answers from './modules/answers'
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        locations,
        users,
        questions,
        answers
    },
    strict: debug,
    // plugins: debug ? [createLogger()] : []
})