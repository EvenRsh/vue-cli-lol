<template>
    <header>
       <div class="row header">
        <div class="wrap">
          <i class="el-icon-menu"></i>
          <span class="title">{{title}}</span>
          <b class="el-icon-arrow-down"></b>
        </div>
       </div>
     </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'header',
  data () {
    return {
      // title:"资讯",
    }
  },
  computed: {
    title:function(){
      return this.$store.state.title
    }
  },
  created(){
    // console.log(this.$router)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.header{
    height: 50px;
    background-color: #58B7FF;
    padding: 0 10px;
      .wrap{
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flex;
        display: -o-flex;
        display: flex;
        justify-content: space-between;
        padding-top: 15px;
      }
      i,b{
        color: #fff;
      }
      span{
        font-size: 20px;
        margin-top: -4px;
      }
  }
</style>
