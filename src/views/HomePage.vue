<template>
    <div id="home">
      <TextImageComponent 
        imageSrc="img1.jpg"
        imageAlt="Logo"
        text="Notre entreprise se spécialise dans la création de sites web écologiques, alliant performance numérique et respect de l’environnement. Nous concevons des plateformes légères, optimisées pour réduire la consommation d’énergie, minimiser leur impact écologique et offrir une expérience utilisateur fluide. Chaque ligne de code est pensée pour consommer moins de ressources tout en maintenant un design moderne et fonctionnel, en phase avec les attentes des utilisateurs d’aujourd’hui."
      />
      <TextImageComponent 
        imageSrc="img2.jpg"
        imageAlt="Logo"
        text="En intégrant des pratiques durables, nous nous engageons à soutenir un web plus vert. Cela inclut l’utilisation de serveurs alimentés par des énergies renouvelables, la réduction des éléments superflus dans nos conceptions et la sensibilisation de nos clients à l’importance d’un numérique responsable. Avec nous, votre présence en ligne reflète non seulement votre identité, mais aussi votre engagement pour un avenir durable."
      />
      <FooterComponent />
    </div>
</template>
  
<script>
import FooterComponent from '../components/FooterComponent.vue';
import TextImageComponent from '../components/TextImageComponent.vue';
  
  
  export default {
    name: 'HomePage',
    components: {
      TextImageComponent,
      FooterComponent
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