<template>
  <div>
    <div :id="$route.params.id">
      <p>{{ $route.params.script }}</p>
      <button @click="Xoa($route.params.id)">Xoa</button>
    </div>
  </div>
</template>
<script>
	export default{
		methods:{
			Xoa(id){
				var btn = document.getElementById(`${id}`)
				btn.remove()
			}
		}
	}
</script>
