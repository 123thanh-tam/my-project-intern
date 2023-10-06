<template>
  <div>
    <div class="bg-grey-head">
      <div class="w-3/4 m-auto">
        <a
          class="uppercase text-12px mr-12 whitespace-nowrap hover:text-orange-custome cursor-pointer hover:transition-all hover:delay-300"
          >Tiết kiệm hơn với ứng dụng</a
        >
        <a
          class="uppercase text-12px mr-12 whitespace-nowrap hover:text-orange-custome cursor-pointer hover:transition-all hover:delay-300"
          >BÁN HÀNG CÙNG LAZADA</a
        >
        <a
          class="uppercase text-12px mr-12 whitespace-nowrap hover:text-orange-custome cursor-pointer hover:transition-all hover:delay-300"
          >CHĂM SÓC KHÁCH HÀNG</a
        >
        <a
          class="uppercase text-12px mr-12 whitespace-nowrap hover:text-orange-custome cursor-pointer hover:transition-all hover:delay-300"
          >Kiểm tra đơn hàng</a
        >
        <a
          class="uppercase text-12px mr-12 whitespace-nowrap hover:text-orange-custome cursor-pointer hover:transition-all hover:delay-300"
          >
          <router-link to="/login" target="">ĐĂNG NHẬP</router-link>
          </a
        >
        <a
          class="uppercase text-12px mr-12 whitespace-nowrap hover:text-orange-custome cursor-pointer hover:transition-all hover:delay-300"
          >
          <router-link to="/signin">ĐĂNG KÝ</router-link>
        </a
        >
        <a
          class="uppercase text-12px mr-12 whitespace-nowrap hover:text-orange-custome cursor-pointer hover:transition-all hover:delay-300"
          >change language
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MenuHead",
  data() {
    return {};
  },
};
</script>
