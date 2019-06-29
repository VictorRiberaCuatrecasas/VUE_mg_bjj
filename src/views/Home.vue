<template>
  <div>
    <!-- NAVBAR -->

    <div class="test">
      <v-carousel delimiter-icon="stop" class="carouselDiv">
        <v-carousel-item class="carouselImage" v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
      </v-carousel>
      <p>tessdfsfdsdfst</p>
    </div>
  </div>
</template>
<!--HACER UN V-FOR PONER POSITION ABSOLUTE TEXTO ENCIMA IMAGES, PONER DATA CON TEXT-->

<script>
export default {
  data() {
    return {
      items: [
        {
          src: require("@/assets/didacmarc.jpg")
        },
        {
          src: require("@/assets/equipo.jpg")
        },
        {
          src: require("@/assets/graduacion1.jpg")
        },
        {
          src: require("@/assets/ferranpodio.jpg")
        },
        {
          src: require("@/assets/ferranainoa.jpg")
        }
      ]
    };
  }
};
</script>

<style>
.carouselImage {
  height: 20em;
  width: 100%;
}
.carouselDiv {
  max-height: 20em;
}
</style>

