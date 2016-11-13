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
        title:"",
        imgsrc:"",
        wxParseData:""
    },
    
    onLoad: function(option){
        console.log(JSON.stringify(option.id));
        dialog.loading();

        var that = this
        
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
                     title:res.data.title,
                     imgsrc:res.data.image,
                     wxParseData:WxParse('md',res.data.body)//使用WxParse组件解析html  markdow解析将html替换成md
                })
                
            },
            complete:function(){
                setTimeout(function(){
                    dialog.hide(); 
                },1000);
            }
         })

    }





});