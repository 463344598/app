import {
	GET_NAME,GET_NAME1,GET_NUM,GET_XH,GET_HQ,GET_gNUM
} from './mutation-types.js'

import {setStore, getStore} from '../config/mUtils'

export default {
	//router  home的状态


  GET_NAME(state, xname) {
    state.xname = 'homedetail';
  },
  GET_NUM(state,n){
    if(n){
      state.xemun1=Number(getStore('num'))
      let qq=++state.xemun1
     // console.log(qq);
      setStore('num',qq)
    }else{
      state.xemun1=Number(getStore('num'))
      let qq1=--state.xemun1
     // console.log(qq1);
      setStore('num',qq1)
    }
  },
  GET_gNUM(state,n){
    let num1 =getStore('num')
    if (num1) {
      state.xnums = Number(num1);
    }
   //console.log(state.xnums);
  },
  GET_XH(state,n){
    let initCart =getStore('xh')
    if (initCart) {
      state.cartList = JSON.parse(initCart);
    }
//console.log([...state.cartList,...n]);
    let arr=[];

    arr=[...state.cartList]
    arr.push(n)
    console.log(arr);
    setStore('xh',arr)
    //setStore('xh',[...state.cartList,...n])
  },
  GET_HQ(state){
    let initCart =getStore('xh')
    if (initCart) {
      state.cartList = JSON.parse(initCart);
    }
  },


}
