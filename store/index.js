import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  xname: 'homelist', // 名字
  xele:'',
  xemun1:'0',
  xarr:[],
  cartList:[],
  xnums:0,
}

export default new Vuex.Store({
	state,
	mutations,
})
