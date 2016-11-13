

// comments.js

//页面注册
Page({

    //数据初始化
    data:{
        longComments:"",
        shortComments:"",
        shortCommentCounts:0,
        longCommentCounts:0
    },
    onLoad:function(option){
        console.log("*********"+option.id);
        this.getLongComments(option.id);
        this.getShortComments(option.id);
    },

    //获取长评论数据
    getLongComments:function(newsid){
        var that = this;
         wx.request({
            url: "https://news-at.zhihu.com/api/4/story/"+newsid+"/long-comments", 
            header: {
                'Content-Type': 'application/json'
            },
            success: function(res) {
                console.log(res.data);
                console.log("res.data.comments.length->"+res.data.comments.length);
                that.setData({
                    longComments:res.data.comments,
                    longCommentCounts:res.data.comments.length
                })
            }
         })
    },

    //获取短评论数据
    getShortComments:function(newsid){
        var that = this;
         wx.request({
            url:"https://news-at.zhihu.com/api/4/story/"+newsid+"/short-comments",
            header: {
                'Content-Type': 'application/json'
            },
            success: function(res) {
                console.log(res.data);
                that.setData({
                     shortComments:res.data.comments,
                     shortCommentCounts:res.data.comments.length
                })
            }
         })
    }

    


})