<template>
  <div class="grid grid-cols-6 gap-2 py-3 bg-white">
    <div
      v-for="pro in products"
      :key="pro.id"
    >
      <div class="hover:shadow-flash-box-shadow h-310px">
        <img :src="pro.img" alt="" class="h-188px w-188px" />
        <p class="pt-2 px-3 text-sm font-semibold">{{ pro.scriptCut }}</p>
        <span class="px-3 inline-block text-lg text-orange-custome"
          >{{ Math.floor(pro.priceFirst - pro.priceFirst*(pro.sale/100)) }}.000 đ</span
        >
        <div>
          <span class="px-3 inline-block text-xs text-gray-500 line-through"
            >{{ pro.priceFirst }}.000 đ</span
          >
          <span class="inline-block text-xs ml-2">{{ pro.sale }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => (this.products = data))
      .catch((err) => console.log(err.message));
  },
};
</script>
