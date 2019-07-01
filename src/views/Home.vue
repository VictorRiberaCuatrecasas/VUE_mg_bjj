<template>
  <div>
    <!-- NAVBAR -->

    <div class="test">
      <v-carousel hide-delimiters class="carouselDiv">
        <v-carousel-item class="carouselImage" v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
      </v-carousel>
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
          src: require("@/assets/victorferran.jpg")
        },
        {
          src: require("@/assets/jacare.jpg")
        },
        {
          src: require("@/assets/cesar.jpg")
        },
        {
          src: require("@/assets/ferranainoa.jpg")
        },
        {
          src: require("@/assets/didacmarc1.jpg")
        },
        {
          src: require("@/assets/victor2.jpg")
        },
        {
          src: require("@/assets/marc.jpg")
        },
        {
          src: require("@/assets/ainoa1.jpg")
        },
        // {
        //   src: require("@/assets/marsal.jpg")
        // },
        {
          src: require("@/assets/mestrevictor.jpg")
        },
        {
          src: require("@/assets/mestre.jpg")
        },
        {
          src: require("@/assets/pacouri.jpg")
        },
        {
          src: require("@/assets/kevin.jpg")
        },
        {
          src: require("@/assets/pedro.jpg")
        },
        {
          src: require("@/assets/polaida.jpg")
        },
        {
          src: require("@/assets/victordavid.jpg")
        },
        {
          src: require("@/assets/victor1.jpg")
        }
      ]
    };
  }
};
</script>

<style>
.carouselImage {
  width: 100%;
}
.carouselDiv {
  height: 100%;
}
</style>

