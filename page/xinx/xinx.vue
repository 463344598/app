<template>
    <div class="Ttop" style="background-color: #fff;">
      <div class="info" v-if="!info" >
        <router-link :to="'login'">
          <div>
            <button type="button" class="mui-btn mui-btn-primary mui-btn-outlined btnf" style="margin-left: 125px;">登录</button>
          </div>
        </router-link>
        <router-link :to="'register'">
          <button type="button" class="mui-btn mui-btn-primary mui-btn-outlined btnf">注册</button>
        </router-link>
      </div>

      <div class="mui-content" style="max-width: 95%;margin: 0 auto; background: none;" v-else="">
        <div class="mui-card">
          <div class="mui-card-content">
            <ul class="mui-table-view">
              <li class="mui-table-view-cell">
                <span class="mui-ring">用户名:</span>
                {{info.username}}
              </li>
              <li class="mui-table-view-cell">
                <span class="mui-ring">密码:</span>
                {{info.passworld}}
              </li>
              <li class="mui-table-view-cell">
                <span class="mui-ring">余额：</span>
                {{info.yue}}
              </li>
              <li class="mui-table-view-cell">
                <span class="mui-ring">性别:</span>
                {{info.xingbe}}
              </li>
              <li class="mui-table-view-cell">
                <span class="mui-ring">年龄:</span>
                {{info.nianling}}
              </li>
              <li class="mui-table-view-cell">
                <span class="mui-ring">我喜欢:</span>
                {{this.enum1}}
              </li>
              <button type="button" class="mui-btn mui-btn-primary mui-btn-outlined btnf" style="margin-bottom: 15px;">修改资料</button>
              <button type="button" @click="clear" class="mui-btn mui-btn-primary mui-btn-outlined btnf" style="margin-bottom: 15px;">退出登录</button>
            </ul>
          </div>
        </div>
      </div>

<div class="bottom1"></div>
    </div>
</template>

<script type="text/ecmascript-6">
  import {infos} from '../../ajax/ajax'
  import {mapState,mapMutations} from 'vuex'
  import {setStore, getStore,removeStore} from '../../config/mUtils'
  import connect from '../../store/connect'
  export default {
    data () {
      return {
        info:[],
        enum1:getStore('num')||0,
      }
    },
    created(){
      if(!this.info){
        this.info = JSON.parse(getStore('info'));
      }



    },
    computed: {
      ...mapState([
        'xname','xele','xnums'
      ]),
      ...mapMutations([
        'GET_NAME','GET_NAME1'
      ]),

    },
    mounted(){
      this.info = JSON.parse(getStore('info'))

    },
    methods: {
      clear(){
        removeStore('info');
        this.$router.push('login')
      }

    },
    watch:{


    },
    beforeRouteEnter:(to,from,next)=>{  //这个是在进入路由在内容页里面配置的，


      next();
    }
  }
</script>
<style lang="less">
.mui-card-footer span{ font-size: 15px;}
  .mint-loadmore{ width: 100%;}
.mui-card{    box-shadow: 0 1px 5px rgba(0,0,0,0.2);}
.wrap_info{ width: 90%; margin: 0 auto;}
  .mui-ring{ margin-right: 10px; }
.btnf{ margin-top: 10px; margin-left: 15px; float: left; }
</style>
