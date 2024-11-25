<template>
    <div class="container">
        <p class="paragraphe">{{ text }}</p>
        <img :src="require(`@/assets/${imageSrc}`)" :alt="imageAlt" class="image"/>
    </div>
</template>


<script>
export default {
  name: 'TextImageComponent',
  props: {
    imageSrc: {
        type: String,
        required: true
    },
    imageAlt: {
        type: String,
        default: "Image"
    },
    text: {
        type: String,
        required: true
    }
  },
}
</script>


<style>
.container{
    display: flex;
    align-items: center;
    text-align: center;
    margin-top: 2rem;
}
.image{
    max-width: 20%;
    height: auto;
    margin-left: 15%;
}
.paragraphe{
    font-size: 1.2rem;
    color: #333;
    width: 50%;
    margin: 1rem 0;
}

</style>