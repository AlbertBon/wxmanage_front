import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    }, {
      path: '/login',
      component: resolve => require(["../components/page/Login.vue"], resolve)
    }, {
      path: '/home',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      //component:function (resolve) {
      // return require(['../components/common/Home.vue'],resolve)
      // }
      children:[
        {
          path:'/',
          components: {
            default:resolve=>require(['../components/page/Welcome.vue'],resolve),
            main:resolve=>require(['../components/page/Welcome.vue'],resolve),
            wechatList:resolve=>require(['../components/page/WechatList.vue'],resolve),
            wechatList_page:resolve=>require(['../components/page/WechatListPage.vue'],resolve),
          }
        },
        //  {
        //   path:'/wechatList',
        //   component: resolve=>require(['../components/page/WechatList.vue'],resolve)
        // }
      ]
    },
    // {
    //   path: '/main',
    //   components:{
    //     welcome:Welcome,
    //   }
        
    // }

  ]
})
