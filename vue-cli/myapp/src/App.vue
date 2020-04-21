<template>
  <div id="app">
    <router-link to="a1">a1</router-link>
    <router-link to="a2">a2</router-link>
    <router-link to="a3">a3</router-link>
    <router-view/>
  </div>
</template>

<script>
    //导出
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
