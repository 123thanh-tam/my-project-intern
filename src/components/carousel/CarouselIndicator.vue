<template>
		<div class="carousel-indicators absolute left-2/4 bottom-1 z-10">
			<!-- <button class="carousel-indicator-item w-4 h-4 border-none bg-white mr-1 opacity-50 cursor-pointer rounded-full active"></button>
			<button class="carousel-indicator-item w-4 h-4 border-none bg-white mr-1 opacity-50 cursor-pointer rounded-full"></button>
			<button class="carousel-indicator-item w-4 h-4 border-none bg-white mr-1 opacity-50 cursor-pointer rounded-full"></button>
			<button class="carousel-indicator-item w-4 h-4 border-none bg-white mr-1 opacity-50 cursor-pointer rounded-full"></button>
			<button class="carousel-indicator-item w-4 h-4 border-none bg-white mr-1 opacity-50 cursor-pointer rounded-full"></button> -->
			<button 
				class="carousel-indicator-item w-3 h-3 border-none bg-white mr-1 opacity-50 cursor-pointer rounded-full"
				:class="{active: currentIndex === index}"
				v-for="(item, index) in total" :key="index"
				@click="$emit('switch', index)"
				>
			</button>
				
			</div>
</template>
<script>
export default {
	emits:['switch'],
	props:["total", "currentIndex"]
}
</script>
<style scoped>
.carousel-indicators{
	transform: translateX(-50%);
}
.active{
	opacity: 1;
}
</style>