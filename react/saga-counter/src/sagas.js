import {put,takeEvery,all} from 'redux-saga/effects'

const delay = (ms) => new Promise(res=>{
    setTimeout(res,ms)
})

export function* watchIncrementAsync(){
    yield takeEvery('INCREMENT_ASYNC',incrementAsync);
}

export function* incrementAsync(){
    yield delay(1000);
    yield put({type:'INCREMENT'})
}

// export function* helloSaga(){
//     console.log('hello saga!')
// }

export default function* rootSaga(){
    yield all([
        // helloSaga(),
        watchIncrementAsync()
    ])
}