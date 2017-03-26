<template>
  <div class="player" >
     <div class="search" >
       <el-input v-model="input" placeholder="请输入玩家名字" ></el-input>
     <el-button type="primary" icon="search" @click="search">搜索</el-button>
     </div>
    <div class="listcontainer" :style="{height:listHeight-146+'px'}">
      <div class="list" v-for="list in playerSearchResult" :key="list.id">
      <router-link :to="{name: 'playerDetail', params: {qquin:list.qquin, vaid: list.area_id }}">
        <div class="playerImg">
          <img :src="TGPICON+list.icon_id + '.png'">
        </div>
        <div class="playerMsg">
          <p>{{ list.name }}</p>
            <p>
              {{ list.area_id | getAreaName }}
              <span>等级:{{ list.level }}</span>
            </p>
        </div>
      </router-link>
    </div>
    </div>
  </div>
</template>

<script>

import { getAreaName } from '../filters'

const TGPICON = 'http://cdn.tgp.qq.com/lol/images/resources/usericon/'
export default {
  name: 'player',
  replace: false,
  data () {
    return {
      input:'中国龙',
      TGPICON:TGPICON,
      playerSearchResult:'',
      listHeight:''
    }
  },
  components:{
 
  },
  filters: {
    getAreaName
  },
  methods: {
  
    search(){
      this.$http.get('http://lolapi.games-cube.com/UserArea',{
          params:{
            keyword:encodeURI(this.input),
          },
          headers: {
            "DAIWAN-API-TOKEN": "78710-B0810-777C7-C9A85"
          },
        }).then(function(data){
          // console.log(data.data);
          this.playerSearchResult = data.data.data;
        })
    },
   getClientHeight: function() {
          var self = this;
          // console.log(window.screen);
          this.listHeight = window.screen.height;
          window.addEventListener("resize", function() {
            // console.log(window.screen);
            //console.log(document.body.clientHeight);
            self.listHeight = window.screen.height
          })
        } 
   
  },
  mounted(){
    //http://localhost/myfile/vue-lol/test.php
    //http://1.gumptravel.applinzi.com/travel.php
    this.search();
    this.getClientHeight();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped="">
 .search,.list a{
  display: flex;

 }
 .list{
  border-bottom: 1px solid #eee;
 }
 .listcontainer{
  height: 500px;
  overflow:auto;
 }
.playerImg img {
    display: block;
    border-radius: 50%;
    width: 55px;
    height: 55px;
    margin: 5px 10px;
  }

.playerMsg p{
  margin-top: 5px;
  margin-left: 5px;
}
</style>
