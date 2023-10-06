<template>
	<div class="mt-10 w-9/12 m-auto">
		<h1 class="text-2xl mb-5">Danh mục ngành hàng</h1>
		<ProCataLog></ProCataLog>
	</div>
</template>
<script>
import ProCataLog from '@/components/Product/ProCataLog.vue';
export default {
	components:{
		ProCataLog
	}
}
</script>