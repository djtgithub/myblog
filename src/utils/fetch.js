import axios from 'axios';
import store from '../store';
import vue  from 'vue';
import qs from 'qs';
import Cookies from 'js-cookie';
import Vue from 'vue'
import {Message} from 'iview'
Vue.prototype.$Message = Message

const service = axios.create({
	baseURL:'https://d.apicloud.com/mcm/api/',
	time:5000
});


//request拦截器
const that=this;
 service.interceptors.request.use(config => {
 	var now = Date.now();
	var appKey = sha1("A6082069061619" + 'UZ' + "04C51A3A-DA51-356A-9B37-C10E9036FBDE" +'UZ' + now)+ '.' +now;
 	config.headers = {
        "X-APICloud-AppId": "A6082069061619",
        "X-APICloud-AppKey": appKey,

	};
	config.data = config.data;
	// config.data = qs.stringify(config.data);
    // Do something before request is sent
    store.state.app.loading=true;
     // store.commit('SET_LOADING');
    return config;

 },error =>{
 	 console.log(error); // for debug
 })





//response拦截器 
service.interceptors.response.use(
  response => {

     store.state.app.loading=false;

     // if(response.status==200 &&response.statusText=='OK'){
     // 	 Message.success({
     //            content: '登录成功',
     //        });
     // }



console.log(JSON.stringify(response))
     return response;

  },
  error => {
  	store.state.app.loading=false;//在这里对返回的数据进行处理

     // Message.error('登录失败');
   return error;
    console.log('err' + JSON.stringify(error));// for debug
    // vue.$Message.error({
    //     message: error.message,
    //     duration: 5 * 1000,
    //     closable: true
    // });
  }
)

export default service;