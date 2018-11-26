<template>
<div class="login">
	<Divider>修改密码</Divider>
	<div class="col">
        <span>用户名：</span>
        <Input prefix="ios-contact" placeholder="请输入您的用户名" style="width: 200px;" v-model="logindata.username"/>
    </div>
    <div style="margin-top: 6px" class="col">
        <span> 密码：</span>
        <Input placeholder="请输入您的邮箱" type="email" style="width: 200px;" v-model="logindata.email">
            <Icon type="ios-contact" slot="prefix" />
        </Input>
    </div>
	 <Button type="success" @click="save">修改</Button>
</div>
</template>						
<script>
	import fetch from '../../utils/fetch';
	export default{
		data(){
           return {
           	logindata:{
           		username:'',
           	    email:''
           	}
           }
		},
        methods:{
           save(){
           	if(this.logindata.username=='' || this.logindata.email==''){
           		this.$Message.info('用户名或邮箱不能为空');
           		return false;
           	}
		     const data={
				"username":this.logindata.username,
				"email":this.logindata.email
			}

			 const that=this;
			return fetch({
				url: 'user/resetRequest',
				method: 'post',
				data
			}).then(function(res){
				 if(res.status==200 &&res.statusText=='OK'){
				 	that.$Message.info(res.data.msg+'请查收');
				 	// that.$router.push({name:'Login'});
				 }else{
				 	 that.$Message.info(res.message);
				 }
				
			})

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
		width: 60px;
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