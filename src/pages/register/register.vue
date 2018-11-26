<template>
	
<div class="login">
	
	<Divider>欢迎注册</Divider>
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
    <div style="margin-top: 6px" class="col">
        <span> 邮箱：</span>
        <Input placeholder="请输入您的邮箱" type="email" style="width: 200px;" v-model="logindata.email">
            <Icon type="ios-contact" slot="prefix" />
        </Input>
    </div>


	 <Button type="success" @click="register">注册</Button>
</div>

</template>						
<script>
	import fetch from '../../utils/fetch';
	export default{
		data(){
           return {
           	logindata:{
           		username:'',
           	    password:'',
           	    email:''
           	}
           	
           }
		},
        methods:{
		
           register(){

           	if(this.logindata.username=='' || this.logindata.password==''|| this.logindata.email==''){
           		this.$Message.info('用户名或密码或邮箱不能为空');
           		return false;
           	}
			const that=this;
		     const data={
				"username":this.logindata.username,"password":this.logindata.password,"email":this.logindata.email
			}

			return fetch({
				url: 'user',
				method: 'post',
				data
			}).then(function(res){
				 if(res.status==200 &&res.statusText=='OK'){
				 	that.$Message.info('注册成功,请登录');
				 	that.$router.push({name:'Login'});
				 }else{
				 	if((res.data).error.status=='202'){
				 		// (res.data).error.message
						that.$Message.info('该用户名已经存在');
						
				 	}else{
						that.$Message.info('注册失败');
				 	}
				 }
				
			});

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