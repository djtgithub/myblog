<template>
  <div class="weui_dialog_confirm" id="dialog1" style="">
    <div class="weui_mask"></div>
    <div class="weui_dialog">
      <div class="weui_dialog_hd"><strong class="weui_dialog_title">{{title}}</strong></div>
      <div class="weui_dialog_bd">{{content}}</div>
      <div class="weui_dialog_ft"> <a href="javascript:;" class="weui_btn_dialog default" @click="quxiao">取消</a> <a href="javascript:;" class="weui_btn_dialog primary" @click="confirm">确定</a> </div>
    </div>
  </div>
</template>
<script>
export default {
   data(){
    return{
      title:'',
      content:''
    }
    
   },
	methods:{
      quxiao(){
         this.Cookies.set('Toast', false);
         this.$store.commit('SET_TOAST',false);
      },
      confirm(){
          this.$store.commit('SET_TOKEN','');
          this.Cookies.set('Aadmin-Token','');
          this.$store.commit('SET_LOGIN',false);
          this.Cookies.set('Login',false);
          this.$router.push({path:'/login'});
           this.$store.commit('SET_TOAST',false);
         this.Cookies.set('Toast', false);
      },
	},mounted(){
var that=this;
     // 用$on事件来接收参数
      this.Bus.$on('val', (data) => {
        that.content=data.text;
        that.title=data.title;
        
        console.log(data)
        // vm.name = data
      })
  }
}

</script>
<style scoped>
@font-face {
  font-weight: 400;
  font-style: normal;
  font-family: weui;

}

[class*=" weui_icon_"]:before,
[class^=weui_icon_]:before {
  font-family: weui;
  font-style: normal;
  font-weight: 400;
  speak: none;
  display: inline-block;
  vertical-align: middle;
  text-decoration: inherit;
  width: 1em;
  margin-right: .2em;
  text-align: center;
  font-variant: normal;
  text-transform: none;
  line-height: 1em;
  margin-left: .2em
}

[class*=" weui_icon_"]:before,
[class^=weui_icon_]:before {
  margin: 0
}

.weui_dialog {
  position: fixed;
  z-index: 902;
  width: 85%;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background-color: #fafafc;
  text-align: center;
  border-radius: 3px
}

.weui_dialog_confirm .weui_dialog .weui_dialog_hd {
  padding: 1.2em 0 .5em;
  border-bottom: 1px solid #ccc;
}

.weui_dialog_confirm .weui_dialog .weui_dialog_bd {
  text-align: center;
      min-height: 80px;
    padding: 10px;
        display: flex;
    align-items: left;
    justify-content: space-around;
    flex-direction: column;
}

.weui_dialog_hd {
  /* padding: 1.2em 0 .5em */
}

.weui_dialog_title {
  font-weight: 400;
  font-size: 17px
}

.weui_dialog_bd {
  padding: 0 20px;
  font-size: 15px;
  color: #888
}

.weui_dialog_ft {
  position: relative;
  line-height: 42px;
  font-size: 17px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex
}

.weui_dialog_ft a {
  display: block;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  color: #3cc51f;
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
}

.weui_dialog_ft a:active {
  background-color: #eee
}

.weui_dialog_ft:after {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 1px;
  border-top: 1px solid #d5d5d6;
  color: #d5d5d6;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleY(.5);
  transform: scaleY(.5)
}

.weui_dialog_confirm .weui_dialog_ft a {
  position: relative
}

.weui_dialog_confirm .weui_dialog_ft a:after {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  width: 1px;
  height: 100%;
  border-left: 1px solid #d5d5d6;
  color: #d5d5d6;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleX(.5);
  transform: scaleX(.5)
}

.weui_dialog_confirm .weui_dialog_ft a:first-child:after {
  display: none
}

.weui_btn_dialog.default {
  color: #353535
}

.weui_btn_dialog.primary {
  color: #0bb20c
}

@media screen and (min-width:1024px) {
  .weui_dialog {
    width: 300px
  }
}

.weui_toast {
  position: fixed;
  z-index: 3;
  width: 7.6em;
  min-height: 7.6em;
  top: 180px;
  left: 50%;
  margin-left: -3.8em;
  background: rgba(40, 40, 40, .75);
  text-align: center;
  border-radius: 5px;
  color: #fff
}

.weui_icon_toast {
  /*margin:22px 0 0;*/
  margin: 10px 0 0;
  display: block
}

.weui_icon_toast:before {
  content: '\EA08';
  color: #fff;
  font-size: 55px
}

.weui_toast_content {
  margin: 0 0 15px
}

.weui_loading_toast .weui_toast_content {
  margin-top: 64%;
  font-size: 14px
}

.weui_loading {
  position: absolute;
  width: 0;
  z-index: 5;
  left: 50%;
  top: 38%
}

.weui_loading_leaf {
  position: absolute;
  top: -1px;
  opacity: .25
}

.weui_loading_leaf:before {
  content: " ";
  position: absolute;
  width: 8.14px;
  height: 3.08px;
  background: #d1d1d5;
  box-shadow: rgba(0, 0, 0, .0980392) 0 0 1px;
  border-radius: 1px;
  -webkit-transform-origin: left 50% 0;
  transform-origin: left 50% 0
}

.weui_loading_leaf_0 {
  -webkit-animation: a 1.25s linear infinite;
  animation: a 1.25s linear infinite
}

.weui_loading_leaf_0:before {
  -webkit-transform: rotate(0deg) translate(7.92px);
  transform: rotate(0deg) translate(7.92px)
}

.weui_loading_leaf_1 {
  -webkit-animation: b 1.25s linear infinite;
  animation: b 1.25s linear infinite
}

.weui_loading_leaf_1:before {
  -webkit-transform: rotate(30deg) translate(7.92px);
  transform: rotate(30deg) translate(7.92px)
}

.weui_loading_leaf_2 {
  -webkit-animation: c 1.25s linear infinite;
  animation: c 1.25s linear infinite
}

.weui_loading_leaf_2:before {
  -webkit-transform: rotate(60deg) translate(7.92px);
  transform: rotate(60deg) translate(7.92px)
}

.weui_loading_leaf_3 {
  -webkit-animation: d 1.25s linear infinite;
  animation: d 1.25s linear infinite
}

.weui_loading_leaf_3:before {
  -webkit-transform: rotate(90deg) translate(7.92px);
  transform: rotate(90deg) translate(7.92px)
}

.weui_loading_leaf_4 {
  -webkit-animation: e 1.25s linear infinite;
  animation: e 1.25s linear infinite
}

.weui_loading_leaf_4:before {
  -webkit-transform: rotate(120deg) translate(7.92px);
  transform: rotate(120deg) translate(7.92px)
}

.weui_loading_leaf_5 {
  -webkit-animation: f 1.25s linear infinite;
  animation: f 1.25s linear infinite
}

.weui_loading_leaf_5:before {
  -webkit-transform: rotate(150deg) translate(7.92px);
  transform: rotate(150deg) translate(7.92px)
}

.weui_loading_leaf_6 {
  -webkit-animation: g 1.25s linear infinite;
  animation: g 1.25s linear infinite
}

.weui_loading_leaf_6:before {
  -webkit-transform: rotate(180deg) translate(7.92px);
  transform: rotate(180deg) translate(7.92px)
}

.weui_loading_leaf_7 {
  -webkit-animation: h 1.25s linear infinite;
  animation: h 1.25s linear infinite
}

.weui_loading_leaf_7:before {
  -webkit-transform: rotate(210deg) translate(7.92px);
  transform: rotate(210deg) translate(7.92px)
}

.weui_loading_leaf_8 {
  -webkit-animation: i 1.25s linear infinite;
  animation: i 1.25s linear infinite
}

.weui_loading_leaf_8:before {
  -webkit-transform: rotate(240deg) translate(7.92px);
  transform: rotate(240deg) translate(7.92px)
}

.weui_loading_leaf_9 {
  -webkit-animation: j 1.25s linear infinite;
  animation: j 1.25s linear infinite
}

.weui_loading_leaf_9:before {
  -webkit-transform: rotate(270deg) translate(7.92px);
  transform: rotate(270deg) translate(7.92px)
}

.weui_loading_leaf_10 {
  -webkit-animation: k 1.25s linear infinite;
  animation: k 1.25s linear infinite
}

.weui_loading_leaf_10:before {
  -webkit-transform: rotate(300deg) translate(7.92px);
  transform: rotate(300deg) translate(7.92px)
}

.weui_loading_leaf_11 {
  -webkit-animation: l 1.25s linear infinite;
  animation: l 1.25s linear infinite
}

.weui_loading_leaf_11:before {
  -webkit-transform: rotate(330deg) translate(7.92px);
  transform: rotate(330deg) translate(7.92px)
}

@-webkit-keyframes a {

  0%,
  0.01% {
    opacity: .25
  }

  0.02% {
    opacity: 1
  }

  60.01%,
  to {
    opacity: .25
  }
}

@-webkit-keyframes b {

  0%,
  8.34333% {
    opacity: .25
  }

  8.35333% {
    opacity: 1
  }

  68.3433%,
  to {
    opacity: .25
  }
}

@-webkit-keyframes c {

  0%,
  16.6767% {
    opacity: .25
  }

  16.6867% {
    opacity: 1
  }

  76.6767%,
  to {
    opacity: .25
  }
}

@-webkit-keyframes d {

  0%,
  25.01% {
    opacity: .25
  }

  25.02% {
    opacity: 1
  }

  85.01%,
  to {
    opacity: .25
  }
}

@-webkit-keyframes e {

  0%,
  33.3433% {
    opacity: .25
  }

  33.3533% {
    opacity: 1
  }

  93.3433%,
  to {
    opacity: .25
  }
}

@-webkit-keyframes f {
  0% {
    opacity: .270958333333333
  }

  41.6767% {
    opacity: .25
  }

  41.6867% {
    opacity: 1
  }

  1.67667% {
    opacity: .25
  }

  to {
    opacity: .270958333333333
  }
}

@-webkit-keyframes g {
  0% {
    opacity: .375125
  }

  50.01% {
    opacity: .25
  }

  50.02% {
    opacity: 1
  }

  10.01% {
    opacity: .25
  }

  to {
    opacity: .375125
  }
}

@-webkit-keyframes h {
  0% {
    opacity: .479291666666667
  }

  58.3433% {
    opacity: .25
  }

  58.3533% {
    opacity: 1
  }

  18.3433% {
    opacity: .25
  }

  to {
    opacity: .479291666666667
  }
}

@-webkit-keyframes i {
  0% {
    opacity: .583458333333333
  }

  66.6767% {
    opacity: .25
  }

  66.6867% {
    opacity: 1
  }

  26.6767% {
    opacity: .25
  }

  to {
    opacity: .583458333333333
  }
}

@-webkit-keyframes j {
  0% {
    opacity: .687625
  }

  75.01% {
    opacity: .25
  }

  75.02% {
    opacity: 1
  }

  35.01% {
    opacity: .25
  }

  to {
    opacity: .687625
  }
}

@-webkit-keyframes k {
  0% {
    opacity: .791791666666667
  }

  83.3433% {
    opacity: .25
  }

  83.3533% {
    opacity: 1
  }

  43.3433% {
    opacity: .25
  }

  to {
    opacity: .791791666666667
  }
}

@-webkit-keyframes l {
  0% {
    opacity: .895958333333333
  }

  91.6767% {
    opacity: .25
  }

  91.6867% {
    opacity: 1
  }

  51.6767% {
    opacity: .25
  }

  to {
    opacity: .895958333333333
  }
}

.weui_mask {
  background: rgba(0, 0, 0, .6)
}

.weui_mask,
.weui_mask_transition,
.weui_mask_transparent {
  position: fixed;
  z-index: 901;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0
}

.weui_mask_transition {
  display: none;
  background: transparent;
  -webkit-transition: background .3s;
  transition: background .3s
}

.weui_fade_toggle {
  background: rgba(0, 0, 0, .6)
}

.weui_actionsheet {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 4;
  -webkit-transform: translateY(100%);
  transform: translateY(100%);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  width: 100%;
  background-color: #efeff4;
  -webkit-transition: -webkit-transform .3s;
  transition: -webkit-transform .3s;
  transition: transform .3s;
  transition: transform .3s, -webkit-transform .3s;
  opacity: 0;
}

.weui_actionsheet_menu {
  background-color: #fff
}

.weui_actionsheet_action {
  margin-top: 6px;
  background-color: #fff
}

.weui_actionsheet_cell {
  position: relative;
  padding: 10px 0;
  text-align: center;
  font-size: 18px
}

.weui_actionsheet_cell:before {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 1px;
  border-top: 1px solid #d9d9d9;
  color: #d9d9d9;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleY(.5);
  transform: scaleY(.5)
}

.weui_actionsheet_cell:active {
  background-color: #ececec
}

.weui_actionsheet_cell:first-child:before {
  display: none
}

.weui_actionsheet_toggle {
  -webkit-transform: translate(0);
  transform: translate(0);
  opacity: 1;
}

.textToast {
  max-width: 50%;
  padding: 0.5em 1em;
  line-height: 1.5;
  font-size: 16px;
  text-align: center;
  color: #fff !important;
  border-radius: 5px;
  background-color: rgba(80, 80, 80, 1);
  position: fixed;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  display: none;
}

.textToastShow {
  display: block;
  -webkit-animation: textToastShow 1.5s .2s ease-in-out;
  animation: textToastShow 1.5s .2s ease-in-out;
}

@-webkit-keyframes textToastShow {
  30% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@keyframes textToastShow {
  30% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

span {
  display: inline-block;
  height: 80px;
  width: 80px;
  border-radius: 5px;
  border: 1px solid #ccc;
  line-height: 80px;
  text-align: center;
}

</style>
