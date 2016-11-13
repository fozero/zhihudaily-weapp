// api.js

//服务器域名
var WEB_API_URL = "https://news-at.zhihu.com";

//知乎最新日报
var news_latest_url = WEB_API_URL+"/api/4/news/latest";
//日报详情
var news_detail_url = WEB_API_URL+"/api/4/news/";

module.exports={
    news_latest_url,
    news_detail_url
}
