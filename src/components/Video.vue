<template>
  <div class="video" >
    video
  </div>
</template>

<script>

import { getAreaName } from '../filters'

const TGPICON = 'http://cdn.tgp.qq.com/lol/images/resources/usericon/'
export default {
  name: 'video',
  replace: false,
  data () {
    return {
      TGPICON:TGPICON,
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

</style>
