import Cookies from 'js-cookie';


const user={
     state:{
     	token:Cookies.get('Aadmin-Token'),
      login:Cookies.get('Login')
     },
     // 状态值的改变方法，操作状态值
     // 提交mutiadtions是更改vuex状态的唯一方法
     mutations:{
     	SET_TOKEN: (state, token) => {
               state.token = token;
          },
      SET_LOGIN: (state,login) => {
                state.login = login;
          }
     },
     actions:{
      SET_TOKEN: ({ commit },token) => {
        commit('SET_TOKEN',token)
      },
      SET_LOGIN: ({ commit },login) => {
        commit('SET_LOGIN',login)
      },

     }


}


export default user;