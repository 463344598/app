// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './config/rem'
import './components'
import './ajax/ajax'


//Mint:引入mint-ui
import Mint from 'mint-ui';
//mint:引入mint-ui样式
import 'mint-ui/lib/style.css';
import Indicator from 'mint-ui/lib/indicator';
//MUI:引入mui样式
import './images/vendor/mui/dist/css/mui.css'
//MUI:引入全局样式
import './style/global.less';

Vue.use(Mint);


/*
import MuseUI from 'muse-ui'
import '../node_modules/muse-ui/dist/muse-ui.css'
//import '../node_modules/muse-ui/dist/theme-carbon.css'
Vue.use(MuseUI)
*/

//AXIOS：引入
import Axios from 'axios';

//挂载原型
window.$ajax=Axios;

Axios.interceptors.request.use(function(config){
  //显示图标
  Indicator.open({
    text: '加载中...',
    spinnerType: 'fading-circle'
  });
  return config;
});
Axios.interceptors.response.use(function(config){
  //隐藏图标
  Indicator.close();
  //获取到config中的data，进行加工
  return config;
});


Vue.filter('xingh',function(value){
  let r='';
  for(var i=0;i<value.length;i++){
    r+='*'
  }
  return r;
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,store,
  components: { App },
  template: '<App/>'
})
