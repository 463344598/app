<template>
    <div class="Ttop" style="background-color: #fff;">
      <div class="mui-content" style="max-width: 95%;margin: 0 auto; background: none;" >
        <div class="mui-card">
          <div class="title1">会员登录</div>
          <form class="mui-input-group">
            <div class="mui-input-row">
              <label>用户名:</label>
              <input type="text" class="mui-input-clear" placeholder="请输入用户名" v-model="phoneNumber">
            </div>
            <div class="mui-input-row">
              <label>输入密码:</label>
              <input type="password" class="mui-input-password" placeholder="请输入密码" v-model="oldPassWord">
            </div>
            <div class="mui-input-row">
              <label>确认密码:</label>
              <input type="password" class="mui-input-password" placeholder="请输入密码" v-model="confirmPassWord">
            </div>
            <div class="mui-input-row">
              <label>年龄:</label>
              <input type="text" class="mui-input-clear" placeholder="年龄" v-model="nianl">
            </div>
            <div class="mui-input-row">
              <label>性别:</label>
              <input type="text" class="mui-input-clear" placeholder="性别" v-model="xingb">
            </div>

            <div class="mui-button-row">
              <button type="button" class="mui-btn mui-btn-primary" @click="resetButton" >确认</button>
              <button type="button" class="mui-btn mui-btn-danger" >取消</button>
            </div>
          </form>
        </div>
      </div>

<div class="bottom1"></div>
    </div>
</template>

<script type="text/ecmascript-6">
  import {info} from '../../ajax/ajax'
  import {mapState,mapMutations} from 'vuex'
  import {setStore, getStore} from '../../config/mUtils'
  import connect from '../../store/connect'
  import { MessageBox } from 'mint-ui';
  export default {
    data () {
      return {
        phoneNumber:'',
        oldPassWord:'',
        confirmPassWord:"",
        nianl:'',
        xingb:"",
        showAlert:'',
        alertText:'2',
      }
    },
    created(){

    },
    computed: {
      ...mapState([
        'xname','xele','xnums'
      ]),
      ...mapMutations([
        'GET_NAME','GET_NAME1'
      ]),
      //判断手机号码
      rightPhoneNumber: function (){
        return /^1\d{10}$/gi.test(this.phoneNumber)
      }
    },
    methods: {
      mess(){
        MessageBox({
          message: this.alertText,
          showCancelButton: true
        });
      },
      resetButton(){

        if (!this.phoneNumber) {
          this.showAlert = true;
         this.alertText = '请输入正确的账号';
          this.mess();
          return
        }else if(!this.oldPassWord){
          this.showAlert = true;
          this.alertText = '请输入旧密码';
          this.mess();
          return
        }else if(!this.confirmPassWord){
          this.showAlert = true;
          this.alertText = '请输入新密码';
          this.mess();
          return
        }else if(this.oldPassWord !== this.confirmPassWord){
          this.showAlert = true;
          this.alertText = '两次输入的密码不一致';
          this.mess();
          return
        }
        else if(!this.nianl){
          this.showAlert = true;
          this.alertText = '请输入年龄';
          this.mess();
          return
        }
        else if(!this.xingb){
          this.showAlert = true;
          this.alertText = '请输入性别' +
            '';
          this.mess();
          return
        }

        setStore('info',{phoneNumber:this.phoneNumber,nianl:this.nianl,xingb:this.xingb})
        this.$router.push('xinx')
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
.right_phone_number{
  background-color: #4cd964;
}
.title1{ line-height: 50px; text-align: center;  text-indent: -4%; border-bottom: solid 1px #c8c7cc; width: 96%; position: relative; left: 4%;   }
</style>
