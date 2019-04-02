<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Home from "@/views/Home";
export default {
  name: "app",
  components: {
    appHome: Home
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
