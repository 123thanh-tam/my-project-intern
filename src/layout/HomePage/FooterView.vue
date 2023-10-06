<template>
	<div class="">
		<FooterHead class="w-3/4 m-auto"></FooterHead>
		<div class="pb-3">
			<FooterFirstVue></FooterFirstVue>
		</div>
		<div class="bg-white py-3">
			<FooterSecondVue></FooterSecondVue>
		</div>
			<FooterThirdVue></FooterThirdVue>
		<div class="bg-white">
			<FooterFourthVue></FooterFourthVue>
		</div>
	</div>
</template>
<script>
import FooterFirstVue from '../../components/Footer/FooterFirst.vue'
import FooterFourthVue from '../../components/Footer/FooterFourth.vue'
import FooterSecondVue from '../../components/Footer/FooterSecond.vue'
import FooterThirdVue from '../../components/Footer/FooterThird.vue'
import FooterHead from '@/components/Footer/FooterHead.vue'
export default {
components:{
	FooterFirstVue,
	FooterSecondVue,
	FooterThirdVue,
	FooterFourthVue,
	FooterHead
}
}
</script>