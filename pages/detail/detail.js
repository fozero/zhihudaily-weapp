// detail.js

//获取应用实例
var app = getApp();

//require引入文件
var util = require("../../lib/util.js");

//require引入api.js文件
var api = require("../../lib/api.js");
var dialog = require("../../lib/dialog.js");

// 引入富文本解析自定义组件
var WxParse = require('../../wxParse/wxParse.js');

Page({

    //初始化数据
    data: {
        newsid:"",
        title:"",
        imgsrc:"",
        wxParseData:"",
        comments:0,
        popularity:0,
        long_comments:0,
        short_comments:0
    },
    //评论页面跳转
    showComments:function(e){
        console.log(e.currentTarget.id);
        wx.navigateTo({
           url: '../comments/comments?id='+e.currentTarget.id
         })
    },
    loadExtraData:function(newsid){

        console.log(api.news_extradata_url+newsid);
        var that = this;
         wx.request({
            url: api.news_extradata_url+newsid, 
            header: {
                'Content-Type': 'application/json'
            },
            success: function(res) {
                console.log(res.data);
                that.setData({
                    comments:res.data.comments,
                    popularity:res.data.popularity,
                    long_comments:res.data.long_comments,
                    short_comments:res.data.short_comments
                })
            }
         })
    },
    onLoad: function(option){
        console.log(JSON.stringify(option.id));
        dialog.loading();

        var that = this;
        
        wx.request({
            url: api.news_detail_url+option.id, 
            header: {
                'Content-Type': 'application/json'
            },
            success: function(res) {
                console.log(res.data)

                // //html解析
                // var str = util.coder(res.data.body);

                that.setData({
                    newsid:res.data.id,
                     title:res.data.title,
                     imgsrc:res.data.image,
                     wxParseData:WxParse('html',res.data.body)//使用WxParse组件解析html  markdow解析将html替换成md
                })


                //加载新闻额外信息
                that.loadExtraData(res.data.id);
                
            },
            complete:function(){
                setTimeout(function(){
                    dialog.hide(); 
                },1000);
            }
         })

    }





});