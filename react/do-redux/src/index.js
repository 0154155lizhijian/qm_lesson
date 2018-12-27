import {state} from './redux/state'
import {storeChange} from './redux/storeChange'
import {createStore} from './redux/createStore'

const {store,dispatch} = createStore(state,storeChange);

function renderHead(state){
    const head = document.getElementById('head');
    head.innerHTML = state.text;
    head.style.color = state.color;
}
function renderBody(state){
    const body = document.getElementById('body');
    body.innerHTML = state.text;
    body.style.color = state.color
}

function renderApp(store){
    renderHead(store.head);
    renderBody(store.body);
}

renderApp(store);
dispatch({type:'BODY_TEXT',text:'我是调用了dispatch修改后的body'});
// console.log(store)
renderApp(store)













// function renderHead(state){
//     const head = document.getElementById("head")
//     head.innerHTML =state.head.text ;
//     head.style.color = state.head.color;
//     dispatch(state,{type:'BODY_TEXT',text:'我是head经过调用dispatch修改后的body'})
//     // state.body.text = '我是经过head修改过后的body'
// }
// function renderBody(state){
//     const body = document.getElementById('body')
//     body.innerHTML = state.body.text;
//     body.style.color = state.body.color
// }

// function renderApp(state){
//     renderHead(state);
//     renderBody(state);
// }

// //UI render
// renderApp(appState)