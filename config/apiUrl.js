// let ipUrl = 'http://127.0.0.1:7001/default/';
let ipUrl = 'http://49.233.14.172/default/';

let servicePath = {
  getArticleList: ipUrl + 'getArticleList', //  首页文章列表接口
  getArticleById: ipUrl + 'getArticleById/', // 文章详细页内容接口 ,需要接收参数
  getTypeInfo: ipUrl + 'getTypeInfo', // 文章详细页内容接口 ,需要接收参数
  getListById: ipUrl + 'getListById/', // 根据类别ID获得文章列表
  getListTopById: ipUrl + 'getListTopById/', // 根据类别ID获得置顶文章
  updateArticleView: ipUrl + 'updateArticleView', // 更新文章访问量
  getTypeNum: ipUrl + 'getTypeNum', // 文章分类数量
  getBlogCountNum: ipUrl + 'getBlogCountNum', // 博客文章信息统计

  getBlogEvent: ipUrl + 'getBlogEvent', // 博客大事件
  getFrindsLink: ipUrl + 'getFrindsLink', // 友情链接
  getBlogIcon: ipUrl + 'getBlogIcon', // icon link
};
export default servicePath;
