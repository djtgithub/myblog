<template>
  <div>
    <div class="cs_list1 col">
      <div class="bigtitle">热门排行</div>
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
      <!-- {{this.$store.state}} -->
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
    <div class="cs_list2 col">
    	<div class="ivu-carousel-list">
    		<Carousel v-model="value1" loop>
		        <CarouselItem>
		            <div class="demo-carousel">
		            	<img src="https://qiniu.cuiqingcai.com/wp-content/uploads/2016/03/20-234x220.jpg" />
		            </div>
		        </CarouselItem>
		        <CarouselItem>
		            <div class="demo-carousel">
		            		<img src="https://qiniu.cuiqingcai.com/wp-content/uploads/2015/02/wallpaper_5226849-1.jpg" />
		            </div>
		        </CarouselItem>
		        <CarouselItem>
		            <div class="demo-carousel">
		            	<img src="https://qiniu.cuiqingcai.com/wp-content/uploads/2016/03/20-234x220.jpg" />
		            </div>
		        </CarouselItem>
		        <CarouselItem>
		            <div class="demo-carousel">
		            	<img src="https://qiniu.cuiqingcai.com/wp-content/uploads/2015/02/wallpaper_5226849-1.jpg" />
		            </div>
		        </CarouselItem>
	   		 </Carousel>
    	</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: 0
    }
  },
  methods: {

  }
}

</script>
<style >
.col {
  float: left;
}

.cs_list1 {
  width: 33%;
  padding: 10px;
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
  width: 30%;
  height: 100%;
  background: #eee;
  float: right;
    padding-top: 34px;
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

.ivu-carousel-list, .ivu-carousel-track {
    position: relative;
    display: block;
    overflow: hidden;
    height: 190px;
}
.demo-carousel img{
	display: block;
	width: 100%;
	height: auto;
}
</style>
