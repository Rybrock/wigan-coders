<template>
  <swiper :navigation="true" :modules="modules" :autoplay="true" class="mySwiper">
    <swiper-slide><img src="../assets/meet-pic4.jpg" alt=""></swiper-slide><swiper-slide><img src="../assets/meet-pic5.jpg" alt=""></swiper-slide
    ><swiper-slide><img src="../assets/meet-pic3.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../assets/meet-pic2.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../assets/meet-pic1.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../assets/meet-pic6.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../assets/meet-pic7.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../assets/meet-pic8.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../assets/meet-pic9.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../assets/meet-pic10.jpg" alt=""></swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

import "../../src/styles.css";

// import required modules
import { Navigation, Autoplay } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Autoplay],
    };
  },
};
</script>
