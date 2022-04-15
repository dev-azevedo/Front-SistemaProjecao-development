<template>
  <div id="app">
    <Nav />
    <div id="body" class="bg-secondary p-3">
      <router-view />
    </div>
  </div>
</template>

<script>
import Nav from "./components/navbar.vue";
export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#body {
  height: 90vh;
}
</style>
