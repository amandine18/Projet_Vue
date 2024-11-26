<template>
    <div id="api">
      <p>api</p>
      <FooterComponent />
    </div>
</template>

<script>
import FooterComponent from '../components/FooterComponent.vue';

  export default {
    name: 'ApiPage',
    components: {
      FooterComponent,
    }
  }
</script>

<style>
  #api {
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