<template>
	<div class="home bg-grey-body">
		<MenuHeadVue></MenuHeadVue>
		<HeadViewVue></HeadViewVue>
		<CarouselViewVue></CarouselViewVue>
		<ExploreHomeVue></ExploreHomeVue>
		<FlashDealVue></FlashDealVue>
		<LazMallView></LazMallView>
		<ProCatalogViewVue></ProCatalogViewVue>
		<ProSpecialView></ProSpecialView>
		<FooterViewVue></FooterViewVue>
	</div>
</template>
<script>
import MenuHeadVue from '../layout/MenuHead.vue'
import HeadViewVue from '../layout/HeadView.vue'
import CarouselViewVue from '../layout/CarouselView.vue'
import ExploreHomeVue from '../layout/HomePage/ExploreHome.vue'
import FlashDealVue from '../layout/HomePage/FlashDeal.vue'
import LazMallView from '@/layout/HomePage/LazMallView.vue'
import ProCatalogViewVue from '../layout/HomePage/ProCatalogView.vue'
import ProSpecialView from '@/layout/HomePage/ProSpecialView.vue'
import FooterViewVue from '../layout/HomePage/FooterView.vue'
// import SignInView from '@/layout/SignIn/SignInView.vue'
export default {
	name: 'HomeView',
	components:{
		MenuHeadVue,
		HeadViewVue,
		CarouselViewVue,
		ExploreHomeVue,
		FlashDealVue,
		LazMallView,
		ProCatalogViewVue,
		ProSpecialView,
		FooterViewVue,
		// SignInView
	}
}
</script>