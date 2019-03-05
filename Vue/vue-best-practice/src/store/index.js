import Vue from 'vue';
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex);

// 初始状态 action 动作 -> mutation -> state更新

const state  = {
    totalTime:0,
    list:[]
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})