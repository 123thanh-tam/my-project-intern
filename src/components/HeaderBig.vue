<template>
	<div> 
		<MenuHead></MenuHead>
		<HeadView class="pb-7"></HeadView>
		<div class="flex w-3/4 m-auto relative pb-2">
			<div class="flex mr-20 hover:text-orange-custome group">
				<h6 class="text-text-footer cursor-pointer group-hover:text-orange-custome" @click="showOption()">Danh Mục</h6>
				<Icon icon="basil:caret-up-solid" id="showBtn" class="hidden text-text-footer text-xl mt-1 group-hover:text-orange-custome" @click="showOption()"/>
				<Icon icon="basil:caret-down-solid" id="hideBtn" class="text-text-footer text-xl mt-1 group-hover:text-orange-custome" @click="hideOption()"/>
				<HeadOptions class="absolute bottom-22rem- left-0 hidden" id="optionShow"></HeadOptions>
			</div>
			<div class="flex cursor-pointer">
				<img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB15wgLWBr0gK0jSZFnXXbRRXXa.png" class="h-5 rounded-full" alt="">
				<span class="inline-block text-sm h-7">LazMall</span>
			</div>
			<div class="flex cursor-pointer">
				<img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1UiNthUT1gK0jSZFhXXaAtVXa.png" class="h-5 rounded-full ml-5" alt="">
				<span class="inline-block text-sm">Mã Giảm Giá</span>
			</div>
			<div class="flex cursor-pointer">
				<img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1DahvhO_1gK0jSZFqXXcpaXXa.png" class="h-5 ml-5 rounded-full" alt="">
				<span class="inline-block text-sm">Nạp Thẻ & eVoucher</span>
			</div>
			<router-link to="/global">
				<div class="flex cursor-pointer">
					<img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1CDWbBYj1gK0jSZFuXXcrHpXa.png" class="h-5 ml-5 rounded-full" alt="">
				<span class="inline-block text-sm">LazGlobal</span>
				</div>
			</router-link>
		</div>
	</div>
</template>
<script>
import MenuHead from '@/layout/MenuHead.vue';
import HeadView from '@/layout/HeadView.vue';
import HeadOptions from './Option/HeadOptions.vue';
import { Icon } from '@iconify/vue';
export default {
	data(){
		return{
			show: true
		}
	},
	components:{
		MenuHead,
		HeadView,
		HeadOptions,
		Icon
	},
	methods:{
		showOption(){
			let btnShow = document.getElementById('showBtn');
			let btnHide = document.getElementById('hideBtn');
			let option = document.getElementById('optionShow')
			
			btnShow.classList.toggle("hidden")
			btnHide.classList.toggle("hidden")
			option.classList.toggle("hidden")
			return{
				btnHide,
				btnShow,
				option
			}
		},
		hideOption(){
			let btnShow = document.getElementById('showBtn');
			let btnHide = document.getElementById('hideBtn');
			let option = document.getElementById('optionShow')
			
			btnShow.classList.toggle("hidden")
			btnHide.classList.toggle("hidden")
			option.classList.toggle("hidden")
			return{
				btnHide,
				btnShow,
				option
			}
		}
	}
}
</script>