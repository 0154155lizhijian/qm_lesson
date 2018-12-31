export const createStore = (state,storeChange) =>{
    const listeners = [];
    let store = state || {};
    const subscribe = (listen) => {
        listeners.push(listen)
    }
    const dispatch = (action) => {
        const newStore = storeChange(store,action);
        store = newStore;
        listeners.forEach(item=>item());
        // return action
    }

    const getStore = () => {
        return store
    }
    return {store,dispatch,subscribe,getStore}
}