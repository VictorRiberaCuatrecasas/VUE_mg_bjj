<template>
  <div>
    <LightGallery :images="images" :index="index" :disable-scroll="true" @close="index = null" />
    <ul class="galleryFlex" style="padding-left: 0">
      <li
        class="liGaleria"
        v-for="(thumb, thumbIndex) in thumbnails"
        :key="thumbIndex"
        @click="index = thumbIndex"
      >
        <v-lazy-image class="galeriaImg" :src="thumb" />
      </li>
    </ul>
  </div>
</template>

<script>
import { LightGallery } from "vue-light-gallery";

export default {
  components: {
    LightGallery
  },
  data() {
    return {
      thumbnails: [
        require("@/assets/galeria/pic1.jpg"),
        require("@/assets/galeria/pic2.jpg"),
        require("@/assets/galeria/pic3.jpg"),
        require("@/assets/galeria/pic4.jpg"),
        require("@/assets/galeria/pic5.jpg"),
        require("@/assets/galeria/pic6.jpg"),
        require("@/assets/galeria/pic7.jpg"),
        require("@/assets/galeria/pic8.jpg"),
        require("@/assets/galeria/pic9.jpg"),
        require("@/assets/galeria/pic10.jpg"),
        require("@/assets/galeria/pic11.jpg"),
        require("@/assets/galeria/pic12.jpg"),
        require("@/assets/galeria/pic13.jpg"),
        require("@/assets/galeria/pic14.jpg"),
        require("@/assets/galeria/pic15.jpg"),
        require("@/assets/galeria/pic16.jpg"),
        require("@/assets/galeria/pic17.jpg"),
        require("@/assets/galeria/pic18.jpg"),
        require("@/assets/galeria/pic19.jpg"),
        require("@/assets/galeria/pic20.jpg"),
        require("@/assets/galeria/pic21.jpg"),
        require("@/assets/galeria/pic22.jpg"),
        require("@/assets/galeria/pic23.jpg"),
        require("@/assets/galeria/pic24.jpg"),
        require("@/assets/galeria/pic25.jpg"),
        require("@/assets/galeria/pic26.jpg"),
        require("@/assets/galeria/pic27.jpg"),
        require("@/assets/galeria/pic28.jpg"),
        require("@/assets/galeria/pic29.jpg"),
        require("@/assets/galeria/pic30.jpg"),
        require("@/assets/galeria/pic31.jpg"),
        require("@/assets/galeria/pic32.jpg"),
        require("@/assets/galeria/pic33.jpg"),
        require("@/assets/galeria/pic34.jpg"),
        require("@/assets/galeria/pic35.jpg"),
        require("@/assets/galeria/pic36.jpg"),
        require("@/assets/galeria/pic37.jpg"),
        require("@/assets/galeria/pic38.jpg"),
        require("@/assets/galeria/pic39.jpg"),
        require("@/assets/galeria/pic40.jpg"),
        require("@/assets/galeria/pic41.jpg"),
        require("@/assets/galeria/pic42.jpg"),
        require("@/assets/galeria/pic43.jpg"),
        require("@/assets/galeria/pic44.jpg"),
        require("@/assets/galeria/pic45.jpg"),
        require("@/assets/galeria/pic46.jpg"),
        require("@/assets/galeria/pic47.jpg"),
        require("@/assets/galeria/pic48.jpg"),
        require("@/assets/galeria/pic49.jpg"),
        require("@/assets/galeria/pic50.jpg"),
        require("@/assets/galeria/pic51.jpg"),
        require("@/assets/galeria/pic52.jpeg"),
        require("@/assets/galeria/pic53.jpeg"),
        require("@/assets/galeria/pic54.jpeg"),
        require("@/assets/galeria/pic55.jpeg"),
        require("@/assets/galeria/pic56.jpeg"),
        require("@/assets/galeria/pic57.jpeg"),
        require("@/assets/galeria/pic58.jpeg"),
        require("@/assets/galeria/pic59.jpeg"),
        require("@/assets/galeria/pic60.jpeg"),
        require("@/assets/galeria/pic61.jpeg"),
        require("@/assets/galeria/pic62.jpeg"),
        require("@/assets/galeria/pic63.jpeg"),
        require("@/assets/galeria/pic64.jpeg"),
        require("@/assets/galeria/pic65.jpeg"),
        require("@/assets/galeria/pic66.jpeg"),
        require("@/assets/galeria/pic67.jpeg"),
        require("@/assets/galeria/pic68.jpeg"),
        require("@/assets/galeria/pic69.jpeg"),
        require("@/assets/galeria/pic70.jpeg"),
        require("@/assets/galeria/pic71.jpeg"),
        require("@/assets/galeria/pic72.jpeg"),
        require("@/assets/galeria/pic73.jpeg"),
        require("@/assets/galeria/pic74.jpeg"),
        require("@/assets/galeria/pic75.jpeg"),
        require("@/assets/galeria/pic76.jpeg"),
        require("@/assets/galeria/pic77.jpeg"),
        require("@/assets/galeria/pic78.jpeg"),
      ],
      images: [
        {
          title: "",
          url: require("@/assets/galeria/pic1.jpg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic2.jpg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic3.jpg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic4.jpg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic5.jpg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic6.jpg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic7.jpg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic8.jpg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic9.jpg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic10.jpg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic11.jpg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic12.jpg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic13.jpg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic14.jpg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic15.jpg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic16.jpg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic17.jpg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic18.jpg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic19.jpg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic20.jpg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic21.jpg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic22.jpg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic23.jpg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic24.jpg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic25.jpg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic26.jpg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic27.jpg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic28.jpg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic29.jpg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic30.jpg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic31.jpg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic32.jpg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic33.jpg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic34.jpg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic35.jpg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic36.jpg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic37.jpg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic38.jpg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic39.jpg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic40.jpg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic41.jpg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic42.jpg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic43.jpg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic44.jpg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic45.jpg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic46.jpg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic47.jpg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic48.jpg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic49.jpg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic50.jpg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic51.jpg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic52.jpeg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic53.jpeg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic54.jpeg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic55.jpeg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic56.jpeg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic57.jpeg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic58.jpeg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic59.jpeg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic60.jpeg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic61.jpeg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic62.jpeg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic63.jpeg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic64.jpeg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic65.jpeg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic66.jpeg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic67.jpeg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic68.jpeg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic69.jpeg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic70.jpeg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic71.jpeg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic72.jpeg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic73.jpeg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic74.jpeg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic75.jpeg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic76.jpeg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic77.jpeg")
        },
        {
          title: "",
          url: require("@/assets/galeria/pic78.jpeg")
        }
      ],
      index: null
    };
  }
};
</script>

<style>
/* ALL LAZY IMAGES FADE IN */
.v-lazy-image {
  opacity: 0;
  transform: translate3d(0, 50%, 0);
  transition: opacity 1.5s, transform 1.5s;
}
.v-lazy-image-loaded {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
.liGaleria {
  list-style: none;
}
.galeriaImg {
  width: 100px;
  height: 100px;
  margin: 5px 2.5px 0 2.5px;
  border: 3px solid white;
  cursor: pointer;

  border-radius: 10px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.801);
}
.galleryFlex {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
