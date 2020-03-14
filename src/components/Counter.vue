<template>
  <div >
    <button v-on:click="increament">+</button>
    <button v-on:click="decreament">-</button>
    <p>{{number}}</p>
  </div>
</template>

<script>
export default {
  props:["number"],
  data () {
    return {
      number:1,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    increament(){this.$emit("incre");},
    decreament(){this.$emit("decre");}

  }
}
</script>

