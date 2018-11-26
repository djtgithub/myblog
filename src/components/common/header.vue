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
                      <li role="presentation" class="dropdown" >
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                          欢迎回来：{{this.$store.state.user.token}} <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li  @click="loginout">注销 </li>
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
    export default{
        props:['message'],
        data(){
           return {
             datainfo:{
              title:'信息',
              text:'是否退出登录'
             }
           }
        },
         created(){
            
         },
         methods:{
            loginout(){
               this.Bus.$emit('val', this.datainfo)
                this.$store.state.app.toast=true;
                this.$store.commit('SET_TOAST',true);
            }
         }


	}
</script>
<style scoped>
    .navbar{
	   border-radius:0;
    }
    .cs_userinfo{
        float: right;
        color: #fff;
        height: 50px;
        line-height: 50px;
    }
    .nav>li>a{
        padding:0 10px;
    }
    .dropdown-menu{
        width: 100%;
        min-width: auto;
        margin: 0;
        padding: 0;
    }
     .dropdown-menu li{
        color: #ccc;
        text-align: center;
        cursor: pointer;

     }
     .ivu-modal{
        top:50%;
     }
</style>