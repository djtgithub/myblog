<template>
  <div id="app">
    <router-view/>
    <loading v-if='this.$store.state.app.loading'/>
    <toast v-show="this.$store.state.app.toast"></toast>
     <!-- <toast v-show="this.$store.state.app.toast" :logmessage='logcont'></toast> -->
  <!--   {{Boolean(this.$store.state.app.toast)}} -->
  </div>
</template>
<script>
   import loading from './components/common/loading.vue'
   import toast from './components/common/toast.vue'
  export default {
  name: 'App',
  data(){
    return {
      logcont:'退出登录'
    }
  },
  components:{
    loading,
    toast
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #ccc;
}
ul,li{
  list-style-type: none;

}
</style>
