<template>
  <div class="addTodo">
    <form @submit.prevent="add">
      <input type="text" placeholder="Add task..." v-model="todo" />
      <button>Add</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todo: "",
    };
  },
  methods: {
    add() {
      const todo = {
        title: this.todo,
        complete: false,
      };
      this.todo = "";
      this.$store.dispatch("addTodo", todo);
    },
  },
};
</script>

<style scoped>
form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
input {
  width: 82%;
  padding: 13px;
  border-radius: 3px;
  border: none;
  margin-bottom: 10px;
  font-weight: bold;
}
button {
  width: 90%;
  padding: 12px;
  border: 1px solid rgb(182, 182, 182);
  border-radius: 3px;
  margin-bottom: 20px;
  cursor: pointer;
  background: #42d349;
  font-weight: bold;
}
</style>
