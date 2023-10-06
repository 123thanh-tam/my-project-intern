<template>
	<div class="mt-10 w-9/12 m-auto">
		<h1 class="text-2xl mb-5">Deal Chớp Nhoáng</h1>
		<div class="flex justify-between py-4 px-5 bg-white items-center border-b-1px border-slate-600">
			<div class="flex">
				<p class="mr-14 text-orange-custome text-sm">Đang bán</p>
				<div class="flex">
					<p class="mr-5 text-sm">Kết thúc trong</p>
					<CounterTimeVue></CounterTimeVue>
				</div>
			</div>
			<a href="#" class="text-sm text-orange-custome tracking-wide px-3 py-2 border rounded-sm border-orange-custome">MUA SẮM TÒAN BỘ SẢN PHẨM</a>
		</div>
		<FlashProduct></FlashProduct>
	</div>
</template>
<script>
import CounterTimeVue from '../../components/Counter/CounterTime.vue'
import FlashProduct from '../../components/Product/FlashProduct.vue'
export default {
	components:{
		CounterTimeVue,
		FlashProduct
	}
}
</script>
