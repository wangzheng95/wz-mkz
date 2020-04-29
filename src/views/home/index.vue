<template>
  <div class="page-home">
    <!-- 首页头部begin -->
    <header class="header">
      <h1 class="logo">
        <a href="/"
          ><img
            src="https://static.mkzcdn.com/mobile/img/h5_navlogo.png"
            alt="漫客栈"
        /></a>
      </h1>
      <a href="/search/"><i class="iconfont icon-sousuo"></i></a>
    </header>
    <br>
    <!-- 首页头部end -->
    <swiper :autoplay='1000' :loop='true' class='my-swiper'>
        <!-- <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div> -->
        <swiperItem>
          <a href="">
            <img src="../../assets/banner/01-banner.jpg" alt="">
          </a>
        </swiperItem>
         <swiperItem>
          <a href="">
            <img src="../../assets/banner/02-banner.jpg" alt="">
          </a>
        </swiperItem>
         <swiperItem>
          <a href="">
            <img src="../../assets/banner/03-banner.jpg" alt="">
          </a>
        </swiperItem>
         <swiperItem>
          <a href="">
            <img src="../../assets/banner/04-banner.jpg" alt="">
          </a>
        </swiperItem>
         <swiperItem>
          <a href="">
            <img src="../../assets/banner/05-banner.jpg" alt="">
          </a>
        </swiperItem>
    </swiper>
  </div>
</template>

<script>
// import swiper from '@/components/swiper/swiper.vue'
// import swiperItem from '@/components/swiper/swiperItem.vue'
import { swiper, swiperItem } from '@/components/swiper'
export default {
  name: 'home',
  components: {
    swiper,
    swiperItem
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/styles/mixins.scss';
.page-home {
  height: 100%;
  // width: 100%;
  // display: flex;
  // flex-direction: column;
  .header {
    @include border-bottom;
    display: flex;
    justify-content: space-between;
    height: 44px;
    // border-bottom: 1px solid #ebebeb;
    text-align: center;
    line-height: 44px;
    font-size: 36px;
    background: #fff;
    z-index: 99;
    .logo {
      width: 71px;
      height: 29px;
      float: left;
      margin-top: 5px;
      margin-left: 12px;
      font-size: 0;
      img {
        width: 100%;
      }
    }
    .iconfont {
      // display: block;
      float: right;
      margin-right: 12px;
      font-size: 44px;
      color: #ff7830;
      font-size: 26px;
    }
  }
  .my-swiper img{
    width: 100%;
    height: 100%;
  }
}
</style>
