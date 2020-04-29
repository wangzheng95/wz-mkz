<template>
  <!-- 轮播图begin -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <slot />
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <!-- 轮播图end -->
</template>

<script>
import swiper from 'swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'swiper',
  mounted () {
    /* eslint-disable */
    new swiper(this.$el, {
      pagination: {
        el: ".swiper-pagination"
      },
      autoplay: this.autoplay ? {
        delay:this.autoplay,
        stopOnlastSlide:false,
        displayOnInteraction: true,
      } : false,
      loop: this.loop
    });
    /* eslint-ensable */
  },
  props: {
    autoplay: {
      type: Number,
      default: 0
    },
    loop: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss">
.swiper-container {
  width: 100%;
  height: 250px;
  background: pink;
  .swiper-pagination-bullet {
    width: 6px;
    height: 6px;
    background: #fff;
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    width: 24px;
    background: #ff7830;
    border-radius: 6px;
  }
}
</style>
