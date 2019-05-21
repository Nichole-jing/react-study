import Mock from 'mockjs'
import api from "../api/index";
let test  = function(){
    return Mock.mock({
        'ary':['react','node']
    })
}
Mock.mock(api.test, 'get', test)