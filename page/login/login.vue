<template>
    <div class="Ttop" style="background-color: #fff;">
      <div class="mui-content" style="max-width: 95%;margin: 0 auto; background: none;" v-if="">
        <div class="mui-card">
          <div class="title1">会员登录</div>
          <div class="mui-card-content">
            <form class="mui-input-group">
              <div class="mui-input-row">
                <label>用户名</label>
                <input type="text" class="mui-input-clear" placeholder="请输入用户名" v-model="username">
              </div>
              <div class="mui-input-row">
                <label>密码</label>
                <input type="password" class="mui-input-password" placeholder="请输入密码" v-model="passworld">
              </div>
              <div class="mui-button-row">
                <button type="button" @click="dd"  class="mui-btn mui-btn-primary" >确认</button>
                <button type="button" class="mui-btn mui-btn-danger" >取消</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <router-link :to="'register'">
        <button type="button"class="mui-btn mui-btn-danger" style="width: 90%; margin: 0 auto; display: block" >注册</button>
      </router-link>
<div class="bottom1"></div>
    </div>
</template>

<script type="text/ecmascript-6">
  import {infos} from '../../ajax/ajax'
  import {mapState,mapMutations} from 'vuex'
  import {setStore, getStore} from '../../config/mUtils'
  import connect from '../../store/connect'
  import { MessageBox } from 'mint-ui';
  export default {
    data () {
      return {
        username:'',
        passworld:'',
        infos:[],
      }
    },
    created(){
      infos().then(res=>{

        this.infos=res.data.data;
      })

     /* this.username=''*/

    },
    computed: {
      ...mapState([
        'xname','xele','xnums'
      ]),
      ...mapMutations([
        'GET_NAME','GET_NAME1'
      ]),

    },
    methods: {
      dd(){
       if(this.username==this.infos.username&&this.passworld==this.infos.passworld){
         //setStore('info',{phoneNumber:this.phoneNumber,nianl:this.nianl,xingb:this.xingb});
         this.$router.push('xinx');

           setStore('info', this.infos)

       }else{
         MessageBox({
           message: "账号密码不正确",

         });
       }

      }
    },
    watch:{
      frontPoints(newValue, oldValue) {
        console.log(newValue)
      },

    }
  }
</script>
<style lang="less">
.mui-card-footer span{ font-size: 15px;}
  .mint-loadmore{ width: 100%;}
.mui-card{    box-shadow: 0 1px 5px rgba(0,0,0,0.2);}
.title1{ line-height: 50px; text-align: center;  text-indent: -4%; border-bottom: solid 1px #c8c7cc; width: 96%; position: relative; left: 4%;   }
</style>
