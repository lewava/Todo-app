<template>
  <div id="app">
    <div class="app-container">
      <Header />
      <Todos />
      <AddTodo />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

export default {
  name: "App",
  components: { Header, Todos, AddTodo },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
}

.app-container{
  width: 350px;
  border: 1px solid rgb(182, 182, 182);
  border-radius: 5px;
  background: rgb(243, 243, 243);
}
</style>
