<template>
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
               <!--  <span class="pv">
                  {{ news.pv | pv }}阅
                </span> -->
              </p>
            </div>
          </a>
        </div>
      </div>
</template>

<script>
export default {
  name: 'newslist',
  data () {
    return {
      newstNews:'',
      listHeight:'' 
    }
  },
  methods:{
   getNews(){
      this.$http.jsonp('http://localhost/myfile/vue-lol/test.php', {
                  params: {
                      // header: "78710-B0810-777C7-C9A85",
                      url: 'http://qt.qq.com/php_cgi/news/php/varcache_getnews.php?id=12&page=0&plat=ios&version=33'
                  }
              }).then(function(data) {
                  // console.log(data.data)
                  this.newstNews=data.data.list;
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
    this.getNews();
    this.getClientHeight()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.news {
  &-list {
    height: 300px;
    overflow: auto;
    background: #f0f0f0;
    padding: 0 10px;
    padding-top: 5px;
    &-item {
      margin-bottom: 5px;
      a {
        background: #fff;
        display: flex;
        flex-direction: row;
        padding: 10px 0;
      }
      &-img {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 90px;
          height: 65px;
        }
      }
      &-title {
        padding-left: 5px;
        .title {
          font-size: 14px;
        }
        .summary {
          font-size: 12px;
          color: #999;
          padding: 2px 0;
        }
        .time {
          font-size: 12px;
          color: #999;
          .pv {
            color: goldenrod;
          }
        }
      }
    }
  }
}

</style>
