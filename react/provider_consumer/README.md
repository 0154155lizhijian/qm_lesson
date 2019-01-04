异步处理数据
中间件
高阶组件 enhance

//你要的数据，在中央state里面取出操作  mapStateToprops 数据管理
const mapStateToprops = (state) => {
    return{
        films:state.films
    }
}
state 化为 props

//你要的方法，在中央里面取出disapth执行的操作， mapDispatchToprops 函数管理
const mapDispatchToprops = (dispatch) => {
    return {
        getFilmDate:()=>{
            dispatch(filmAction(dispatch));
        }
    }
} 

使用dispatch方法