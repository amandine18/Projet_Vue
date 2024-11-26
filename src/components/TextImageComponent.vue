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
    width: 20%;
    height: auto;
    margin-left: 12.5%;
    border: solid gainsboro;
    border-radius: 5px;
}
.paragraphe{
    font-size: 1.2rem;
    color: #333;
    width: 40%;
    margin: 1rem 5%;
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 5px 5px 30px grey
}

</style>