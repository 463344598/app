<template>
  <div>
    <header id="header" class="mui-bar mui-bar-nav" style="z-index: 200">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="houtui" style="padding-top: 8px;" v-if="name!=='/home'"></a>

      <div class="homeshow" v-else><a href="./">首页</a></div>
      <h1 class="mui-title">导航栏</h1>
      <mt-search
        v-model="value"
        cancel-text="取消"
        placeholder="搜索">
      </mt-search>
    </header>
  </div>
</template>

<script>
export default {
  name: 'headers',
  data () {
    return {
      name:this.$router.options.routes[0].children[0].redirect,
      value:''
    }
  }
  ,created(){
   /* console.log(this.$router);
    console.log(this.$router.options.routes[0].children[0].redirect);*/

  },
  props: ['namehome']
  ,methods:{
    houtui:function(){
      this.$router.go(-1)
    },
    qianjin:function(){
      this.$router.go(1)
    },
  },

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">


</style>
