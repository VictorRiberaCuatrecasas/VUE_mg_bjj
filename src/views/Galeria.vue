<template>
  <div>
    <LightGallery :images="images" :index="index" :disable-scroll="true" @close="index = null" />
    <ul class="galleryFlex" style="padding-left: 0">
      <li
        class="liGaleria"
        v-for="(thumb, thumbIndex) in [
          'https://i.ibb.co/SPptW4r/pic1.jpg',
          'https://i.ibb.co/J5ztvwB/pic2.jpg',
          'https://i.ibb.co/p3xjjYk/pic3.jpg',
          'https://i.ibb.co/PjZ1H5T/pic4.jpg',
          'https://i.ibb.co/Zct2XqD/pic5.jpg',
          'https://i.ibb.co/k50dJCp/pic6.jpg',
          'https://i.ibb.co/QPM2dWw/pic7.jpg',
          'https://i.ibb.co/W3QwZPP/pic8.jpg',
          'https://i.ibb.co/zPNhd2b/pic9.jpg',
          'https://i.ibb.co/m08S9tn/pic10.jpg',
          'https://i.ibb.co/58FywQL/pic11.jpg',
          'https://i.ibb.co/SQbkqRh/pic12.jpg',
          'https://i.ibb.co/wyBZkvW/pic13.jpg',
          'https://i.ibb.co/b20FF3X/pic14.jpg',
          'https://i.ibb.co/NpyvCbf/pic15.jpg',
          'https://i.ibb.co/25z0s93/pic16.jpg',
          'https://i.ibb.co/YBNjnS7/pic17.jpg',
          'https://i.ibb.co/z41G06b/pic18.jpg',
          'https://i.ibb.co/Rvxt86V/pic19.jpg',
          'https://i.ibb.co/wrcQ35s/pic20.jpg',
          'https://i.ibb.co/prmZ14d/pic21.jpg',
          'https://i.ibb.co/6vWPhNs/pic22.jpg',
          'https://i.ibb.co/tpPDC1r/pic23.jpg',
          'https://i.ibb.co/6F42Zx5/pic24.jpg',
          'https://i.ibb.co/hYSSht8/pic25.jpg',
          'https://i.ibb.co/ByDZTcy/pic26.jpg',
          'https://i.ibb.co/16d2XmQ/pic27.jpg',
          'https://i.ibb.co/Y8H0KQv/pic28.jpg',
          'https://i.ibb.co/2W7Gn4W/pic29.jpg',
          'https://i.ibb.co/qx8KVKd/pic30.jpg',
          'https://i.ibb.co/RyHyKkv/pic31.jpg',
          'https://i.ibb.co/1RY0cZB/pic32.jpg',
          'https://i.ibb.co/HP5F4Mf/pic33.jpg',
          'https://i.ibb.co/YcPCc7M/pic34.jpg',
          'https://i.ibb.co/q0VbGKC/pic35.jpg',
          'https://i.ibb.co/30ry66z/pic36.jpg',
          'https://i.ibb.co/7vRw3vY/pic37.jpg',
          'https://i.ibb.co/7XdPTVg/pic38.jpg',
          'https://i.ibb.co/0h1nJhx/pic39.jpg',
          'https://i.ibb.co/0G0nNBH/pic40.jpg',
          'https://i.ibb.co/jHjkzRP/pic41.jpg',
          'https://i.ibb.co/WWt6VjT/pic42.jpg',
          'https://i.ibb.co/zP0fq7p/pic43.jpg',
          'https://i.ibb.co/2PMV28T/pic44.jpg',
          'https://i.ibb.co/JcdS63d/pic45.jpg',
          'https://i.ibb.co/gmkwW7v/pic46.jpg',
          'https://i.ibb.co/VD3tK1h/pic47.jpg',
           'https://i.ibb.co/4f7N4Z0/pic48.jpg',
          'https://i.ibb.co/72JWh4L/pic49.jpg',
          'https://i.ibb.co/mSfgGYW/pic50.jpg',
           'https://i.ibb.co/tcmGR06/pic51.jpg',
          
          

          
        ]"
        :key="thumbIndex"
        @click="index = thumbIndex"
      >
        <v-lazy-image class="galeriaImg" :src="thumb" />
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
import { LightGallery } from "vue-light-gallery";

export default {
  components: {
    LightGallery
  },
  data() {
    return {
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
  box-shadow: 2px 2px 4px rgba(240, 14, 52, 0.801);
}
.galleryFlex {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
