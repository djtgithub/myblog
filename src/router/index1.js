import Vue from 'vue'
import Router from 'vue-router'
import Head from '@/components/common/header'
import Nav from '@/components/common/nav'
import Home from '@/pages/home'
import Page1 from '@/pages/page1'
import Page2 from '@/pages/Page2'

import Login from '@/pages/login/login'
import Register from '@/pages/register/register'
import Forgetpassword from '@/pages/forgetpassword/forgetpassword'

// 个人中心页面
import Contentmodification from '@/pages/personalcenter/Contentmodification'

// 图片欣赏更多页
// 
import Image from '@/pages/images/images'

import store from '../store'
Vue.prototype.store = store;
Vue.use(Router)


const router = new Router({
  routes: [{

      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register

    }, {
      path: '/forgetpassword',
      name: 'Forgetpassword',
      component: Forgetpassword

    },
    {
      path: '/nav',
      name: 'Nav',
      component: Nav
    }, {
      path:'/Contentmodification',
      name:'Contentmodification',
      component:Contentmodification

    },{
      path:'/Image',
      name:'Image',
      component:Image
    },{
      path: '/home',
      component: Home,
      redirect: '/page1',
      meta: {
        requireLogin: true,
      },
      children: [{
        path: '/page1',
        name: 'Page1',
        component: Page1
      }, {
        path: '/page2',
        name: 'Page2',
        component: Page2
      }]
    },
    {
      path: '**', // 错误路由
      redirect: '/home' //重定向
    },


  ]




})

//根据user是否为一个空对象来判断本地登录状态

router.beforeEach((to, from, next) => {

  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
  const route = ['Page1', 'Login','Register','Forgetpassword'];
  let isLogin = store.state.user.login=== true ? true : false; // 是否登录


  // 未登录状态；当路由到route指定页时，跳转至login
  if (route.indexOf(to.name) < 0) {
    if (!isLogin&&store.state.user.token=='') {
        next();
       router.push({ path:'/login'});
    }
  }

  
  // 已登录状态；当路由到login时，跳转至home 
  if (to.name === 'Login') {
    if (isLogin) {
        next();
      router.push({ path:'/home',});
    }else{
       next();
    }
  }
  next();

});


export default router;
