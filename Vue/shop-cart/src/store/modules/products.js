import shop from '../../api/shop'

const state = {
    all:[]  //所有的商品清单
}

const actions = {
    getAllProducts({
        commit
    }){
        shop.getProducts(products => {
            commit('setProducts',products);
        })
    }
}

//具有改变状态的能力
const mutations = {
    setProducts(state,products){
        state.all = products
    }
}

export default {
    namespaced:true, //分支的名称
    state,
    actions,
    mutations,
}
