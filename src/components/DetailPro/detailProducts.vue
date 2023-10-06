<template>
	<div>
		<HeaderBig></HeaderBig>
		<div class="grid grid-cols-5 w-2/3 m-auto gap-5">
			<div class="col-span-2">
				<img :src="$route.params.img" alt="">
			</div>
			<div class="col-span-3">
				<p class="mb-3">{{des}}</p>
				<div class="flex mb-2">
					<div  v-for="n in 5" :key="n">
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABFUExURfakAPelAPakAPekAPakAPelAPalAEdwTP+vAPiuAPakAPqoAPalAPalAPelAP/WAP/TAP/MAP/PAP/bAPq1APy/AP7HAGxqCN8AAAAPdFJOU/5Lu2byeuMADP2nIMmTOjbD1MQAAAD7SURBVCjPhdNbkoMgEAXQq4KhAZWn+1/qAFFjk5TTH1pwuIoIeD0WeFPJR5ZCPbASkA8sQTzOWM3keBw8HGJicfBwjIHF7zzBx8jj6MJxY/HGZpiWcQb8VjwShNVyWlXjpfSXopT3rZXLKVHtErPBS1kk77a+wg5M9eFqRP7SzVHR9u7qrqtAGM6pffuhx4c1D8GFAuUeTr2+WyOHqzyJoVsWkW58rczJ6p4OWDpekf2nyHY8YW/wvibR8YLanQmpDkgwnEfye8FZowzYM7qZi1SxLKNpA86pH2zqD5LvfbCOpaEZDxDLZ5OsFpax1Ibt6GH+eUr+OWN9/QE2YB+QdE4J4wAAAABJRU5ErkJggg==" alt="" class="w-3 h-3">
					</div>
					<p class="text-xs hover:underline text-reviewText">{{$route.params.sold}} đánh giá</p>
				</div>
				<div>
					<p class="text-xl text-orange-custome mb-2"> {{ Math.floor($route.params.priceFirst - ($route.params.sale)/100*$route.params.priceFirst) }}.000 <span class="t
						ext-sm">₫</span></p>
					<div class="flex">
						<p class="text-sm text-gray-500 line-through font-Roboto">{{$route.params.priceFirst}}</p>
						<span class="text-sm font-Roboto ml-2">-{{$route.params.sale}}%</span>
					</div>
					<div class="flex mt-4">
						<p class="mr-14 text-gray-500">Ưu đãi</p>
						<div class="openTem relative px-3 py-1 bg-orange-custome">
							<p class="temItem text-xs text-white pr-3">✨ MỞ THẺ NHANH - NHẬN COMBO TRỊ GIÁ 2TR7 ✨</p>
						</div>
					</div>
					<div class="flex mt-3">
						<p class="mr-3
						">Số lượng</p>
						<p @click="apartNumber" class="apart cursor-pointer w-8 h-8 bg-gray-200 text-center text-xl mr-3" id="apart">-</p>
						<p class="mr-3">{{soLuong}}</p>
						<p  @click="plusNumber" class="plus cursor-pointer w-8 h-8 bg-gray-400 text-center text-xl">+</p>
					</div>
					<div class="flex justify-start mt-3">
						<p class="bg-buyNow cursor-pointer text-white w-56 h-11 text-center leading-44px mr-4 hover:bg-hoverBuy">Mua ngay</p>
						<router-link :to="{name: 'cartItem', params: {script: script, id: id}}">
							<p class="hover:bg-hoverBuy cursor-pointer bg-orange-custome text-white w-56 h-11 text-center leading-44px">Thêm vào giỏ hàng</p>
						</router-link>
					</div>
				</div>
			</div>

		</div>
		<div class="mt-8">
      <div class="bg-grey-head py-10">
        <FooterFirst></FooterFirst>
      </div>
      <FooterSecondVue></FooterSecondVue>
      <FooterFourth></FooterFourth>
    </div>
	</div>
</template>
<script>
import HeaderBig from '../HeaderBig.vue';
import FooterFirst from '../Footer/FooterFirst.vue';
import FooterSecondVue from '../Footer/FooterSecond.vue';
import FooterFourth from '../Footer/FooterFourth.vue';
// import { Icon } from '@iconify/vue';
export default {
	data(){
		return{
			soLuong: 0,
			sale: this.$route.params.sale,
			priceFirst: this.$route.params.priceFirst,
			script: this.$route.params.script,
			img: this.$route.params.img,
			sold: this.$route.params.sold,
			id: this.$route.params.id
		}
	},
	components:{
		// Icon,
		HeaderBig,
		FooterFirst,
		FooterSecondVue,
		FooterFourth
	},
	methods:{
		plusNumber(){
			this.soLuong++;
			this.changebg()
		},
		apartNumber(){
			var apartBtn = document.getElementById('apart')
			if(this.soLuong===0){
				apartBtn.setAttribute('disabled',true)
				return
			}
			this.soLuong--;
			this.changebg()
		},
		changebg(){
			var apartBtn = document.getElementById('apart')
			if(this.soLuong>=1){
				apartBtn.style.backgroundColor= 'rgb(156 163 175 / var(--tw-bg-opacity))'
			}else{
				apartBtn.style.backgroundColor= 'rgb(229 231 235 / var(--tw-bg-opacity))'
			}
		}
	}
}
</script>

<style scoped>
.temItem::before{
	position: absolute;
	top: 10px;
	right: 7px;
	content: " ";
	border-color: #fff transparent transparent;
	border-style: solid;
	border-width: 5px 4px;
}
.temItem::after{
	position: absolute;
	top: 0;
	right: -7px;
	display: inline-block;
	content: "";
	border-color: #ff9800 transparent;
	border-style: solid;
	border-width: 12px 7px;
}
</style>