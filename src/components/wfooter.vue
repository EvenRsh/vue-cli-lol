<template>
    <footer >
       <el-menu :default-active="activeIndex" class="el-menu-demo df" mode="horizontal" @select="handleSelect" >

      <el-menu-item index="1" ><router-link :to="{name: 'news', params: {id:'1'}}">资讯</router-link></el-menu-item>
      <el-menu-item index="2" ><router-link :to="{name: 'player', params: {id:'2'}}">玩家</router-link></el-menu-item>
      <el-menu-item index="3" ><router-link :to="{name: 'championList', tparams: {id:'3'}}">英雄</router-link></el-menu-item>
      <el-menu-item index="4" ><router-link :to="{name: 'video', params: {id:'4'}}">视频</router-link></el-menu-item>
      
    </el-menu>
     </footer>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      activeIndex: '1',
    }
  },
  methods:{
    handleSelect(key, keyPath) {
      this.activeIndex = key;
      switch(key){
        case '1':
        this.$store.commit('set_title','资讯')
        break;
        case '2':
        this.$store.commit('set_title','玩家')
        break;
        case '3':
        this.$store.commit('set_title','英雄')
        break;
        case '4':
        this.$store.commit('set_title','视频')
        break;

      }
    },
  },
  mounted(){
    // console.log(this.$route.params)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

.df{
    position: fixed;
  bottom: 0;
  left:0;
  width: 100%;
    display: flex;
    justify-content:space-between;

  }
</style>
