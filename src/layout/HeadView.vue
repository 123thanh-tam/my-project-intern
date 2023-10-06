<template>
	<div class="bg-white pt-3 pb-10">
		<div class="grid grid-cols-5 w-4/5 m-auto">
			<img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1T7K2d8Cw3KVjSZFuXXcAOpXa.png" alt="" class="h-10 cursor-pointer">
			<div class="col-span-3 w-full flex">
				<input type="text" placeholder="Tìm kiếm trên Lazada" class="px-6 py-2 bg-grey-head2 outline-none w-5/6 rounded-l-sm">
				<div class="bg-orange-custome rounded-r-sm">
					<Icon icon="ant-design:search-outlined" class="w-20 text-2xl mt-2 text-white font-bold cursor-pointer"/>
				</div>
			</div>
			<div class="flex justify-between">
				<Icon icon="humbleicons:cart" class="text-4xl mt-2 text-blue-900 cursor-pointer" />
				<img src="https://icms-image.slatic.net/images/ims-web/f95c2827-6b96-4510-9e03-a1848d4832e5.png" alt="" class="h-11">
			</div>
		</div>
	</div>
</template>
<script>
import { Icon } from '@iconify/vue';
export default {
	data(){
		return{
			doScroll : false
		}
	},
	components: {
		Icon,
	},
}
</script>