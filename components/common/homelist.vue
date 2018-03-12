<template>
  <div>
    <!-- tab-container -->
    <mt-tab-container class="page-tabbar-container" v-model="selected" style="padding-top: 4px;">
      <mt-tab-container-item id="1" v-show="this.zt=='q1'">
        <mt-loadmore :bottom-method="loadBottom"  @top-status-change="handleTopChange" :auto-fill="false" ref="loadmore">
           <div style="position: relative;" v-for="(item,index) in sj1" :key="index">
             <span style="float: right" @click="stars1(item,index)" :class="item.show ? 'star1 mui-icon mui-icon-starhalf':'star1 mui-icon mui-icon mui-icon-star'" :style="show?'color:#333':'color:red'" ></span>
            <div  class="mui-card" @click="call(item.id,item)" >
              <input type="text" ref="ss" v-model="index" hidden >

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
           </div>
        </mt-loadmore>
      </mt-tab-container-item>
      <mt-tab-container-item id="2" v-show="this.zt=='q2'">
        <mt-loadmore :bottom-method="loadBottom"  @top-status-change="handleTopChange" :auto-fill="false" ref="loadmore">
          <div v-for="item in sj2" class="mui-card"  @click="call(item.id,item)">
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
            <li class="mui-table-view-cell mui-media" v-for="item in sj3"  @click="call(item.id,item)">
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
        <mt-loadmore :bottom-method="loadBottom"  @top-status-change="handleTopChange" :auto-fill="false" ref="loadmore">
          <div v-for="(item,index) in sj6" :key="index" class="mui-card"  @click="call(item.id,item,index)">
            <div v-if="item.show">
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
          </div>
        </mt-loadmore>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script type="text/ecmascript-6">
  import {foodMenu ,zhufang1,zhufang2,zhufang3,zhufang4} from '../../ajax/ajax'
  import connect from '../../store/connect'
  import {mapState,mapMutations} from 'vuex'
  import {setStore, getStore,removeStore} from '../../config/mUtils'
  import Vue from 'vue'
  export default {
    data () {
      return {
        selected:"1",
        topStatus: '',
        sj1:[],
        sj2:[],
        sj3:[],
        sj4:[],
        sj5:[],
        sj6:[],
        idz:'',
        show:false,
      }
    },
    created(){
      this.GET_HQ();
      this.sj6=this.cartList
     zhufang1().then(res=>{this.sj1=res.data.data.list});

      zhufang2().then(res=>{this.sj2=res.data.data.list});

      zhufang3().then(res=>{this.sj3=res.data.data.list});

      zhufang4().then(res=>{this.sj4=res.data.data.list});
      //this.sj5=this.GET_HQ()

     /* connect.$emit('name1','homelist')*/

   //console.log(this.$store.state.xname);

     // this.$store.state.xname='3333'
console.log(this.se);
    },
    computed: {
     ...mapState([
        'xname','xele','stars','xemun1','xarr','cartList','xnums'
      ]),

    },
    props:['zt','se'],

    methods: {
      ...mapMutations([
        'GET_NAME','GET_NUM','GET_XH','GET_HQ','GET_gNUM'
      ]),
      call(id1,ele){
        connect.$emit('name1','homedetail')
        connect.$emit('id1',id1)
        connect.$emit('ele',ele)



        this.GET_NAME(this.xname);






      },stars1(item,index){
        //console.log(this.cartList);

       //console.log(this.cartList);
       // this.sj5.push(item);
        var hash = {};
        this.sj5 = this.sj5.reduce(function(item, next) {
          hash[next.name] ? '' : hash[next.name] =  true && item.push(next);
          return item
        }, [])

        /*this.sj5.forEach(function(item,index){
          item.xh=1


          console.log(index);
        })*/
        var s=item.show=!item.show

        this.GET_XH(item);

        this.GET_NUM(s);


       // this.sj1=this.cartList
        this.GET_gNUM();
        this.GET_HQ();
        this.sj6=this.cartList
        connect.$emit('nums',this.xnums)



      },

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
      handleTopChange(status) {
        this.topStatus = status;
      }

    },
    watch:{

      /*tab1:function(){console.log(22);
       zhufang2().then(res=>{this.sj2=res.data.data.list})
       }*/
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .mui-card-footer span{ font-size: 15px;}
  .mint-loadmore{ width: 100%;}
  .mui-card{    box-shadow: 0 1px 5px rgba(0,0,0,0.2);
   }
.star1{
  position: absolute;
  z-index: 111;
  right: 24px;
  top: 10px;}
</style>
