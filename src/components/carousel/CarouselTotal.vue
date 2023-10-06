<template>
	<div class="carousel">
		<div class="carousel-inner">
			<CarouselItem v-for="(slide, index) in slides" 
				:slide="slide" 
				:key="`item-${index}`"
				:current-slide="currentSlide"
				:index="index"
				></CarouselItem>
				<carousel-indicator
				:total="slides.length"
				:currentIndex="currentSlide"
				@switch="switchSlide($event)"
			></carousel-indicator>
		</div>
		
	</div>
</template>
<script>
import CarouselItem from './CarouselItem.vue';
import CarouselIndicator from './CarouselIndicator.vue';
export default {
	props:['slides','index'],
	components:{
		CarouselItem,
		CarouselIndicator
	},
	data(){
		return{
			currentSlide:0,
			slideInterval: null
		}
	},
	methods:{
		setCurrentSlide(index){
			this.currentSlide = index
		},
		switchSlide(index){
			// const step = index - this.currentSlide;
			this.currentSlide= index
		}
	},
	mounted(){
		this.slideInterval= setInterval(()=>{
			const index= this.currentSlide < this.slides.length - 1 ? this.currentSlide + 1: 0
			this.setCurrentSlide(index)
		},3000)
	},
	beforeUnmount(){
		clearInterval(this.slideInterval)
	}
}
</script>
<style scoped>
.carousel{
	display: flex;
	justify-content: center;
}
.carousel-inner{
	position: relative;
	width: 900px;
	height: 300px;
	overflow: hidden;
}

</style>