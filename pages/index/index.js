//获取应用实例
var app = getApp()

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
    // 页面跳转-》 知乎日报详情
    dailyDetail:function(e){

        console.log("**************"+JSON.stringify(e));
         console.log("**************"+e.target.id);
        
         wx.navigateTo({
           url: '../detail/detail?id='+e.target.id,
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

    //生命周期函数  页面加载 一个页面只会调用一次 
    onLoad:function(){
        console.log("onload");
        var that = this
        wx.request({
            url: 'https://news-at.zhihu.com/api/4/news/latest', 
            header: {
                'Content-Type': 'application/json'
            },
            success: function(res) {
                console.log(res.data)
                that.setData({
                     stories:res.data.stories,
                     top_stories:res.data.top_stories
                })
            }
         })

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
    onPullDownRefresh: function() {
        // Do something when pull down.
    },
    onReachBottom: function() {
        // Do something when page reach bottom.
    }
})
