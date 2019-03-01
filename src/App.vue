<template>
  <div id="app">
  <router-link to="/tab">tab</router-link>
  <router-link to="/?id=10&name=aaa">首页</router-link>
  <router-link to="/123/iik">首页</router-link>
      <router-view/>
  </div>
</template>

<script>
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
