

// section.js

//require引入api.js文件
var api = require("../../lib/api.js");

// 页面注册
Page({

    data:{
        themes:"",
        stories:"",
        themename:"",
        description:"",
        themeimage:"",
        editors:""
    },
    onLoad:function(){
        this.getThemes();
    },

    //主题日报列表
    getThemes:function(){
        var that = this;
         wx.request({
            url: api.news_themes_url, 
            header: {
                'Content-Type': 'application/json'
            },
            success: function(res) {
                console.log("news_themes_url->"+JSON.stringify(res.data));
                 that.setData({
                    themes:res.data.others
                })
                that.getThemesContent(res.data.others[0].id);
            }
         })
    },
    //新闻主题内容
    getThemesContent:function(themeid){
        console.log(api.news_themes_content_url+themeid);
        var that = this;
         wx.request({
            url: api.news_themes_content_url+themeid, 
            header: {
                'Content-Type': 'application/json'
            },
            success: function(res) {
                console.log("news_themes_content_url->"+JSON.stringify(res.data));
                console.log("res.data.name->"+res.data.name);
                console.log("res.data.editors->"+res.data.editors[0].avatar);
                 that.setData({
                    stories:res.data.stories,
                    themename:res.data.name,
                    description:res.data.description,
                    themeimage:res.data.image,
                    editors:res.data.editors
                })

                //更新主题标题栏
                wx.setNavigationBarTitle({
                    title: res.data.name
                })
            }
         })


    },
     //知乎日报详情页跳转
    dailyDetail:function(e){
         console.log("**************"+JSON.stringify(e));
         console.log("**************"+e.currentTarget.id);
         wx.navigateTo({
           url: '../detail/detail?id='+e.currentTarget.id
         })
    }





})
