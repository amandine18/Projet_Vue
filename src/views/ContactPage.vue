<template>
    <div id="contact">
      <p>contact</p>
      <FooterComponent />
    </div>
</template>

<script>
import FooterComponent from '../components/FooterComponent.vue';

  export default {
    name: 'ContactPage',
    components: {
      FooterComponent,
    }
  }
</script>

<style>
  #contact {
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