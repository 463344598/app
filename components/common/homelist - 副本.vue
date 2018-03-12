<template>
  <div>
    <!-- tab-container -->
    <mt-tab-container class="page-tabbar-container" v-model="selected" style="padding-top: 4px;">
      <mt-tab-container-item id="1" v-show="this.zt=='q1'">
        <mt-loadmore :bottom-method="loadBottom"  @top-status-change="handleTopChange" :auto-fill="false" ref="loadmore">
          <div v-for="item in sj1" class="mui-card">
            <!--页眉，放置标题-->
            <div class="mui-card-header mui-card-media">
              <img :src="item.icon" />
              <div class="mui-media-body">
                {{item.name}}
                <p>发表于 {{item.date}}</p>
              </div>
            </div>
            <!--内容区-->
            <div class="mui-card-content"><img style="width: 100%; height: 100%; float:left;background: rgba(0,0,0,.12);"  v-lazy="item.url[0].name+item.urlid" /></div>
            <!--页脚，放置补充信息或支持的操作-->
            <div class="mui-card-footer"><span class=" mui-icon mui-icon-chat">  评论{{item.see}}</span></div>
          </div>

          <div slot="top" class="mint-loadmore-top">
            <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
            <span v-show="topStatus === 'loading'">Loading...</span>
          </div>
        </mt-loadmore>
      </mt-tab-container-item>
      <mt-tab-container-item id="2" v-show="this.zt=='q2'">
        <mt-loadmore :bottom-method="loadBottom"  @top-status-change="handleTopChange" :auto-fill="false" ref="loadmore">
          <div v-for="item in sj2" class="mui-card">
            <!--页眉，放置标题-->
            <div class="mui-card-header mui-card-media">
              <img :src="item.icon" />
              <div class="mui-media-body">
                {{item.name}}
                <p>发表于 {{item.date}}</p>
              </div>
            </div>
            <!--内容区-->
            <div class="mui-card-content"><img style="width: 100%; height: 100%; float:left;background: rgba(0,0,0,.12);"  v-lazy="item.url[0].name+item.urlid" /></div>
            <!--页脚，放置补充信息或支持的操作-->
            <div class="mui-card-footer"><span class=" mui-icon mui-icon-chat">  评论{{item.see}}</span></div>
          </div>
        </mt-loadmore>
      </mt-tab-container-item>
      <mt-tab-container-item id="3" v-show="this.zt=='q3'">
        <mt-loadmore :bottom-method="loadBottom"  @top-status-change="handleTopChange" :auto-fill="false" ref="loadmore">
          <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in sj3">
              <a href="javascript:;">
                <img class="mui-media-object mui-pull-left" :src="item.icon+item.urlid">
                <div class="mui-media-body">
                  {{item.title}}
                  <p class='mui-ellipsis'>{{item.source}}</p>
                </div>
              </a>
            </li>
          </ul>
        </mt-loadmore>
      </mt-tab-container-item>
      <mt-tab-container-item id="4" v-show="this.zt=='q4'">

      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script type="text/ecmascript-6">
  import {foodMenu ,zhufang1,zhufang2,zhufang3,zhufang4} from '../../ajax/ajax'

  export default {
    data () {
      return {
        selected:"1",
        topStatus: '',
        sj1:[],
        sj2:[],
        sj3:[],
        sj4:[],
      }
    },
    created(){
      zhufang1().then(res=>{this.sj1=res.data.data.list});
      zhufang2().then(res=>{this.sj2=res.data.data.list});
      zhufang3().then(res=>{this.sj3=res.data.data.list});
      zhufang4().then(res=>{this.sj4=res.data.data.list});
    },
    mounted(){
      /*if(this.se==1){
        zhufang1().then(res=>{this.sj1=res.data.data.list});
      }else if(this.se==2){
        zhufang2().then(res=>{this.sj2=res.data.data.list});
      }*/
    },
    props:['zt','se'],

    methods: {
     /* tab1(){
        zhufang1().then(res=>{this.sj1=res.data.data.list})
        this.selected=this.se
        console.log(111);
      },
      tab2(){
        zhufang2().then(res=>{this.sj2=res.data.data.list})
        this.selected=this.se
      },
      tab3(){
        zhufang3().then(res=>{this.sj3=res.data.data.list})
        this.selected=this.se
      },
      tab4(){
        zhufang4().then(res=>{this.sj4=res.data.data.list})
        this.selected=this.se
        console.log(this.selected);
      },*/
      loadBottom(){
        if(this.se==1){
          console.log('上啦1');
          this.$refs.loadmore.onBottomLoaded();
          this.load1();
        }else if(this.se==2){
          console.log('上啦1');
          this.$refs.loadmore.onBottomLoaded();
          this.load2();
        }else if(this.se==3){
          console.log('上啦2');
          this.$refs.loadmore.onBottomLoaded();
          this.load3();
        }else if(this.se==4){
          console.log('上啦3');
          this.$refs.loadmore.onBottomLoaded();
          this.load4();
        }

      },
      load1(){
        zhufang1().then(res=>{this.sj1=[...this.sj1,...res.data.data.list];/* this.sj=this.sj.concat(res.data.contents);*/})

      },
      load2(){
        zhufang2().then(res=>{this.sj2=[...this.sj2,...res.data.data.list];/* this.sj=this.sj.concat(res.data.contents);*/})

      },
      load3(){
        zhufang3().then(res=>{this.sj3=[...this.sj3,...res.data.data.list];/* this.sj=this.sj.concat(res.data.contents);*/})

      },
      load4(){
        zhufang4().then(res=>{this.sj4=[...this.sj4,...res.data.data.list];/* this.sj=this.sj.concat(res.data.contents);*/})

      },
      handleTopChange(status) { console.log(11);
        this.topStatus = status;
      },

    },
    watch:{

      /*tab1:function(){console.log(22);
       zhufang2().then(res=>{this.sj2=res.data.data.list})
       }*/
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .mui-card-footer span{ font-size: 15px;}
  .mint-loadmore{ width: 100%;}
  .mui-card{    box-shadow: 0 1px 5px rgba(0,0,0,0.2);}

</style>
