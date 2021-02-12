<template>
  <div class="wrapper">
    <div class="todos" v-for="(todo, index) in getTodos" :key="todo.name">
      <div
        class="todo"
        :style="!todo.complete ? 'background: #ddd' : 'background: #42d349'"
      >
        <p>{{ todo.title }}</p>
        <div>
          <img
            class="check"
            src="@/assets/Check.png"
            alt="checkmark"
            @click="done(index)"
          />
          <img
            class="bin"
            src="@/assets/delete.png"
            alt="delete"
            @click="deleteTodo(index)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: "Check.png",
    };
  },
  methods: {
    deleteTodo(index) {
      this.$store.dispatch("deleteTodo", index);
    },
    done(index) {
      this.$store.dispatch("complete", index);
    },
  },
  computed: {
    getTodos() {
      return this.$store.state.todos;
    },
  },
};
</script>

<style scoped>
.wrapper {
  padding: 20px 0 8px 0;
}
.todos {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.todo {
  width: 90%;
  height: 50px;
  margin-bottom: 6px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 10px;
}
p {
  font-size: 13px;
  font-weight: bold;
}
.check {
  width: 22px;
  margin-right: 8px;
  cursor: pointer;
}
.bin {
  width: 20px;
  cursor: pointer;
}
</style>
