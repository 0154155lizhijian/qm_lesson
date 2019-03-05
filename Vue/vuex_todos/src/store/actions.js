export default {
    addTodo({commit},text){
        //react下  dispatch({type:})
        commit('addTodo',{
            text,
            done:false,

        })
    },
    troggleTodo({commit},todo){
        commit('editTodo',{
            todo,
            done:!todo.done,
        })
    },
}