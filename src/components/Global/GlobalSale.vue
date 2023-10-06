<template>
	<div class="w-3/4 m-auto grid grid-cols-6 gap-2 mt-3">
		<div v-for="pro in products" :key="pro.id" class="mb-4 cursor-pointer">
			<GlobalPro :pro="pro" :show="show"></GlobalPro>
		</div>
		<!-- <div v-for="pro in products" :key="pro.id" class="mb-4 cursor-pointer">
			<div class="relative group">
				<div class="bg-globalImgHover overflow-hidden h-188px w-184px rounded-t-md absolute left-0 bottom-0 opacity-0 group-hover:opacity-100"></div>
				<img :src="pro.img" alt="" class="h-188px w-188px rounded-t-md">
				<p class="absolute top-0 right-0 w-11 h-5 text-white font-semibold bg-globalSalePercent bg-cover text-center text-sm rounded-tr-md">-{{pro.sale}}%</p>
				<p class="absolute left-2 bottom-2 text-xs text-globalSoldText px-3 rounded-full bg-globalSoldBg">{{pro.sold}} Đã bán</p>
				
			</div>
			<p class="mt-3 px-3 text-gray-700">{{pro.desCut}}</p>
			<p class="text-globalPrice font-bold font-Roboto px-3 mt-2">{{Math.floor(pro.priceFirst - pro.priceFirst*(pro.sale/100))}}.000</p>
			<p class="text-xs text-gray-400 line-through px-3">{{pro.priceFirst}}</p>
			<p class="text-white text-center font-bold mt-2 mb-2 mx-3 w-164px h-7 rounded-md bg-gradient-to-r from-fromSell to-toSell">Mua ngay</p>
		</div>-->
	</div>
</template>
<script>
import GlobalPro from './GlobalPro.vue';
export default {
data(){
	return{
		products:[],
		show: true
	}
},
components:{
	GlobalPro
},
mounted(){
	fetch(" http://localhost:3000/sale-global")
	.then((res)=>(res.json()))
	.then((data)=>(this.products=data))
	.catch(err=>console.log(err))
}
}
</script>