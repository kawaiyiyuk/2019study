import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    msg:'hello world',
    count:0,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters:{
    //可以理解为store 中的计算属性
    doneTodos:state => {
      return state.todos.filter(todo => todo.done)
    }
  },
  mutations: {
    //更改state状态的唯一方法，也就是说无法通过组建当中的方法去修改state状态
    /**
     * 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。Vuex 中的 mutation 非常类似于事件：
     * 每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。
     * 这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数：
     * **/
    increment (state) {
      state.count ++;
    }
  }
})
