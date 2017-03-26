<template>
    <div class="news-banners">
        <swiper :options="swiperOption" >
          <swiper-slide v-for="news in bannerNews" :key="news.id" ><a :href="news.article_url" ><img :src="news.image_url_big" class="banner-item"  alt="" height="20%" width="100%" style="height: 200px;"></a></swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'carousel',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 1000,
        loop:true
      },
      bannerNews:'',
    }
  },
  methods:{
    getBanner(){
       this.$http.jsonp('http://localhost/myfile/vue-lol/test.php', {
                  params: {
                      // header: "78710-B0810-777C7-C9A85",
                      // callback: "JSON_CALLBACK",
                      url: 'http://qt.qq.com/static/pages/news/phone/c13_list_1.shtml'
                  }
              }).then(function(data) {
                  // console.log(data)
                  this.bannerNews=data.data.list;
              })
    }
  },
  mounted(){
    this.getBanner()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
