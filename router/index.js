import App from '../App'
import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home/home'
import wenz from '@/page/wenz/wenz'
import fax from '@/page/fax/fax'
import xinx from '@/page/xinx/xinx'
import homelist from '@/components/common/homelist'
import homedetail from '@/page/home/children/homeDetail'
import register from '@/page/register/register'
import login from '@/page/login/login'
Vue.component('homeList',homelist);
Vue.component('homeDetail',homedetail);
Vue.use(Router)

export default new Router({
  linkActiveClass:'is-selected',
  routes: [
    {
      path: '/',
      component: home,
      redirect:{name:home},
      children:[
        {
          path:'',
          redirect:'/home',
        },
        {
          name:'home',
          path:'/home',
          components:{home:home,homelist:homelist,homedetail:homedetail},
        },
      ]
    },
    {
      path: '/wenz',
      component: wenz
    },
    {
      path:'/fax',
      component:fax,
    },
    {
      path:'/xinx',
      component:xinx,
    },
    {
      path:'/register',
      component:register,
    },
    {
      path:'/login',
      component:login,
    },
  ],

  beforeRouteEnter:(to,from,next)=>{  //这个是在进入路由在内容页里面配置的，
    console.log(to);
    console.log(from);
    console.log(123);
    next();
  }
})

