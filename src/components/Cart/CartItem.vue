<template>
  <div>
		<header-big-vue></header-big-vue>
		<p>Hi, this is a cart</p>
    <div :id="$route.params.id">

      <p>{{ $route.params.script }}</p>
      <button @click="Xoa($route.params.id)">Xoa</button>
    </div>
		<div class="mt-8">
      <div class="bg-grey-head py-10">
        <FooterFirstVue></FooterFirstVue>
      </div>
      <FooterSecondVue></FooterSecondVue>
      <FooterFourthVue></FooterFourthVue>
    </div>
  </div>
</template>
<script>
import FooterFirstVue from '../Footer/FooterFirst.vue'
import FooterFourthVue from '../Footer/FooterFourth.vue'
import FooterSecondVue from '../Footer/FooterSecond.vue'
import HeaderBigVue from '../HeaderBig.vue'
export default {
	methods:{
			Xoa(id){
				var btn = document.getElementById(`${id}`)
				btn.remove()
			}
		},
		components:{
			FooterFirstVue,
			FooterFourthVue,
			FooterSecondVue,
			HeaderBigVue
		}
}
</script>

