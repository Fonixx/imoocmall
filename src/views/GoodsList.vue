<template>
  <div>
    这是商品列表页面<br>
    <span>{{$route.params.goodsId}}</span><br>
    <span>{{$route.params.name}}</span>
    <router-link to="/goods/title">显示商品标题</router-link>
    <router-link to="/goods/image">显示商品图片</router-link>
    <div>
      <router-view/>
    </div>

    <router-link to="/cart">跳转到购物车页面</router-link>

    <button @click="jump">button 跳转到购物车页面</button>
  </div>
</template>

<script>
  export default {
    name: "GoodsList",
    methods: {
      jump() {
        //this.$router.push("/cart");
        this.$router.push({path:"/cart?goodsId=1"});
  }
  }
  }
</script>

<style scoped>

</style>
