<template>
	<div class="bg-blue-500">
		<div class="flex w-3/4 m-auto">
			<head-options-vue></head-options-vue>
			<carousel-total-vue :slides="slides" :index="index" class=""></carousel-total-vue>
		</div>
	</div>
</template>
<script>
import CarouselTotalVue from '../components/carousel/CarouselTotal.vue'
import HeadOptionsVue from '../components/Option/HeadOptions.vue'
export default {
	name: "CarouselView",
	data(){
		return{
			slides:[
				'https://icms-image.slatic.net/images/ims-web/09a81d49-2e62-4c7f-a973-a43020553993.jpg',
				'https://lzd-img-global.slatic.net/g/icms/images/ims-web/f000f811-ece7-44c0-8dd8-f2efc1591673.jpg_2200x2200q90.jpg_.webp',
				'https://icms-image.slatic.net/images/ims-web/c9743991-1e59-46c2-b47f-88d15934c017.jpg',
				'https://lzd-img-global.slatic.net/g/icms/images/ims-web/5bafa88f-1242-4696-a1f4-57f8dab98706.jpg_2200x2200q90.jpg_.webp',
				'https://lzd-img-global.slatic.net/g/icms/images/ims-web/f48ea05c-cc7a-4ed7-870d-ec79216371a6.jpg_2200x2200q90.jpg_.webp',
				'https://lzd-img-global.slatic.net/g/icms/images/ims-web/5bde6a4f-5666-4ac5-9032-08adfe74106c.jpg_2200x2200q90.jpg_.webp'
			],
			bgSlides:[
				'#920402',
				'#2252A4',
				'#E3D3BA',
				'#17181C',
				'#FFD7DB'
			]
		}
	},
	components:{
		CarouselTotalVue,
		HeadOptionsVue
	}
}
</script>