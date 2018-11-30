<template>
  <div class="bs-example" data-example-id="inverted-navbar">
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <a class="navbar-brand" href="#">
                        个人技术博客
                    </a>
        </div>
        <div class="cs_userinfo">
          <!-- 欢迎回来：{{this.$store.state.user.token}} -->
          <ul class="nav">
            <li role="presentation">
              <Tooltip content="点击换头像" placement="left-end" class="hiddenInput_wrap">
                <span>
                      <!--<img src="../../static/img/headPic.jpg" class="img-avatar" alt="">-->
                      <template >
                          <img src="" class="img-avatar" alt="">

                      </template>
                      
                  </span>
                <label>
                  <input type="file" accept="image/*" id="dou" multiple="multiple" class="hiddenInput" @change="handleFile($event)"/>
                </label>
              </Tooltip>
            </li>
            <li role="presentation" class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                          欢迎回来：{{this.$store.state.user.token}} <span class="caret"></span>
                        </a>
              <ul class="dropdown-menu">
                <li @click="loginout">注销 </li>
                <li>
                  <router-link to="/Contentmodification">个人中心</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-fluid -->
    </nav>
  </div>
</template>
<script>
export default {
  props: ['message'],
  data() {
    return {
      datainfo: {
        title: '信息',
        text: '是否退出登录'
      }
    }
  },
  created() {

  },
  methods: {
    loginout() {
      this.Bus.$emit('val', this.datainfo)
      this.$store.state.app.toast = true;
      this.$store.commit('SET_TOAST', true);
    },
     handleFile(e) {
                let that = this;
                var inputBox = document.getElementById("dou").files[0];
                let preview = document.querySelector('.hiddenInput_wrap>img');
                let $target = e.target || e.srcElement
                let file = $target.files[0];
          var src='';

// console.log(JSON.stringify(inputBox))
                let reader = new FileReader();
                // reader.readAsDataURL(inputBox.files[0]);//发起异步请
                reader.onload = function(){
    //读取完成后，数据保存在对象的result属性中
          src=this.result;
          console.log('5--------'+this.result)
        }
                let fileData = new FormData();
                fileData.append('Files', file);
                fileData.append('FileType', 6);
                that.$Message.info('头像上传中');
              //   var File = {
              //     id: "547d92ed04fca43974ca87a6",
              //     name: "2.png",
              //     url: "http://h.hiphotos.baidu.com/image/h%3D300/sign=22d266a5d839b60052ce09b7d9513526/f2deb48f8c5494eec7036a5f20f5e0fe99257e56.jpg"
              // }


         // var data={
         //    "{{fileColumnName}}":File
         //  }

          console.log('srcsrcsrcsrc'+src)
  var now = Date.now();
  var appKey = sha1("A6082069061619" + 'UZ' + "04C51A3A-DA51-356A-9B37-C10E9036FBDE" +'UZ' + now)+ '.' +now;






var File={
    'id': "5bf3bdde17c26c566600cd43",
    'name': "a3.png",
    'url': src,
}

console.log(File)
// var options={
//     url:"http://d.apicloud.com/mcm/api/file",
//     method:"POST",
//     data:{
//         "{{fileColumnName}}":File,

//     },
//     headers:{
//         "X-APICloud-AppKey":"A6082069061619",
//         "X-APICloud-AppId":appKey
//     }
// }
// $.ajax(options).done(function(data){
//   console.log(data)
//     //新增后的处理
// })


$.ajax({
  "url": "https://d.apicloud.com/mcm/api/file",
  "method": "POST",
  "cache": false,
  "headers": {
    "X-APICloud-AppId": "A6082069061619",
    "X-APICloud-AppKey": appKey
  },
  "data":{
        "{{fileColumnName}}":File
    },
  // File, 
  success: function (data) {
 console.log(data)

  },error:function(err){
 console.log(err)
  }
})








      // return fetch({
      //   url: 'file',
      //   method: 'post',
      //   data:{
      //     "{{fileColumnName}}":File
      //   }
      // }).then(function(res){
      //   console.log(JSON.stringify(res))
      //   })


                // Indicator.open({
                //     text: '头像上传中...',
                //     spinnerType: 'fading-circle'
                // });
                // $.ajax({
                //     url: this.$globalfn.BaseUrl+"/api/FileUpload/UploadFile",
                //     type: "post",
                //     processData: false,
                //     contentType: false,
                //     async: true,
                //     data: fileData,
                //     dataType: "json",
                //     success: function (data) {
                //         if (data.Success) {
                //             Indicator.close();
                //             let puserData=[];
                //             puserData.push({
                //                 OperationType: 4,
                //                 Pusers_ID: that.$store.getters.userid,
                //                 HeadPortrait:data.Data[0],
                //             });
                //             let params={puserData: JSON.stringify(puserData)}
                //             that.$post('Home/OperationPusers',params)
                //                 .then((res) => {
                //                     if(res.Success){
                //                         that.$layer.msg('上传头像成功');
                //                         that.Cookies.set('SET_HEADPORTRAIT', data.Data[0]);
                //                         that.$store.commit('SET_HEADPORTRAIT', data.Data[0]);
                //                     }else{
                //                         that.$layer.msg(res.Message);
                //                     }
                //                 }).catch((err) => {
                //                     console.log(err)
                //                 })
                //         } else {
                //             that.$layer.msg(date.Message);
                //         }
                //     },
                //     error: function (err) {
                //         console.log(err)
                //     }
                // })
            },

  },
  computed: {

  },


}

</script>
<style scoped>

.cs_userinfo .nav li{
  float: left;
}
.dropdown-menu>li>a {
  line-height: inherit;
}

.navbar {
  border-radius: 0;
}

.cs_userinfo {
  float: right;
  color: #fff;
  height: 50px;
  line-height: 50px;
}

.nav>li>a {
  padding: 0 10px;
}

.dropdown-menu {
  width: 100%;
  min-width: auto;
  margin: 0;
  padding: 0;
}

.dropdown-menu li {
  color: #ccc;
  text-align: center;
  cursor: pointer;

}

.ivu-modal {
  top: 50%;
}


.demo-upload-list {
  display: inline-block;
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  border: 1px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  position: relative;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
  margin-right: 4px;
}

.demo-upload-list img {
  width: 100%;
  height: 100%;
}

.demo-upload-list-cover {
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, .6);
}

.demo-upload-list:hover .demo-upload-list-cover {
  display: block;
}

.demo-upload-list-cover i {
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  margin: 0 2px;
}

.hiddenInput_wrap {
  position: relative;

}

.hiddenInput_wrap span {
  width: 50px;
  height: 50px;
  overflow: hidden;
  display: inline-block;
  border-radius: 50%;
  border: 1px solid #d1d1d1;
}

.hiddenInput_wrap img {
  width: 50px;
  height: 50px;
}

.hiddenInput_wrap label {
  /* height: 50px; */
  width: 50px;
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  overflow-x: hidden;
  cursor: pointer;

}

.hiddenInput {
  opacity: 0;
}

</style>
