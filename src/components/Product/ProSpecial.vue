<template>
  <div class="grid grid-cols-6 gap-2 py-3">
    <div
      v-for="pro in products"
      :key="pro.id"
			class="mb-3 bg-white"
    >
      <div class="hover:shadow-flash-box-shadow h-20.7rem">
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
				<div class="flex mb-3 pl-3 pt-1">
					<Icon icon="clarity:star-solid" class="text-xs text-star"/>
					<Icon icon="clarity:star-solid" class="text-xs text-star"/>
					<Icon icon="clarity:star-solid" class="text-xs text-star"/>
					<Icon icon="clarity:star-solid" class="text-xs text-star"/>
					<Icon icon="clarity:star-solid" class="text-xs text-star"/>
					<p class="text-xs">({{ pro.sell }})</p>
				</div>
      </div>
    </div>
  </div>
</template>
<script>
import { Icon } from '@iconify/vue';
export default {
	components: {
		Icon,
	},
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/products-special")
      .then((res) => res.json())
      .then((data) => (this.products = data))
      .catch((err) => console.log(err.message));
  },
};
</script>
