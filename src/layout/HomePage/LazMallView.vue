<template>
	<div class="mt-10 w-9/12 m-auto">
		<h1 class="text-2xl mb-5">LazMall</h1>
		<LazMall></LazMall>
	</div>
</template>
<script>
import LazMall from '@/components/Product/LazMall.vue';
export default {
name:"LazMallView",
data(){
	return{

	}
},
components:{
	LazMall,
}
}
</script>