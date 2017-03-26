<template>
  <div class="news">
      <wswiper></wswiper>
      <wlist></wlist>
  </div>
</template>

<script>
// import { swiper, swiperSlide } from 'vue-awesome-swiper'

import wswiper from './wswiper'
import wlist from './wlist'

export default {
  name: 'news',
  data () {
    return {
      
    }
  },
  components:{
    wswiper,
    wlist
  },
  methods: {
  
   
  },
  mounted(){
    //http://localhost/myfile/vue-lol/test.php
    //http://1.gumptravel.applinzi.com/travel.php

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped="">
 
</style>
