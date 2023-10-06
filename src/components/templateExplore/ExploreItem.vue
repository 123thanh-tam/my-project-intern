<template>
	<div class="grid grid-cols-4 gap-5">
		<div class="flex px-2 py-1 bg-slate-500 rounded-3xl h-10 bg-white cursor-pointer hover:shadow-explore-box-shadow ">
			<img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB15wgLWBr0gK0jSZFnXXbRRXXa.png" class="h-7 rounded-full" alt="">
			<span class="inline-block text-xl h-7">LazMall</span>
		</div>
		<div class="flex px-2 py-1 bg-slate-500 rounded-3xl  h-10 bg-white cursor-pointer hover:shadow-explore-box-shadow">
			<img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1UiNthUT1gK0jSZFhXXaAtVXa.png" class="h-7 rounded-full" alt="">
			<span class="inline-block text-xl">Mã Giảm Giá</span>
		</div>
		<div class="flex px-2 py-1 bg-slate-500 rounded-3xl h-10 bg-white cursor-pointer hover:shadow-explore-box-shadow">
			<img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1DahvhO_1gK0jSZFqXXcpaXXa.png" class="h-7 rounded-full" alt="">
			<span class="inline-block text-xl">Nạp Thẻ & eVoucher</span>
		</div>
		<router-link to="/global">
			<div class="flex px-2 py-1 bg-slate-500 rounded-3xl h-10 bg-white cursor-pointer hover:shadow-explore-box-shadow">
				<img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1CDWbBYj1gK0jSZFuXXcrHpXa.png" class="h-7 rounded-full" alt="">
				<span class="inline-block text-xl">LazGlobal</span>
		</div>
		</router-link>
	</div>
</template>