<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>父组件number:{{ number }}</h1>

    <Counter v-bind:number="number" v-on:incre="increament" v-on:decre="decreament"></Counter>
  </div>
</template>

<script>
import Counter from './Counter'

export default {
  name: 'HelloWorld',
  data () {
    return {
      number:10,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    Counter
  },
  methods:{
    increament(){this.number++},
    decreament(){this.number--}
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
