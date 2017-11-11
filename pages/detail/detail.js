// detail.js

//获取应用实例
var app = getApp();

//require引入文件
var util = require("../../utils/util.js");

//require引入api.js文件
var CONFIG = require("../../utils/config.js");
var dialog = require("../../utils/dialog.js");

// 引入富文本解析自定义组件
var WxParse = require('../../wxParse/wxParse.js');

Page({

    //初始化数据
    data: {
        newsid:"",
        title:"",
        imgsrc:"",
        article:"",
        comments:0,
        popularity:0,
        long_comments:0,
        short_comments:0
    },
    //评论页面跳转
    showComments:function(e){
        wx.navigateTo({
           url: '../comments/comments?id='+e.currentTarget.id
         })
    },
    loadExtraData:function(newsid){
        var _this = this;
         wx.request({
            url: CONFIG.API_URL.NEWS_EXTRADATA_QUERY+newsid, 
            method: 'GET',
            header: {
                'Content-Type': 'application/json'
            },
            success: function(res) {
              console.log(" 获取文章评论:" + JSON.stringify(res));
                _this.setData({
                    comments:res.data.comments,
                    popularity:res.data.popularity,
                    long_comments:res.data.long_comments,
                    short_comments:res.data.short_comments
                })
            }
         })
    },
    // 加载文章内容
    onLoad: function(option){
        dialog.loading();
        var _this = this;
        wx.request({
            url: CONFIG.API_URL.NEWS_DETAIL_QUERY+option.id, 
            method: 'GET',
            header: {
                'Content-Type': 'application/json'
            },
            success: function(res) {
              console.log("加载文章内容:" + JSON.stringify(res));

                //富文本解析
                var article = res.data.body;
                WxParse.wxParse('article', 'html', article, _this,0);
                _this.setData({
                    newsid:res.data.id,
                     title:res.data.title,
                     imgsrc:res.data.image
                })

                //加载评论信息
                _this.loadExtraData(res.data.id);
            },
            complete:function(){
                setTimeout(function(){
                    dialog.hide(); 
                },1000);
            }
         })

    }





});