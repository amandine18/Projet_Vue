<template>
    <div id="api">
      <ApiComponent />
      <FooterComponent />
    </div>
</template>

<script>
import ApiComponent from '../components/ApiComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';

  export default {
    name: 'ApiPage',
    components: {
      ApiComponent,
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