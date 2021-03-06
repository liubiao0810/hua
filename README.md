#花夏集
>花夏   一词来源于 [花开半春入了夏](http://www.huar.love/hua/#!/p/57da69796ff5a7000341c4ee)词句，并且花名也称之为 ‘花夏’

### 诗集概述：
> 1.包含有诗、词、赋；

> 2.鄙人不才，目前为止，赋只有一篇，实在是赋确实难写，只能是在特定环境才能抒写出美妙的篇章；

> 3.此站点采用的是：后端使用express提供API接口，前端使用自己的[vue脚手架](https://github.com/liubiao0810/generator-lgs)提供前台模板渲染；目前只是测试版本，还存在已知的许多bug，也未解决，权当自己收集的地方，避免丢失，那就可惜了~~；

### 功能点：

> 1.样式使用的是[semantic ui](http://www.semantic-ui.cn/);

> 2.主页以及列表页使用的是瀑布流，当然目前还只是全部加载，并未上滑继续加载，并且不应该新窗口打开的，因为这是SPA应用，但是瀑布流插件里的一个bug没有得到完美解决；

> 3.关于数据库，使用的是[mlab](https://mlab.com/)免费提供的500M的mongodb；访问速度不说快，也还可以，对于自己使用的应用完全够用了；

> 4.关于图片上传，使用的是[七牛云](https://portal.qiniu.com/signup?code=3li7i07nwjp76)，为什么采用七牛云呢？原因是文档清晰，现成的接口调用，对于处理图片即为方便，这里建议nodejs后端提供token，前端需要上传图片时调用接口获取token，前端框架中也可以轻易使用七牛云的上传插件，总之来说很方便，并且每个月提供免费10G的空间！！！

> 5.部署空间：使用的是[heroku](https://www.heroku.com/),这个也是免费的，唯一的缺点就是每隔一个小时它会休眠，再次访问时会重新唤起它，所以会显得慢点，当然对于访问量的站点没事，对于自己使用的关系并不大吧，关键是好用，免费，国内再也找不出了，难道为了部署各nodejs买阿里云那么贵得服务器？

### 注意事项：
> 1.对于前端VUE框架开发时，使用 www.xx.xxx/#!/aedasdad 跳转到www.xx.xxx/#!/daffsdss 这样的链接时，他不会触发数据渲染模板，此时需要 ,具体看查看[vue-router](http://router.vuejs.org/zh-cn/pipeline/data.html)文档

```javascript
route: {
        /**
         * data 在每次路由变动时都会被调用，即使是当前组件可以被重用的时候
         *
         * @param  {Object} transition 路由实例
         *
         */
        data: function (transition) {
            // 具体渲染的逻辑
       }
    }
```

> 2.关于使用这套vue前端框架来做七牛云的上传组件时，或许会遇到上传的Moxie.swf找不到，那是因为前端框架打包后生产的dist文件夹下没有找到，只需将Moxie.swf他打进dist目录中即可，建议上传至七牛云远程使用；

> 3.关于使用heroku部署自己的nodejs应用：

	1).根目录需包含Procfile文件 内容：web: node app.js，意思是告诉heruko它是怎么启动的；
	2).可能会遇到怎么部署最后都会出现找不到访问的文件，那是因为.gitignore文件中写了/web/dist， 既然忽略push了那就是没上传部署咯，当然找不到，稍不注意就会忘记，怎么找都找不到原因；
	3).关于heroku绑定自定义域名，首先它必须要求绑定信用卡，我试了下，国内不是visa 万事达  运通美国 这些标志的卡是不行的，可是刚巧的是手里没有这些卡，那么这时候为了绑定自己的域名可以使用
	
	[全球付]（https://www.globalcash.hk），唯一的缺点是需要充值100认证，那么没关系，冲值100吧，最后使用该卡成功认证了heroku，成功绑定域名；
	建议全球付不要实名认证，里面的100元去亚马逊上买东西即可；也不要往里冲钱，很难取出来的，它指一种预冲卡，没钱就用不了，所以只要里面没钱就行，不担心安全，但还是提醒保密自己的信息，万一哪天政策改变了呢；

到这里就介绍结束了~~谢谢