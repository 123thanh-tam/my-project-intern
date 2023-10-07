<template>
	<div>
		<HeaderBig></HeaderBig>
		<div class="bg-grey-head2 pb-6">
			<div class="w-3/5 m-auto">
				<div class="flex justify-between">
					<span class="inline-block text-2xl pt-9 pb-">
						Tạo tài khoản Lazada
					</span>
					<span class="text-xs text-right inline-block pt-11 pb-6">Bạn đã là thành viên? 
						<router-link to="/login" class="text-forget-pass">Đăng nhập</router-link> tại đây
					</span>
				</div>
				<div class="flex justify-between pt-9 pb-9 pl-4 pr-9 bg-white">
					<div>
						<div>
							<h6 class="text-xs mb-2">Số điện thoại*</h6>
							<input v-model="formInput.phoneNumber" type="text" class="w-96 outline-none py-2 px-3 border-1px border-gray-300" placeholder="Nhập số điện thoại của bạn">
							<p class="text-xs text-red-700">{{ValidatePhoneNumber ? "" : "Vui lòng nhập chính xác số điện thoại"}}</p>
							<p id="errPhone" class="text-xs text-red-700"></p>
						</div>
						<div class=" flex my-3">
							<p class="text-white py-2 px-3 bg-gradient-to-tl from-[#17ca9d] to-[#02af83] z-10 shadow-slip-shadow ">>></p>
							<p class="py-2 w-21.2rem rounded-r-md text-sliptext bg-slipbg pl-2">Trượt để nhận mã sim</p>
						</div>
						<div class="mt-5">
							<h6 class="text-xs mb-2">Mật khẩu*</h6>
							<input v-model="formInput.password" type="text" class="w-96 outline-none py-2 px-3 border-1px border-gray-300" placeholder="Tối thiểu 8 ký tự với số, chữ cái và ký tự">
							<p class="w-96 text-xs text-red-700">{{ValidatePass ? "" : "Mật khẩu phải có ít nhất một số, một chữ in hoa, một chữ in thường và kí tự đặc biệt"}}</p>
							<p id="errPass" class="text-xs text-red-700"></p>
						</div>
						<div class="">
							<div class="flex justify-between mt-5">
								<h6 class="text-xs mb-2">Ngày sinh</h6>
								<h6 class="text-xs mb-2">Giới tính</h6>
							</div>
							<select name="" id="" class=" text-gray-400 w-7.5rem h-9 px-2 pb-1 leading-9 border-1px border-gray-300">
								<option value="Tháng">Tháng</option>
								<option v-for="month in 12" :key="month" :value="month">
									{{month }}
								</option>
							</select>
							<select name="" id="" class="h-9 px-2 text-gray-400 pb-1 leading-9 border-t-1px border-b-1px border-gray-300">
								<option value="Ngày">Ngày</option>
								<option v-for="day in 31" :key="day" :value="day">
									{{day }}
								</option>
							</select>
							<select name="" id="" class="mr-3 text-gray-400 h-9 px-2 pb-1 leading-9 border-1px border-b-1px border-gray-300">
								<option value="Năm">Năm</option>

								
								
								<option v-for="year in years" :key="year" :value="year">
									{{ year}}
								</option>
							</select>
							<select name="" id="" class="ml-1 h-9 px-2 pb-1 text-gray-400 leading-9 border-1px border-b-1px border-gray-300">
								<option value="Giới tính">Giới tính</option>
								<option value="Nam">Nam</option>
								<option value="Nữ">Nữ</option>
								<option value="Khác">Khác</option>
							</select>
						</div>
					</div>
					<div>
						<div class="">
							<h6 class="text-xs mb-2">Họ tên*</h6>
							<input v-model="formInput.fullName" type="text" class="w-19rem outline-none py-2 px-3 border-1px border-gray-300" placeholder="Họ tên">
							<p class="text-xs text-red-700">{{ValidateFullName ? "" : "Vui lòng nhập đúng họ tên"}}</p>
							<p id="errName" class="text-xs text-red-700"></p>
						</div>
						<div class="mt-6">
							<input id="checkbox" type="checkbox" class="outline-none w-5 h-5">
							<span class="inline-block text-xs ml-2 text-gray-500">Tôi muốn cập nhật thông tin ưu đãi qua SMS</span>
							<p class="text-xs text-red-700 " id="errCheck"></p>
						</div>
						<p @click="submitForm" class="mt-3 text-sm cursor-pointer w-19rem h-11 leading-44px text-center text-white bg-orange-custome rounded-sm hover:bg-login-hover">ĐĂNG KÝ</p>
						<div>
							<p class="text-xs text-gray-500 w-18.5rem mt-2">
								Tôi đã đọc và đồng ý với <span class="text-forget-pass cursor-pointer">Điều Khoản Sử Dụng</span> và <span class="cursor-pointer text-forget-pass">Chính Sách Bảo Mật của Lazada của Lazada</span>, bao gồm quyền thu thập, sử dụng, và tiết lộ dữ liệu cá nhân của tôi theo pháp luật quy định.
							</p>
						</div>
						<p class="text-xs text-gray-500 mt-6">Hoặc đăng ký với</p>
						<p class="mt-3 text-sm w-19rem h-11 leading-44px text-center text-orange-custome border-1px border-orange-custome cursor-pointer rounded-sm hover:bg-text-signin">Đăng ký bằng email</p>
						<div class="grid grid-cols-2 gap-2">
							<p class="rounded-sm mt-4 w-19w h-10 bg-facebook leading-10 text-center text-lg text-white">
								<Icon class="text-white inline-block" icon="eva:facebook-fill" />
								Facebook
							</p>
							<p class="rounded-sm mt-4 w-19w h-10 bg-google leading-10 text-center text-lg text-white">
								<Icon class="text-white inline-block" icon="ant-design:google-plus-outlined" />
								Google
							</p>
						</div>
					</div>

				</div>
			</div>
		</div>
		<div class="bg-grey-head py-10">
			<FooterFirstVue class="mt-0"></FooterFirstVue>
		</div>
		<FooterSecond></FooterSecond>
		<FooterFourth></FooterFourth>
	</div>
</template>
<script>
import HeaderBig from '@/components/HeaderBig.vue';
// import { Icon } from '@iconify/vue';
import FooterSecond from '@/components/Footer/FooterSecond.vue';
// import FooterThird from '@/components/Footer/FooterThird.vue';
import FooterFirstVue from '@/components/Footer/FooterFirst.vue';
import FooterFourth from '@/components/Footer/FooterFourth.vue';
export default {
	data(){
		return{
			formInput: {
			phoneNumber: "",
			password:"",
			fullName: ""
		},
		MessErr: "Vui long khong bo trong truong nay",
		}
	},
	components:{
		HeaderBig,
		// Icon,
		FooterSecond,
		FooterFirstVue,
		FooterFourth
},

computed : {
    years () {
      const year = new Date().getFullYear()
      return Array.from({length: year - 1900}, (value, index) => year - index)
    },
		ValidatePhoneNumber(){
		if(this.formInput.phoneNumber==""){
			return true
		}
			let phoneRegex= /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
			return phoneRegex.test(this.formInput.phoneNumber)
		},
		ValidatePass(){
			if(this.formInput.password===""){
				return true
			}
			let passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
			return passRegex.test(this.formInput.password)
		},
		ValidateFullName(){
			if(this.formInput.fullName===""){
				return true
			}
			let fullNameRegex= /[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêếìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/
			return fullNameRegex.test(this.formInput.fullName)
		}
  },
	methods:{
		submitForm(){
			var isChecked = document.getElementById("checkbox")
			var phoneErr = document.getElementById('errPhone')
			var passErr = document.getElementById('errPass')
			var nameErr = document.getElementById('errName')
			var checkErr = document.getElementById('errCheck')
			let phoneRegex= /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
			let passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
			let fullNameRegex= /[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêếìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/
			if(phoneRegex.test(this.formInput.phoneNumber) &&
			passRegex.test(this.formInput.password) &&
			fullNameRegex.test(this.formInput.fullName) && isChecked.checked){
				setTimeout(()=>{
					alert("Đăng kí thành công")
					return
				}, "1000")
				phoneErr.innerHTML=""
				passErr.innerHTML= ""
				nameErr.innerHTML= ""
				checkErr.innerHTML= ""
			}
			if(this.formInput.phoneNumber==="" && this.formInput.password==="" && this.formInput.fullName==="" && !isChecked.checked){
					phoneErr.innerHTML= this.MessErr
					passErr.innerHTML= this.MessErr
					nameErr.innerHTML= this.MessErr
					checkErr.innerHTML= "Vui lòng xác nhận"
			}if(this.formInput.phoneNumber===""){
				phoneErr.innerHTML= this.MessErr
			}if( this.formInput.password===""){
				passErr.innerHTML= this.MessErr
			} if( this.formInput.fullName===""){
				nameErr.innerHTML= this.MessErr
			} if(!isChecked.checked){
				checkErr.innerHTML= "Vui lòng xác nhận"
			}if(phoneRegex.test(this.formInput.phoneNumber)){
				phoneErr.innerHTML=""
			}if( passRegex.test(this.formInput.password)){
				passErr.innerHTML= ""
			} if(fullNameRegex.test(this.formInput.fullName)){
				nameErr.innerHTML= ""
			}if(isChecked.checked){
				checkErr.innerHTML= ""
			}
		}
	}


}
</script>