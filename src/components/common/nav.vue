<template>
  <div class="bs-example" data-example-id="inverted-navbar">
    <Menu active-name="1-2" :open-names="['1']">
      <Submenu name="1">
        <template slot="title">
          <Icon type="ios-analytics" />
          网站首页
        </template>
        <MenuItem name="1-2">
        <router-link to="/Page1">网站首页</router-link>
        </MenuItem>
      </Submenu>
      <Submenu name="2">
        <template slot="title">
          <Icon type="ios-filing" />
          技术分享
        </template>
        <MenuItem name="1-2">
        <router-link to="/Page2">技术分享</router-link>
        </MenuItem>
        <!--  <Submenu name="3">
                <template slot="title">Submenu</template>
                <MenuItem name="3-1">Option 7</MenuItem>
                <MenuItem name="3-2">Option 8</MenuItem>
            </Submenu> -->
      </Submenu>
      <Submenu name="4">
        <template slot="title">
          <Icon type="ios-cog" />
          个人中心
        </template>
        <MenuItem name="1-2">
        <router-link to="/Page2">关于我们</router-link>
        </MenuItem>
        <!-- <MenuItem name="4-1">Option 9</MenuItem>
            <MenuItem name="4-2">Option 10</MenuItem>
            <MenuItem name="4-3">Option 11</MenuItem>
            <MenuItem name="4-4">Option 12</MenuItem>
            <Submenu name="3">
                <template slot="title">Submenu</template>
                <MenuItem name="3-1">Option 7</MenuItem>
                <MenuItem name="3-2">Option 8</MenuItem>
            </Submenu> -->
      </Submenu>
    </Menu>
  </div>
</template>
<script>
export default {


}

</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}

a:hover {
  text-decoration: none;
}

.bs-example {
  border-radius: 0;
  position: absolute;
  left: 0;
  top: 52px;
  width: 240px;
  height: 100%;
}

.list {
  width: 100%;
  background: red;
}

.list li {
  background: yellow;
  height: 40px;
  line-height: 40px;
}

.list li a {
  text-align: left;
  display: block;
  width: 100%;
  text-align: left;
  text-indent: 10px;
  cursor: pointer;
}


.ivu-menu-vertical.ivu-menu-light:after{
    height: 0 !important;
}

</style>
