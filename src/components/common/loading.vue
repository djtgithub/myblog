<template>
    <Spin fix>
        <Icon type="ios-loading" size=38 class="demo-spin-icon-load"></Icon>
        <div class="txt">加载中</div>
    </Spin>
</template>


<script>
    export default{
	}
</script>
<style scoped>

.cs_load_warp{
    clear: both;
}
  .demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
    @keyframes ani-demo-spin {
        from { transform: rotate(0deg);}
        50%  { transform: rotate(180deg);}
        to   { transform: rotate(360deg);}
    }
    .demo-spin-col{
        height: 100px;
        position: relative;
        border: 1px solid #eee;

    }
    .ivu-spin-fix {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999999999;
    width: 100%;
    height: 100%;
    background:rgba(0, 0, 0, .5);
}

.txt{
    font-size: 28px;
    color: #fff;
}
</style>