<template>
	<div>
		<HeaderBig></HeaderBig>
		<div class="bg-grey-head2 pb-7">
			<div class="w-3/5 m-auto">
				<h2 class="pt-8 pb-8 text-2xl ">Chào mừng đến với Lazada. Đăng nhập ngay!</h2>
				<div id="form" class="flex justify-between pt-4 pb-9 pl-4 pr-9 bg-white">
					<div>
						<div>
							<h6 class="text-xs mb-2">Số điện thoại hoặc email*</h6>
							<input v-model="formInput.email" id="email" type="text" class="w-96 outline-none py-2 px-3 border-1px border-gray-300" placeholder="Vui lòng nhập số điện thoại hoặc email của bạn">
								<p id="errEmail" class="text-xs text-red-700">{{ValidateEmail ? "" : "Vui lòng nhập vào email"}}</p>
						</div>
						<div class="">
							<h6 class="text-xs mb-2 mt-5">Mật khẩu*</h6>
							<input v-model="formInput.password" type="text" class="w-96 outline-none py-2 px-3 border-1px border-gray-300" placeholder="Vui lòng nhập mật khẩu của bạn">
							<p id="errPass" class="text-xs text-red-700">{{ValidatePass}}</p>
						</div>
						<p class="text-xs text-forget-pass text-right mt-4 cursor-pointer">Quên mật khẩu?</p>
					</div>
					<div>
						<p class="text-sm w-19rem h-11 leading-44px text-center text-white bg-orange-custome rounded hover:bg-login-hover" @click="submitForm">ĐĂNG NHẬP</p>
						<span class="inline-block text-xs text-gray-500 my-4">Hoặc đăng nhập bằng</span>
						<p class="rounded w-19w h-10 bg-facebook leading-10 text-center text-lg text-white">
							<Icon class="text-white inline-block" icon="eva:facebook-fill" />
							Facebook
						</p>
						<p class="rounded mt-5 w-19w h-10 bg-google leading-10 text-center text-lg text-white">
							<Icon class="text-white inline-block" icon="ant-design:google-plus-outlined" />
							Google
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="bg-grey-head py-10">
			<FooterThird class="mt-0"></FooterThird>
		</div>
		<FooterSecond></FooterSecond>
		<FooterFourth></FooterFourth>
	</div>
</template>
<script>
import HeaderBig from '@/components/HeaderBig.vue';
import { Icon } from '@iconify/vue';
import FooterSecond from '@/components/Footer/FooterSecond.vue';
import FooterThird from '@/components/Footer/FooterThird.vue';
import FooterFourth from '@/components/Footer/FooterFourth.vue';
export default {
components:{
	HeaderBig,
	Icon,
	FooterSecond,
	FooterThird,
	FooterFourth
},
data(){
	return{
		formInput: {
			email: "",
			password:""
		},

		MessErr: "Vui long khong bo trong truong nay",
		validateForm: false
	}
},
computed:{
	ValidateEmail: function (){
		if(this.formInput.email ==""){
			return true;
		}
    let emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  
  // Sử dụng test() để kiểm tra chuỗi
  return emailRegex.test(this.formInput.email);
	},
	ValidatePass: function(){
		if(this.formInput.password ==""){
			return "";
		}
	return this.formInput.password.length > 6 ? "" : "mật khẩu quá yếu";
	}
}
,
methods:{
	submitForm: function(){
		var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
		var emailErr = document.getElementById('errEmail')
		var passErr = document.getElementById('errPass')
		
		if(emailRegex.test(this.formInput.email) && this.formInput.password.length > 6){
			alert("Đăng nhập thành công");
		}
		if(this.formInput.email==="" && this.formInput.password===""){
			emailErr.innerHTML= this.MessErr
			passErr.innerHTML= this.MessErr
		}
		if(this.formInput.email===""){
			emailErr.innerHTML= this.MessErr
		}
		if(this.formInput.password==""){
			passErr.innerHTML= this.MessErr
		}
		}
		
	}
}
</script>