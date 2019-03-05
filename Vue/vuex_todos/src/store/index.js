// store 状态树 -> states
// this.$store 读
// 写 action -> mutations/reducer(改变) -> state

// 在数据流管理的设计模式中，reducer是一个纯函数  ——> 函数式编程
// vuex mutation 负责这对状态改写的管理  规避开了这个难点

import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions'
import { mutations } from './mutations'

Vue.use(Vuex);    //全局启用vuex  可以通过  this.$store 找到状态树

export default new Vuex.Store({
    // modules:{
        state:{
            todos:[]
        },
        actions,
        mutations,
        // getters
    // }
})
