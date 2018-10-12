<template>
  <div id="app">
    <li class="nav-item">
      <router-link class="nav-link" to="/home">Home</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/crimes">Crimes</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/contact">contact</router-link>
    </li>
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
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
