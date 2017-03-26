<template>
  <div class="index">
      <wheader></wheader>
      <router-view></router-view>
     <!--  <wswiper></wswiper>
    <div class="news-list" :style="{height:listHeight-316+'px'}">
        <div class="news-list-item" v-for="news in newstNews">
          <a :href="news.article_url">
            <div class="news-list-item-img">
              <img :src="news.image_url_small" alt="">
            </div>
            <div class="news-list-item-title">
              <p class="title">{{ news.title }}</p>
              <p class="summary">{{ news.summary }}</p>
              <p class="time">
                {{ news.publication_date.split(' ')[0] }}
                <span class="pv">
                  {{ news.pv | pv }}阅
                </span> 
              </p>
            </div>
          </a>
        </div>
      </div> -->
   
    
    <wfooter></wfooter>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import wheader from './wheader'
import wfooter from './wfooter'
// import wswiper from './wswiper'

export default {
  name: 'index',
  data () {
    return {
      
    }
  },
  components:{
    wheader,
    wfooter,
    // wswiper
  },
  methods: {
  
    
   /* getBanner(){
       this.$http.jsonp('http://localhost/myfile/vue-lol/test.php', {
                  params: {
                      // header: "78710-B0810-777C7-C9A85",
                      // callback: "JSON_CALLBACK",
                      url: 'http://qt.qq.com/static/pages/news/phone/c13_list_1.shtml'
                  }
              }).then(function(data) {
                  // console.log(data)
                  this.bannerNews=data.data.list;
                  this.getNews()
              })
    },*/
    
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
