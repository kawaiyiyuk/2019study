<template>
  <div>
    <axioss></axioss>
  </div>

</template>

<script>
  import axios from './axioss'
    export default {
        name: "index",
      data(){
          return{

          }
      },
      components:{
          axioss:axios
      }
    }
</script>

<style scoped>

</style>
