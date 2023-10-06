<template>
		<transition name="slide-in">
			<div class="carousel-item" v-show="currentSlide===index">
				<img :src="slide" alt="">
			</div>
		</transition>
</template>
<script>
export default {
	props:['slide', 'currentSlide', 'index']
}
</script>
<style scoped>
.carousel-item{
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
}


/**
.slide-in-enter-active, 
.slide-in-leave-active{
	transition: all 1s ease-in-out;
}
.slide-in-enter-from{
	transform: translateX(-100%);
}
.slide-in-leave-to{
	transform: translateX(100%);
}
**/
.fadeOut{
	animation: fadeOut 3s;
}
@-webkit-keyframes fadeOut {
	0% {opacity: 0;}
	100% {opacity: 1;}
}

@keyframes fadeOut {
	0% {opacity: 0;}
	100% {opacity: 1;}
}

.fadeOut {
	-webkit-animation-name: fadeOut;
	animation-name: fadeOut;
}
</style>