<template>
  <div>
    <header-big-vue></header-big-vue>
    <div>
      <swiper
      ref="{swiperRef}"
        :slidesPerView="6"
        :centeredSlides="false"
        :spaceBetween="10"
        :freeMode="true"
        :navigation="true"
        :modules="modules"
        :nextEl="myNext"
        class="mySwiper w-70% m-auto"
      >
        <swiper-slide v-for="op in option" :key="op" class="mr-0">
          <div class="w-10.625rem h-9.375rem bg-white hover:bg-gray-200 pt-5 border-l-1px border-gray-300 mr-0">
            <img :src="op.img" alt="" class="w-20 h-20 m-auto rounded-full bg-gray-300 border-1px border-gray-200">
            <p class="text-center">{{op.title}}</p>
          </div>
        </swiper-slide>
      </swiper>
      <div class="w-3/4 m-auto mt-3 relative">
        <img src="https://lzd-img-global.slatic.net/g/gcp/lazada/94fc3976-7cbd-4abb-aaf7-25b682b80e46_VN-1188-400.jpg_2200x2200q80.jpg_.webp" alt="">
        <CounterGlobalVue class="absolute bottom-4 left-40%"></CounterGlobalVue>
      </div>
      <div class="w-3/4 m-auto mt-6 relative">
        <div class="bg-globalSale h-16 rounded-tr rounded-tl flex">
          <p class="mx-5 text-white font-bold text-2xl leading-4rem">
            SALE CUỐI THÁNG CỰC CHẤT
            <span class="inline-block text-xl font-normal">| Từ 25.9 đến 29.9</span>
          </p>
          <p class="absolute right-3 mt-4 pb-1 px-3 mr-7 cursor-pointer rounded-full bg-gradient-to-r from-stone-500 to-stone-700">
            <span class="text-right text-white">Thêm
              <Icon icon="ph:caret-right" class="inline-block w-4 h-4 bg-white text-black rounded-full" />
            </span>
          </p>
        </div>

      </div>
      <GlobalSaleVue></GlobalSaleVue>
      <GlobalIphoneVue></GlobalIphoneVue>
      <GlobalFashionVue></GlobalFashionVue>
      <GlobalExpressVue></GlobalExpressVue>
      <div class="">
        <img class="h-20 w-2/5 m-auto" src="https://lzd-img-global.slatic.net/g/gcp/lazada/edbf4db7-1090-4dcc-882e-87d807c87c26_VN-702-80.png_1188x80q80.png_.webp" alt="">
      </div>
      <GlobalFamous></GlobalFamous>
    </div>

    <div class="mt-8">
      <div class="bg-grey-head py-10">
        <FooterFirstVue></FooterFirstVue>
      </div>
      <FooterSecondVue></FooterSecondVue>
      <FooterFourthVue></FooterFourthVue>
    </div>
  </div>
</template>
<script>
import FooterFirstVue from "../../components/Footer/FooterFirst.vue";
import FooterFourthVue from "../../components/Footer/FooterFourth.vue";
import FooterSecondVue from "../../components/Footer/FooterSecond.vue";
import HeaderBigVue from "../../components/HeaderBig.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Icon } from '@iconify/vue';
// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { FreeMode, Pagination,Navigation } from 'swiper/modules';
import CounterGlobalVue from '../../components/Counter/CounterGlobal.vue';
import GlobalSaleVue from '../../components/Global/GlobalSale.vue';
import GlobalIphoneVue from '../../components/Global/GlobalIphone.vue';
import GlobalFashionVue from "@/components/Global/GlobalFashion.vue";
import GlobalExpressVue from '../../components/Global/GlobalExpress.vue';
import GlobalFamous from "@/components/Global/GlobalFamous.vue";
export default {
  data(){
    return{
      option:[]
    }
  },
  components: {
    HeaderBigVue,
    FooterSecondVue,
    FooterFourthVue,
    FooterFirstVue,
    Swiper,
    SwiperSlide,
    CounterGlobalVue,
    Icon,
    GlobalSaleVue,
    GlobalIphoneVue,
    GlobalFashionVue,
    GlobalExpressVue,
    GlobalFamous
  },
  setup() {
    return {
      modules: [FreeMode, Pagination, Navigation],
    };
  },
  mounted(){
		fetch('http://localhost:3000/option-global')
		.then((res)=>res.json())
		.then((data)=>this.option= data)
		.catch((err)=>console.log(err))
	}
};
</script>
<style scoped>
.swiper-button-next{
  font-size: 20px;
  color: black;
}
.swiper-slide{
  margin-right: 0!important;
}
</style>