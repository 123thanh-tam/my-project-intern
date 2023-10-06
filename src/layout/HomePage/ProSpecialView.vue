<template>
	<div class="mt-10 w-9/12 m-auto">
		<h1 class="text-2xl mb-2">Dành riêng cho bạn</h1>
		<ProSpecialVue></ProSpecialVue>
		<div class="w-96 m-auto border-1px border-button-color text-center py-2 cursor-pointer">
			<a href="#" class="text-button-color text-sm font-semibold">TẢI THÊM</a>
		</div>
		<div class="w-full h-1px bg-slate-300 mt-2"></div>
	</div>
</template>
<script>
import ProSpecialVue from '../../components/Product/ProSpecial.vue'
export default {
	components:{
		ProSpecialVue
	}
}
</script>