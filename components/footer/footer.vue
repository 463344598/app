<template>
  <div>
    <mt-tabbar v-model="selected" style="z-index: 200;    position: fixed;">
      <mt-tab-item id="首页" >

        <router-link :to="'home'">
          <p><img slot="icon" src="../../assets/100x100.png"></p>
          首页
        </router-link>

      </mt-tab-item>

      <mt-tab-item id="文章">
        <router-link :to="'wenz'">
          <p><img slot="icon" src="../../assets/100x100.png"></p>
        文章
        </router-link>
      </mt-tab-item>

      <mt-tab-item id="发现">
        <router-link :to="'fax'">
        <p><img slot="icon" src="../../assets/100x100.png"></p>
        发现
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="信息">
        <router-link :to="'xinx'">
        <p> <img slot="icon" src="../../assets/100x100.png"></p>
        信息
        </router-link>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'footers',
  data () {
    return {
      selected:""
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
