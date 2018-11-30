<template>
  <div>
    <div class="tab1">
      <div class="wrapl">
        <div class="cs_list1 col">
          <div class="bigtitle">热门排行</div>
          <ul>
            <li v-for="(item,index) in paihang">
              <span class="label-1" :style="changecolor()">{{item.Number}}</span>
              <a href="">{{item.title}}</a>
              <p>
                <span class="muted">
              <a href="javascript:;" data-action="ding" data-id="1052" id="Addlike" class="action">
              <Icon type="md-heart-outline" />
              <span class="count">{{item.like}}</span> 喜欢
              </a>
              </span>
              </p>
            </li>
          </ul>
        </div>
        <div class="cs_list1 col">
          <div class="bigtitle">每日推荐</div>
          <ul>
            <li>
              <span class="label-1">1</span>
              <a href="">Python2爬虫学习系列教程</a>
              <p>
                <span class="muted">
              <a href="javascript:;" data-action="ding" data-id="1052" id="Addlike" class="action">
              <Icon type="md-heart-outline" />
              <span class="count">30620</span> 喜欢
              </a>
              </span>
              </p>
            </li>
            <li>
              <span  class="label-2">2</span>
              <a href="">Python2爬虫学习系列教程</a>
              <p>
                <span class="muted">
              <a href="javascript:;" data-action="ding" data-id="1052" id="Addlike" class="action">
              <Icon type="md-heart-outline" />
              <span class="count">30620</span> 喜欢
              </a>
              </span>
              </p>
            </li>
            <li>
              <span  class="label-3">3</span>
              <a href="">Python2爬虫学习系列教程</a>
              <p>
                <span class="muted">
              <a href="javascript:;" data-action="ding" data-id="1052" id="Addlike" class="action">
              <Icon type="md-heart-outline" />
              <span class="count">30620</span> 喜欢
              </a>
              </span>
              </p>
            </li>
            <li>
              <span  class="label-4">4</span>
              <a href="">Python2爬虫学习系列教程</a>
              <p>
                <span class="muted">
              <a href="javascript:;" data-action="ding" data-id="1052" id="Addlike" class="action">
              <Icon type="md-heart-outline" />
              <span class="count">30620</span> 喜欢
              </a>
              </span>
              </p>
            </li>
            <li>
              <span  class="label-5">5</span>
              <a href="">Python2爬虫学习系列教程</a>
              <p>
                <span class="muted">
              <a href="javascript:;" data-action="ding" data-id="1052" id="Addlike" class="action">
              <Icon type="md-heart-outline" />
              <span class="count">30620</span> 喜欢
              </a>
              </span>
              </p>
            </li>
          </ul>
        </div>
        <div class="clear"></div>
        <div class="tab2">
          <div class="title">爬虫代理哪家强？十大付费代理详细对比评测出炉！</div>
          <div class="content">
            前言 随着大数据时代的到来，爬虫已经成了获取数据的必不可少的方式，做过爬虫的想必都深有体会，爬取的时候莫名其妙 IP 就被网站封掉了，毕竟各大网站也不想自己的数据被轻易地爬走。 对于爬虫来说，为了解决封禁 IP 的问题，一个有效的方式就是使用代理，使用代理之后可以让爬虫伪装自己的...
          </div>
        </div>
        <div class="tab2">
          <div class="title">破解网站登录加密–RSA</div>
          <div class="content">
            破解网站登录加密–RSA大家好，我是四毛，下面的是我的公众号，欢迎关注。 今天的内容主要讲的是破解一个网站的rsa加密，当然肯定不是破解这个算法，而是找到加密的参数，正确模拟这个算法即可。 1. 什么是rsa算法 下面的资料摘抄自阮一峰老师的文章， 点这里了解更多 1976年，两位美国...
          </div>
        </div>
        <div class="tab2">
          <div class="title">如何给Azure云服务器扩展云磁盘</div>
          <div class="content">
            前言 随着大数据时代的到来，爬虫已经成了获取数据的必不可少的方式，做过爬虫的想必都深有体会，爬取的时候莫名其妙 IP 就被网站封掉了，毕竟各大网站也不想自己的数据被轻易地爬走。 对于爬虫来说，为了解决封禁 IP 的问题，一个有效的方式就是使用代理，使用代理之后可以让爬虫伪装自己的...
          </div>
        </div>
        <div class="tab2">
          <div class="title">爬虫代理哪家强？十大付费代理详细对比评测出炉！</div>
          <div class="content">
            前言 随着大数据时代的到来，爬虫已经成了获取数据的必不可少的方式，做过爬虫的想必都深有体会，爬取的时候莫名其妙 IP 就被网站封掉了，毕竟各大网站也不想自己的数据被轻易地爬走。 对于爬虫来说，为了解决封禁 IP 的问题，一个有效的方式就是使用代理，使用代理之后可以让爬虫伪装自己的...
          </div>
        </div>
        <div class="tab2">
          <div class="title">爬虫代理哪家强？十大付费代理详细对比评测出炉！</div>
          <div class="content">
            前言 随着大数据时代的到来，爬虫已经成了获取数据的必不可少的方式，做过爬虫的想必都深有体会，爬取的时候莫名其妙 IP 就被网站封掉了，毕竟各大网站也不想自己的数据被轻易地爬走。 对于爬虫来说，为了解决封禁 IP 的问题，一个有效的方式就是使用代理，使用代理之后可以让爬虫伪装自己的...
          </div>
        </div>
      </div>
      <div class="wrapr">
        <div class="cs_list2 col">
          <div class="ivu-carousel-list">
            <Carousel loop autoplay arrow="always">
              <CarouselItem>
                <div class="demo-carousel">
                  <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2249893882,1165836821&fm=27&gp=0.jpg" />
                  </div>
              </CarouselItem>
              <CarouselItem>
                <div class="demo-carousel">
                  <img src="https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1068465475,257788198&fm=202&mola=new&crop=v1" />
                  </div>
              </CarouselItem>
              <CarouselItem>
                <div class="demo-carousel">
                  <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1539976553,73815174&fm=27&gp=0.jpg" />
                  </div>
              </CarouselItem>
              <CarouselItem>
                <div class="demo-carousel">
                  <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2213670986,2923778817&fm=27&gp=0.jpg" />
                  </div>
              </CarouselItem>
            </Carousel>
          </div>
        </div>
        <div class="clear"></div>
        <div class="cs_like">
          <div class="bg_title">猜你喜欢</div>
          <ul class="list">
            <li><a href="">可视化监控你的爬虫快来学习怎么可视化监控你的爬虫</a><span>2018-11-26</span></li>
            <li><a href="">可视化监控你的爬虫快来学习怎么可视化监控你的爬虫</a><span>2018-11-25</span></li>
            <li><a href="">可视化监控你的爬虫快来学习怎么可视化监控你的爬虫</a><span>2018-11-24</span></li>
            <li><a href="">可视化监控你的爬虫快来学习怎么可视化监控你的爬虫</a><span>2018-11-23</span></li>
            <li><a href="">可视化监控你的爬虫快来学习怎么可视化监控你的爬虫</a><span>2018-11-22</span></li>
          </ul>
        </div>
        <div class="cs_like biaoqian">
          <div class="bg_title">我的标签</div>
          <ul v-for="(item,index) in biaoqian">
            <li><a href="" :style="changecolor()">{{item.msg}}</a></li>
          </ul>
        </div>


         <div class="cs_like meituxinshang">
          <div class="bg_title">美图欣赏
           <router-link to="Image"  class="more">查看更多》</router-link>  
          </div>
          <ul >
            <li><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1539976553,73815174&fm=27&gp=0.jpg" /></li>
            <li><img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2213670986,2923778817&fm=27&gp=0.jpg" /></li>
            <li><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2249893882,1165836821&fm=27&gp=0.jpg" /></li>
            <li><img src="http://f.hiphotos.baidu.com/image/h%3D300/sign=c7cf816776f40ad10ae4c1e3672d1151/d439b6003af33a8724e4b645cb5c10385243b5e0.jpg" /></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: 0,
      biaoqian: [{
          href: "",
          msg: "nodejs"
        }, {
          href: "",
          msg: "php"
        }, {
          href: "",
          msg: "java"
        }, {
          href: "",
          msg: "npm"
        }, {
          href: "",
          msg: "css"
        }, {
          href: "",
          msg: "html"
        }, {
          href: "",
          msg: "vue"
        }, {
          href: "",
          msg: "react"
        }, {
          href: "",
          msg: "angular"
        },
        {
          href: "",
          msg: "javascript"
        }
      ],
      paihang:[]
    }
  },
  methods: {
    changecolor: function() {
      return {
        'background': '#' + Math.floor(Math.random() * 0xffffff).toString(16),
        'color': '#fff',
      }
    },
    getpaihang: function() {
      var that=this;
      return that.fetch({
        url: 'paihang',
        method: 'get',
      }).then(function(res) {
        if (res.status == 200 && res.statusText == 'OK') {
          var data=[];
          for(var i=0;i<5;i++){
              data.push(res.data[i])
          }
          that.paihang=data;

            // console.log(JSON.stringify(res.data))
        }

      })

    }

  },
  created() {
    
  },
  mounted(){
    this.getpaihang();
  },beforeCreate(){
    console.log(0)
  }
}

</script>
<style>
.clear {
  clear: both;
}

.wrapl {
  width: 70%;
  float: left;
  background: #f9f3f3;
}

.wrapr {
  width: 30%;
  float: left;
  background: #eee;
}

.col {
  float: left;
}

.cs_list1 {
  width: 48%;
  padding: 10px;
  background: #fff;
  margin-left: 1%;
}

.cs_list1 ul li {
  text-align: left;
  line-height: 30px;
  font-size: 16px;
}

.cs_list1 ul li span {
  position: relative;
  display: inline-block;
  padding: 4px 6px 3px;
  line-height: 14px;
  color: #fff;
  vertical-align: baseline;
  white-space: nowrap;
  background-color: #999;
}

.cs_list1 ul li p {
  float: right;
  font-size: 14px;
  color: #777;
  font-size: 13px;
  margin-left: 10px;
}

.cs_list1 ul li p span {
  background: #fff;
  padding: 0;

}

.cs_list1 ul li p span .count {
  color: #f78585 !important;
}

.cs_list1 ul li p span a {
  color: #f78585 !important;
}

.cs_list1 ul li span.label-1 {
  background-color: #fd8c84;
}

.cs_list1 ul li span.label-2 {
  background-color: #6fc299;

}

.cs_list1 ul li span.label-3 {
  background-color: #81c1f2;
}

.cs_list2 {
  width: 100%;
  height: 100%;
  background: #eee;
  float: right;
  padding-top: 10px;
}

.bigtitle {
  width: 100%;
  height: 40px;
  line-height: 40px;
  color: #666;
  font-size: 20px;
  border-bottom: 1px solid #ccc;
  text-align: left;
  margin-bottom: 10px;
}

.ivu-carousel-list,
.ivu-carousel-track {
  position: relative;
  display: block;
  overflow: hidden;
  height: 190px;
}

.demo-carousel img {
  display: block;
  width: 100%;
  height: auto;
}


.tab2 {
  width: 97%;
  margin-top: 10px;
  clear: both;
  background: #fff;
  margin-left: 8px;
  padding: 10px;
  margin-bottom: 10px;
}

.title {
  text-align: left;
  font-size: 20px;
  color: #666;
  padding: 5px 0;
}

.content {
  text-align: left;
  font-size: 14px;
  color: #333;
}

.cs_like {
  background: #fff;
  margin-top: 10px;
  padding: 10px;
}
.cs_like .more {
  float: right;
  font-size: 14px;
}
.cs_like .bg_title {
  color: #666;
  font-size: 18px;
  padding: 5px 0;
  border-bottom: 1px solid #ccc;
  text-align: left;
}

.cs_like .list li {
  text-align: left;
  padding: 6px 0;
  border-bottom: 1px dashed #ccc;
}

.cs_like .list li a {
  display: inline-block;
  width: 70%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.cs_like .list li span {
  float: right;
}

.biaoqian {
  overflow: hidden;
  margin-bottom: 10px;
}

.biaoqian ul {
  margin-top: 10px;
}

.biaoqian ul li {
  float: left;

  border-radius: 5px;
  background: #ff4400;
  margin-right: 5px;
  margin-bottom: 10px;
}

.biaoqian ul li a {
  display: block;
  width: 100%;
  height: 100%;
  padding: 5px;
  border-radius: 5px;
}


.meituxinshang{
  overflow: hidden;
   margin-bottom: 10px;
  
}
.meituxinshang ul{
  margin-top: 10px;
}
.meituxinshang ul li{
  height: 100px;
  width: 47%;
  float: left;
  margin-bottom: 10px;
}
.meituxinshang ul li:nth-child(2n){
  float: right;
}
.meituxinshang ul li img{
  display: block; 
  width: 100%;
  height: 100%;
}

</style>
