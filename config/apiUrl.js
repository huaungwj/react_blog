// 基础地址
let ipUrl = 'http://127.0.0.1:7001/default/'


let servicePath = {
    getArticleList: ipUrl + 'getArticleList', // 首页接口
    getArticleById: ipUrl + 'getArticleById', // 详细页接口
    getTypeInfo: ipUrl + 'getTypeInfo', // 详细页接口
    getListById: ipUrl + 'getListById', // 详细页接口
}

export default servicePath