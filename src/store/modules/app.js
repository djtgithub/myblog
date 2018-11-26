import Cookies from 'js-cookie';


const app = {
  state: {
    loading: Cookies.get('Loading'),
    toast:Cookies.get('Toast') === true ? true : false,
  },
  // 状态值的改变方法，操作状态值
  // 提交mutiadtions是更改vuex状态的唯一方法
  mutations: {
    SET_LOADING: (state, loading) => {
      state.loading = loading;
    },
    SET_TOAST: (state, toast) => {
      state.toast = toast;
     
    },
  },
  actions:{
      SET_LOADING: ({ commit },loading) => {
        commit('SET_LOADING',loading)
      },
      SET_TOAST: ({ commit },toast) => {
        alert(toast)
        commit('SET_TOAST',toast)
      },

     }


}


export default app;
