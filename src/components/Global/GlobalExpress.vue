<template>
	<div class="w-3/4 m-auto ">
		<div class="bg-globalPhone h-16 rounded-t-none flex relative justify-around">
			<p class="mx-5 text-white text-center font-bold text-2xl leading-4rem">
				GIAO HÀNG SIÊU NHANH
			</p>
			<p class="absolute right-3 mt-4 pb-1 px-3 mr-7 cursor-pointer rounded-full bg-globalAddWhite">
				<span class="text-right text-white">Thêm
					<Icon icon="ph:caret-right" class="inline-block w-4 h-4 text-gray-400 bg-white rounded-full" />
				</span>
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
import { Icon } from '@iconify/vue';
export default {
data(){
	return{
		products:[],
		show: false
	}
},
components:{
	GlobalPro,
	Icon
},
mounted(){
	fetch("http://localhost:3000/DeliverExpress-global")
	.then((res)=>(res.json()))
	.then((data)=>(this.products=data))
	.catch(err=>console.log(err))
}
}
</script>