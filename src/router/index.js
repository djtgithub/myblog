import Vue from 'vue'
import Router from 'vue-router'
// import Head from '@/components/common/header'
// import Nav from '@/components/common/nav'
// import Home from '@/pages/home'
// import Page1 from '@/pages/page1'
// import Page2 from '@/pages/Page2'

// import Login from '@/pages/login/login'
// import Register from '@/pages/register/register'
// import Forgetpassword from '@/pages/forgetpassword/forgetpassword'

// // 个人中心页面
// import Contentmodification from '@/pages/personalcenter/Contentmodification'

// // 图片欣赏更多页
// // 
// import Image from '@/pages/images/images'

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
      component:resolve => require(['@/pages/login/login'],resolve)
    },
    {
      path: '/register',
     component:resolve => require(['@/pages/register/register'],resolve)

    }, {
      path: '/forgetpassword',
     component:resolve => require(['@/pages/forgetpassword/forgetpassword'],resolve)

    },
    {
      path: '/nav',
      component:resolve => require(['@/components/common/nav'],resolve)
    }, {
      path:'/Contentmodification',
       component:resolve => require(['@/pages/personalcenter/Contentmodification'],resolve)

    },{
      path:'/Image',
       component:resolve => require(['@/pages/images/images'],resolve)
    },{
      path: '/home',
        component:resolve => require(['@/pages/home'],resolve),
      // component: Home,
      redirect: '/page1',
      meta: {
        requireLogin: true,
      },
      children: [{
        path: '/page1',
        component:resolve => require(['@/pages/page1'],resolve)
      }, {
        path: '/page2',
        // name: 'Page2',
       component:resolve => require(['@/pages/page2'],resolve)
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
console.log(store.state.user.token===undefined)
 // alert(store.state.user.token)
  // 未登录状态；当路由到route指定页时，跳转至login
  if (route.indexOf(to.name) < 0) {
    if (!isLogin&&store.state.user.token==''||store.state.user.token===undefined) {
console.log('sf')
        // next();
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
