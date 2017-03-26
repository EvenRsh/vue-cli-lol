<template>
  <div class="ChampionList">
    <div class="listcontainer" v-if="championList.length > 0" :style="{height:listHeight-110+'px'}">
      <div class="list" v-for="champion in championList" :key="champion.id">
      <div class="championImg">
        <img :src="pic + champion.id + '.png'" width="90px" />
      </div>
      <div class="championInfo">
        <p class="title">
            {{ champion.title }} <br>
            <span class="name">{{ champion.cname }}({{ champion.ename }})</span>
          </p>
      </div>
     <!--  <router-link :to="{name: 'playerDetail', params: {qquin:list.qquin, vaid: list.area_id }}">
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
     
     </router-link> -->
    </div>

    </div>
  </div>
</template>

<script>

// import { getAreaName } from '../filters'
const pics = 'http://cdn.tgp.qq.com/pallas/images/champions_id/'

export default {
  name: 'ChampionList',
  replace: false,
  data () {
    return {
      input:'123',
      pic:pics,
      championList:''
    }
  },
  components:{
 
  },
  filters: {
    // getAreaName
  },
  methods: {
  
    getList(){
      this.$http.get('http://lolapi.games-cube.com/champion',{
          headers: {
            "DAIWAN-API-TOKEN": "78710-B0810-777C7-C9A85"
          },
        }).then(function(data){
          console.log(data.data.data);
          this.championList = data.data.data;
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
    this.getClientHeight()
    this.getList();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped="">
 .search,.list a{
  display: flex;
 }
 .list{
  border: 1px solid #eee;
  box-sizing: border-box;
  padding:5px;
  margin:5px;
 }
 .listcontainer{
  height: 500px;
  overflow:auto;
  display: flex;
  padding: 5px;
  flex-wrap: wrap;
 }
 .listcontainer>div{
  flex :45%;
  text-align: center;
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
