<template>
	<div class="grid grid-cols-8 gap-1px bg-gray-300">
		<div v-for="pro in proCatalog" :key="pro.id" class="bg-white hover:shadow-catalog-shadow hover:z-10">
			<img :src="pro.img" alt="" class="h-20 w-20 m-auto mt-3">
			<p class="text-center text-sm mb-3 mx-3 mt-2">{{pro.name}}</p>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return{
			proCatalog: []
		}
	},
	mounted(){
		fetch('http://localhost:3000/products-catalog')
		.then((res)=>res.json())
		.then((data)=>this.proCatalog= data)
		.catch((err)=>console.log(err))
	}
}
</script>