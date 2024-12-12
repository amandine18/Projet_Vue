<template>
    <div id="bonus">
      <BonusComponent />
      <FooterComponent />
    </div>
</template>

<script>
import BonusComponent from '../components/BonusComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';

export default {
    name: 'BonusPage',
    components: {
        BonusComponent,
        FooterComponent,
    }
}
</script>