// detail.js

//获取应用实例
var app = getApp()

//require引入文件
var util = require("../../utils/util.js")

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
        var that = this
        

        wx.request({
            url: 'https://news-at.zhihu.com/api/4/news/'+option.id, 
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
                     wxParseData:WxParse('html',res.data.body)//使用WxParse组件解析html 
                })
                
            }
         })

    }





});