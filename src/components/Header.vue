<template>
  <div class="container">
    <img src="@/assets/Stekpanna.png" alt="Logo" />
    <h1>TEFLON</h1>
    <h6>När det inte fastnar</h6>
    <h4>
      Du har <span>{{ count }}</span> saker kvar att göra.
    </h4>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.getters.getUncompletedTodos;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
img {
  width: 150px;
  margin: 30px 0 6px 70px;
}
h1 {
  color: black;
}
h6 {
  font-size: 12px;
  color: rgb(75, 75, 75);
  font-weight: 600;
}
h4 {
  margin-top: 40px;
  font-weight: 400;
}
span {
  font-weight: bold;
}
</style>
