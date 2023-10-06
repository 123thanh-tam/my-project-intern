<template>
<div>
	<router-link :to="{name: 'detailPro', params: {script: pro.script
		, img: pro.img, priceFirst: pro.priceFirst, sale: pro.sale, sold: pro.sold, id: pro.id}}">
		<div>
			<div class="relative group">
				<div class="bg-globalImgHover overflow-hidden h-188px w-184px rounded-t-md absolute left-0 bottom-0 opacity-0 group-hover:opacity-100"></div>
				<img :src="pro.img" alt="" class="h-188px w-188px rounded-t-md">
				<p class="absolute top-0 right-0 w-11 h-5 text-white font-semibold bg-globalSalePercent bg-cover text-center text-sm rounded-tr-md">-{{pro.sale}}%</p>
				<p class="absolute left-2 bottom-2 text-xs text-globalSoldText px-3 rounded-full bg-globalSoldBg">{{pro.sold}} Đã bán</p>
				
			</div>
			<p class="mt-3 px-3 text-gray-700">{{pro.scriptCut}}</p>
			<p class="text-globalPrice font-bold font-Roboto px-3 mt-2">{{Math.floor(pro.priceFirst - pro.priceFirst*(pro.sale/100))}}.000</p>
			<p class="text-xs text-gray-400 line-through px-3" v-show="show" >{{pro.priceFirst}}</p>
			<p class="text-white text-center font-bold mt-2 mb-2 mx-3 w-164px h-7 rounded-md bg-gradient-to-r from-fromSell to-toSell">Mua ngay</p>
		</div>
	</router-link>
</div>
</template>
<script>
export default {
	props:['pro','show']
}
</script>