<template>
	<div class="grid grid-cols-6 gap-3">
		<div v-for="pro in productsLaz" :key="pro.id" class="relative bg-white hover:shadow-flash-box-shadow">
			<img :src="pro.img" alt="" class="h-188px">
			<div class="h-8 w-180px absolute top-9.7rem left-0 opacity-25 bg-gradient-to-b from-transparent to-slate-500"></div>
			<img :src="pro.imgBrand" alt="" class="absolute bottom-14 left-3.75rem h-14 shadow-brand-box-shadow">
			<div class="text-center text-sm mb-2">
				<p class="mt-7">{{pro.nameBrand}}</p>
				<span class="inline-block text-xs text-gray-500">{{pro.nameBrand}}</span>
			</div>  
		</div>
	</div>
</template>
<script>
export default {
	data(){
		return{
			productsLaz: [],
		}
	},
	mounted(){
		fetch(' http://localhost:3000/productsLaz')
		.then((res)=>res.json())
		.then((data)=>this.productsLaz= data)
		.catch((err)=>console.log(err))
	}
}
</script>