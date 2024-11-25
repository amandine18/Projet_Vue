<template>
  <div id="app">
    <NavigationComponent />
  </div>
</template>

<script>
import NavigationComponent from './components/NavigationComponent.vue';


export default {
  name: 'App',
  components: {
    NavigationComponent,
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
  margin: 0;
}
body{
  margin: 0;
}
</style>
