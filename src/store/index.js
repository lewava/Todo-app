import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [{
      title: 'Laga mat',
      complete: false
    },
    {
      title: 'Städa',
      complete: false
    },
    {
      title: 'Diska',
      complete: false
    },
    ]
  },
  getters: {
    getUncompletedTodos: state => {
      const uncompleted = state.todos.filter(todo => todo.complete === false);
      return uncompleted.length;
    }
  },
  mutations: {
    deleteTodo(state, payload) {
      state.todos.splice(payload, 1);
    },
    complete(state, payload) {
      state.todos[payload].complete = !state.todos[payload].complete;
    },
    addTodo(state, payload) {
      state.todos.push(payload);
    }
  },
  actions: {
    deleteTodo(context, payload) {
      context.commit("deleteTodo", payload);
    },
    complete(context, payload) {
      context.commit("complete", payload);
    },
    addTodo(context, payload) {
      context.commit("addTodo", payload);
    }
  },
  modules: {
  }
})
