<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/hololives">Hololives</router-link> |
    <router-link to="/japsongs">Japan Songs</router-link> |
    <router-link to="/japanimes">Japan Animations</router-link> 
  </div>
  <TestingPage/>
</template>

<script>
import TestingPage from './components/TestingPage.vue'

export default {
  components:{
    TestingPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}


</style>
