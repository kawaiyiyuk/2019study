<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <input v-model="vMsg" type="text"> <button @click="doAdd">+</button>
    </div>
    <ul>
      <li v-for="(item,index) in list">
        {{item}}
        <button @click="removeData(index)">-</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg:'hello world',
      vMsg:'',
      list:[]
    }
  },
  methods:{
    doAdd:function () {
      this.list.push(this.vMsg);
      this.vMsg = '';
    },
    removeData(index) {
      this.list.splice(index,1)
    }
  },
  mounted() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}



</style>
