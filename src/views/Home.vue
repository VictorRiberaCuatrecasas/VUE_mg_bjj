<template>
  <div>
    <!-- NAVBAR -->

    <div class="test">
      <v-carousel delimiter-icon="stop" class="test3">
        <v-carousel-item>
          <v-img class="test1" :src="require('@/assets/didacmarc.jpg')"></v-img>
        </v-carousel-item>
        <v-carousel-item>
          <v-img class="test1" :src="require('@/assets/equipo.jpg')"></v-img>
        </v-carousel-item>
        <v-carousel-item>
          <v-img class="test1" :src="require('@/assets/graduacion1.jpg')"></v-img>
        </v-carousel-item>
        <v-carousel-item>
          <v-img class="test1" :src="require('@/assets/ferranpodio.jpg')"></v-img>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>



<script>
export default {};
</script>

<style>
.test {
  height: 500em;
}

.test1 {
  height: 100%;
  width: 100%;
}
.test3 {
  max-height: 20em;
}
</style>

