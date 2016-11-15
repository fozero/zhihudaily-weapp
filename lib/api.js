// api.js

//服务器域名
var WEB_API_URL = "https://news-at.zhihu.com";

//知乎最新日报
var news_latest_url = WEB_API_URL+"/api/4/news/latest";
//日报详情
var news_detail_url = WEB_API_URL+"/api/4/news/";

//新闻额外信息
var news_extradata_url = WEB_API_URL+"/api/4/story-extra/";

// 新闻主题列表
var news_themes_url = WEB_API_URL+"/api/4/themes";

// 新闻主题内容
var news_themes_content_url = WEB_API_URL+"/api/4/theme/";

module.exports={
    news_latest_url,
    news_detail_url,
    news_extradata_url,
    news_themes_url,
    news_themes_content_url
}
