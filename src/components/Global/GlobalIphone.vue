<template>

	<div class="w-3/4 m-auto ">
		<div class="bg-globalPhone h-16 rounded-tr-2xl rounded-tl-lg">
			<p class="mx-5 text-white font-bold text-2xl leading-4rem text-center">
				SẮM PHỤ KIỆN IPHONE 15 📱
			</p>
		</div>
		<div class="grid grid-cols-6 gap-2 mt-3">
			<div v-for="pro in products" :key="pro.id" class="mb-4 cursor-pointer">
				<GlobalPro :pro="pro" :show="show"></GlobalPro>
			</div>
		</div>
	</div>
</template>
<script>
import GlobalPro from './GlobalPro.vue';
export default {
data(){
	return{
		products:[],
		show: false
	}
},
components:{
	GlobalPro
},
mounted(){
	fetch("http://localhost:3000/Phone-global")
	.then((res)=>(res.json()))
	.then((data)=>(this.products=data))
	.catch(err=>console.log(err))
}
}
</script>