<template>
  <Scroll :on-reach-bottom="handleReachBottom" :height="clientHeight">
    <Card dis-hover v-for="(item, index) in list1" :key="index" style="margin: 32px 0">
      <!-- Content {{ item }} -->
      <img :src="item" alt="">
    </Card>
  </Scroll>
</template>
<script>
export default {
  data() {
    return {
      list1: [
        'http://g.hiphotos.baidu.com/image/h%3D300/sign=782f868b3787e9505d17f56c2039531b/95eef01f3a292df52ed1255db1315c6034a8736c.jpg',
        'http://b.hiphotos.baidu.com/image/h%3D300/sign=8d92cdd953df8db1a32e7a643922dddb/0ff41bd5ad6eddc4802878ba34dbb6fd536633a0.jpg',
        'http://a.hiphotos.baidu.com/image/h%3D300/sign=a284ee4bc595d143c576e22343f18296/0b7b02087bf40ad182fac5ab5a2c11dfa9ecce58.jpg',
        'http://h.hiphotos.baidu.com/image/h%3D300/sign=22d266a5d839b60052ce09b7d9513526/f2deb48f8c5494eec7036a5f20f5e0fe99257e56.jpg',
        'http://e.hiphotos.baidu.com/image/h%3D300/sign=c91071090f087bf462ec51e9c2d2575e/37d3d539b6003af3ee029222382ac65c1038b63c.jpg',
        'http://g.hiphotos.baidu.com/image/h%3D300/sign=782f868b3787e9505d17f56c2039531b/95eef01f3a292df52ed1255db1315c6034a8736c.jpg',
        'http://b.hiphotos.baidu.com/image/h%3D300/sign=8d92cdd953df8db1a32e7a643922dddb/0ff41bd5ad6eddc4802878ba34dbb6fd536633a0.jpg',
        'http://a.hiphotos.baidu.com/image/h%3D300/sign=a284ee4bc595d143c576e22343f18296/0b7b02087bf40ad182fac5ab5a2c11dfa9ecce58.jpg',
        'http://h.hiphotos.baidu.com/image/h%3D300/sign=22d266a5d839b60052ce09b7d9513526/f2deb48f8c5494eec7036a5f20f5e0fe99257e56.jpg',
        'http://e.hiphotos.baidu.com/image/h%3D300/sign=c91071090f087bf462ec51e9c2d2575e/37d3d539b6003af3ee029222382ac65c1038b63c.jpg',
        'http://g.hiphotos.baidu.com/image/h%3D300/sign=782f868b3787e9505d17f56c2039531b/95eef01f3a292df52ed1255db1315c6034a8736c.jpg',
        'http://b.hiphotos.baidu.com/image/h%3D300/sign=8d92cdd953df8db1a32e7a643922dddb/0ff41bd5ad6eddc4802878ba34dbb6fd536633a0.jpg',
        'http://a.hiphotos.baidu.com/image/h%3D300/sign=a284ee4bc595d143c576e22343f18296/0b7b02087bf40ad182fac5ab5a2c11dfa9ecce58.jpg',
        'http://h.hiphotos.baidu.com/image/h%3D300/sign=22d266a5d839b60052ce09b7d9513526/f2deb48f8c5494eec7036a5f20f5e0fe99257e56.jpg',
        'http://e.hiphotos.baidu.com/image/h%3D300/sign=c91071090f087bf462ec51e9c2d2575e/37d3d539b6003af3ee029222382ac65c1038b63c.jpg',
        'http://g.hiphotos.baidu.com/image/h%3D300/sign=782f868b3787e9505d17f56c2039531b/95eef01f3a292df52ed1255db1315c6034a8736c.jpg',
        'http://b.hiphotos.baidu.com/image/h%3D300/sign=8d92cdd953df8db1a32e7a643922dddb/0ff41bd5ad6eddc4802878ba34dbb6fd536633a0.jpg',
        'http://a.hiphotos.baidu.com/image/h%3D300/sign=a284ee4bc595d143c576e22343f18296/0b7b02087bf40ad182fac5ab5a2c11dfa9ecce58.jpg',
        'http://h.hiphotos.baidu.com/image/h%3D300/sign=22d266a5d839b60052ce09b7d9513526/f2deb48f8c5494eec7036a5f20f5e0fe99257e56.jpg',
        'http://e.hiphotos.baidu.com/image/h%3D300/sign=c91071090f087bf462ec51e9c2d2575e/37d3d539b6003af3ee029222382ac65c1038b63c.jpg',
      ],

      clientHeight: 500

      // list1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  },
  methods: {
    handleReachBottom() {
      return new Promise(resolve => {
        setTimeout(() => {
          const last = this.list1[this.list1.length - 1];
          for (let i = 1; i < 21; i++) {
            this.list1.push(last + i);
          }
          resolve();
        }, 2000);
      });
    }, changeFixed(clientHeight){                        //动态修改样式
        console.log(clientHeight);
        this.$refs.homePage.style.height = clientHeight+'px';

      },

  },
  mounted() {
    // 获取浏览器可视区域高度
    this.clientHeight = `${document.documentElement.clientHeight}` //document.body.clientWidth;
    //console.log(self.clientHeight);
    window.onresize = function temp() {
      this.clientHeight = `${document.documentElement.clientHeight}`;
    };
  },watch: {
      // 如果 `clientHeight` 发生改变，这个函数就会运行
      clientHeight: function () {
        this.changeFixed(this.clientHeight)
      }
    }

}

</script>
