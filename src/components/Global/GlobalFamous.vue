<template>
  <div class="w-3/4 m-auto">
    <div class="bg-globalPhone h-16 rounded-tr-2xl rounded-tl-lg">
      <p class="mx-5 text-white font-bold text-2xl leading-4rem text-center">
        THƯƠNG HIỆU NỔI BẬT
      </p>
    </div>
    <div class="grid grid-cols-6 gap-2 mt-3">
      <div v-for="pro in products" :key="pro.id" class="mb-4 cursor-pointer">
        <div class="relative group">
            <div
              class="bg-globalImgHover overflow-hidden h-188px w-184px rounded-t-md absolute left-0 bottom-0 opacity-0 group-hover:opacity-100"></div>
            <img :src="pro.img" alt="" class="h-188px w-188px rounded-t-md" />
            <p
              class="absolute top-0 right-0 w-11 h-5 text-white font-semibold bg-globalSalePercent bg-cover text-center text-sm rounded-tr-md"
            >
              -{{ pro.sale }}%
            </p>
            <img
              :src="pro.brandImg"
              class="w-74px h-74px absolute left-3.35rem -bottom-7 shadow-brand-box-shadow"
              alt=""
            />
        </div>
				<div class=" mt-8">
					<p class="text-center tracking-tighter text-pi">{{pro.brandName}}</p>
					<div class="flex w-36 m-auto mt-2 justify-center">
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAA4BAMAAAA2rnQoAAAAKlBMVEVHcEzyJXf/InfyJXX3Kn70J3fxJXb////xK3r/9fr1a6P8zeD0Xpr/7PTQuy5VAAAABnRSTlMA+Q+GKm8kP/I4AAAAQUlEQVQY02MwTAMCBjEwmVYOBITIlWAyYzuQdBbrBJIMijkgkjUDRDKlXYeTrGlwWYhKiC6oCUPRTFwkOPTAIQkAeiRu60RVsWsAAAAASUVORK5CYII=" class="w-1 h-5" alt="">
						<p class="text-center text-globalPriceBrand text-xs border-t-1px border-globalPriceBrand border-b-1px">{{pro.price}}</p>
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAA4BAMAAAA2rnQoAAAAKlBMVEXwJXZHcEzxJXf/MIDzJ3j0LX3zJXbxJXf////5m8DzTpD94u30VJTyPobKDR58AAAACHRSTlP/ANgIQhZS5Fnt1wcAAABBSURBVBjTY2AAghIQwcDO0AEEDITJThDZfQBEdjGlAskJyoJA8oIjiGQwRJAQEYgsRCVEF8SEIWkmVhISeuCQBADDj2n1qomuygAAAABJRU5ErkJggg==" class="w-1 h-5" alt="">
					</div>
				</div>
      </div>
    </div>
  </div>
</template>
<script>
// import temPriceVue from '../TemplatePrice/temPrice.vue';
// import GlobalPro from './GlobalPro.vue';
export default {
  data() {
    return {
      products: [],
      // show: false
    };
  },
  components: {
    // GlobalPro
    // temPriceVue
  },
  mounted() {
    fetch("http://localhost:3000/FamousBrand-global")
      .then((res) => res.json())
      .then((data) => (this.products = data))
      .catch((err) => console.log(err));
  },
};
</script>
