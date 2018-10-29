import api from './api'
import utils from '../utils/util'

function requestSearchBook(data, successCb,errorCb,completeCb){
    request(api.API_BOOK_SEARCH,data,successCb,errorCb,completeCb)
}
function requestBookDetail(id,data,successCb,errorCb,completeCb){
    request(api.API_BOOK_DETAIL.replace(':id',id),data,successCb,errorCb,completeCb)
}

export default{             //模块化
    requestSearchBook,
    requestBookDetail
}


function request(url,data,successCb,errorCb,completeCb){
    wx.request({
        url,
        data,
        method:'GET',
        header: {
            'Content-Type': 'json'
        },
        
      
        success:(res)=>{
            if(res.statusCode == 200 && utils.isFunction(successCb))
            successCb(res.data)
        },
        error:()=>{
            errorCb()&&utils.isFunction(errorCb);
        },
        complest:()=>{
            completeCb()&&utils.isFunction(completeCb);
        }
        
    })
}