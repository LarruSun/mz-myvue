<template>
  <div id="scrollAD">
        <swiper :options="swiperOption" class="mySwiper">
        <template v-if="scrollAdData">
            <swiper-slide v-for="(item,index) in scrollAdData" :key="index">
                <img :src="item.imageUrl">
            </swiper-slide>
        </template>
        <template v-else>
            <swiper-slide class="erro">网络错误:404</swiper-slide>
        </template>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {

  props:['scrollAdData'],
    data(){
        return{
              swiperOption: {
                  spaceBetween: 0,
                  centeredSlides: true,
                  autoplay: {
                      delay: 1000,
                      disableOnInteraction: false
                  },
                  pagination: {
                      el: '.swiper-pagination',
                      clickable: true
                  }
              }
          }
    },
    created(){
      
      // setTimeout(()=>{this.focus=this.scrollAdData;console.log(this.focus)},1000)
      
    },
    methods:{},
    components:{
        swiper,
        swiperSlide
    }
}
</script>

<style lang='scss' scoped>
     #scrollAD {
          width: 100%;
          height: 5.3125rem;
        //   margin-top: 50px;
        .mySwiper {
          width: 100%;
          height: 100%;
          img {
              width:100%;
              height: 100%;
          }
        }
        .erro{
            width: 100%;
            height: 100%;
            text-align: center;
            line-height: 5rem;
            font-size: 20px;
            // color: #;
            background:#ccc;
            opacity: .5;
        }
     }
</style>


