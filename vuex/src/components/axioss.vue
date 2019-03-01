<template>
    <div>
      <!--<section v-if="errored">-->
        <!--<p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>-->
      <!--</section>-->
      <!--<section v-else>-->
        <!--<div v-if="loading">Loading...</div>-->

        <!--<div-->
          <!--v-else-->
          <!--v-for="currency in info"-->
          <!--class="currency"-->
        <!--&gt;-->
          <!--{{ currency.description }}:-->
          <!--<span class="lighten">-->
        <!--<span v-html="currency.symbol"></span>{{ currency.rate_float | currencydecimal }}-->
      <!--</span>-->
        <!--</div>-->

      <!--</section>-->

      <!--<div>-->
        <!--<h1>vuex</h1>-->
        <!--<p>{{count}}</p> <button @click="count_add()">+</button>-->
        <!--<h2>{{msg}}</h2>-->
      <!--</div>-->

      <div>
        <button @click="getget()">getter</button>
        <h1>
          {{getter}}
        </h1>
      </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
    export default {
        name: "axioss",
      data() {
          return {
            info:{},
            loading: true,
            errored: false,
            getter:''
          }
      },
      methods:{
        count_add() {
          this.$store.commit('increment')
        },
        getget(){
          this.getter = this.$store.getters.doneTodos
        }
      },
      created(){
        this.$http
          .get('https://api.coindesk.com/v1/bpi/currentprice.json')
          .then( res => {//查询成功
            this.info = res.data.bpi;
            console.log(res)
          })
          .catch(error => {//错误
            console.log(error)
            this.errored = true
          })
          .finally( () => {//加载中
            this.loading = false
          })

        console.log(this)
      },
      computed:{
          ...mapState({
            count: state => state.count,
            msg:state => state.msg
          })
      },
      mounted(){

      },
      filters:{
        currencydecimal(value){
            return value.toFixed(2);
        }
      }
    }
</script>

<style scoped>

</style>
