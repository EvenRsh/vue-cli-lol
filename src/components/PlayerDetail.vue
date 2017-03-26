<template>
  <div class="playerDetail">
     123
  </div>
</template>

<script>


export default {
  name: 'playerDetail',
  data () {
    return {
      
    }
  },
  components:{},
  methods: {
  
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
 
  },
  mounted(){
   console.log(this.$route.params)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped="">

</style>
