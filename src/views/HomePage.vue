<template>
    <div id="home">
      <TextImageComponent 
        imageSrc="logo.png"
        imageAlt="Logo"
        text="Bienvenue sur notre site !"
      />
      <TextImageComponent 
        imageSrc="logo.png"
        imageAlt="Logo"
        text="Voici un texte !"
      />
    </div>
</template>
  
<script>
  import TextImageComponent from '../components/TextImageComponent.vue';
  
  
  export default {
    name: 'HomePage',
    components: {
      TextImageComponent,
    }
  }
</script>
  
<style>
  #home {
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