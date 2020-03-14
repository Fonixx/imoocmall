<template>
  <div>
    这是商品列表页面<br>
    <span>{{$route.params.goodsId}}</span><br>
    <span>{{$route.params.name}}</span>
  </div>
</template>

<script>
    export default {
        name: "GoodsList"
    }
</script>

<style scoped>

</style>
