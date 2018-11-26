<template>
	
<div class="login">
	
	<Divider>用户登录</Divider>
	<div class="col">
        <span>用户名：</span>
        <Input prefix="ios-contact" placeholder="请输入您的用户名" style="width: 200px;" v-model="logindata.username"/>
    </div>
    <div style="margin-top: 6px" class="col">
        <span> 密码：</span>
        <Input placeholder="请输入您的密码" type="password" style="width: 200px;" v-model="logindata.password">
            <Icon type="ios-contact" slot="prefix" />
        </Input>
    </div>

    <div>
    	<router-link to="/register">立即注册</router-link>
    	<router-link to="/forgetpassword">忘记密码</router-link>
    </div>


	 <Button type="success" @click="login">登录</Button>
</div>

</template>						
<script>
	import fetch from '../../utils/fetch';
	export default{
		data(){
           return {
           	logindata:{
           		username:'',
           	    password:''
           	}
           	
           }
		},
        methods:{
		
           login(){

           	if(this.logindata.username=='' || this.logindata.password==''){
           		this.$Message.info('用户名或密码不能为空');
           		return false;
           	}
			const that=this;
		     const data={
				"username":this.logindata.username,"password":this.logindata.password,
			}

			return fetch({
				url: 'user/login',
				method: 'post',
				data
			}).then(function(res){

				// console.log(JSON.stringify(res))

					// 
				 if(res.status==200 &&res.statusText=='OK'){
				 	that.$Message.info('登录成功');
				 
				 	that.$store.commit('SET_TOKEN',that.logindata.username);
				 	that.Cookies.set('Aadmin-Token',that.logindata.username);

				 	that.$store.commit('SET_LOGIN',true);
             		that.Cookies.set('Login',true);

				 	that.$router.push({name:'Page1'});
				 }else{
				 	that.$Message.info((res.response.data).error.message);

				 }
				
			});

           	// this.$router.push({name:'Page1'});
           }
}
	}
</script>

<style scoped>
	.col{
		padding: 20px 0;
	}
	.col span{
		display: inline-block;
		width: 50px;
	}
	.login{
		margin: 0 auto;
		width: 500px;
		height: 500px;
		border: 1px solid #ccc;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%)
	}
	.ivu-btn{
		margin-top: 20px;
	}

</style>