// config.js

const WEB_API_URL = "https://news-at.zhihu.com";
const CONFIG = {
    API_URL:{
        //最新日报
        NEWS_LATEST_QUERY:WEB_API_URL+"/api/4/news/latest",
        //文章详情
        NEWS_DETAIL_QUERY:WEB_API_URL+"/api/4/news/",
        //文章评论信息
        NEWS_EXTRADATA_QUERY:WEB_API_URL+"/api/4/story-extra/",
        // 专栏列表
        NEWS_THEMES_QUERY:WEB_API_URL+"/api/4/themes",
        // 专栏内容
        NEWS_THEMES_CONTETN_QUERY:WEB_API_URL+"/api/4/theme/"
    }
}
module.exports = CONFIG;
