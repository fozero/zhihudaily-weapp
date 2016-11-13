//获取应用实例
var app = getApp();

//require引入api.js文件
var api = require("../../lib/api.js");
var dialog = require("../../lib/dialog.js");

// 页面注册
Page({

    //初始化数据
    data: {
        stories:"",
        top_stories:"",
        indicatorDots:true,
        autoplay:true,
        interval:5000,
        duration:1000
    },
    //知乎日报详情页跳转
    dailyDetail:function(e){

         console.log("**************"+JSON.stringify(e));
         console.log("**************"+e.currentTarget.id);
        
         wx.navigateTo({
           url: '../detail/detail?id='+e.currentTarget.id,
           success: function(res){
             // success
           },
           fail: function() {
             // fail
           },
           complete: function() {
             // complete
           }
         })

    },
    //获取最新日报数据
    getNewsList:function(){
            var that = this
            wx.request({
                url: api.news_latest_url, 
                header: {
                    'Content-Type': 'application/json'
                },
                success: function(res) {
                    console.log(res.data)
                    that.setData({
                        stories:res.data.stories,
                        top_stories:res.data.top_stories
                    })
                },
                fail:function(){
                    setTimeout(function(){
                        dialog.toast("请求失败，请检查您的网络！");
                    },1000);
                },
                complete:function(){
                    wx.stopPullDownRefresh();//停止下拉刷新
                }
            })
    },

    //生命周期函数  页面加载 一个页面只会调用一次 
    onLoad:function(){
        console.log("onload");
        this.getNewsList();
    },
    onReady: function() {
    // Do something when page ready.
    },
    onShow: function() {
        // Do something when page show.
        
    },
    onHide: function() {
        // Do something when page hide.
    },
    onUnload: function() {
        // Do something when page close.
    },

    //监听页面下拉刷新
    onPullDownRefresh: function() {
       this.getNewsList();
    },
    onReachBottom: function() {
        // Do something when page reach bottom.
    }
})
