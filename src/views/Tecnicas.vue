<template>
  <div>
    <v-img
      class="headerPics"
      style="margin-bottom:1em; "
      :src="require('@/assets/tecnicasmain.png')"
    />
    <p class="equipoIntroText">
      El jiu-jitsu brasileño consiste básicamente en llevar a un oponente al suelo, por medio de un derribo, barrido, segado o un lanzamiento con el fin de establecer una lucha de agarres o grappling, utilizando diferentes técnicas, ya sean sumisiones, luxaciones o estrangulaciones, y someterlo.
      <br />
      <br />Por lo tanto las ventajas que puede tener un oponente más grande en pie, como un mayor alcance, un mayor peso, y ataques más poderosos, son anuladas en gran parte cuando se lucha en el suelo.
      <br />
      <br />A continuación, os ofrecemos una amplia gama de técnicas divididas en los apartados de Derribo, Pasaje y Guardia.
    </p>
    <v-alert
      style="margin-top:2em"
      :value="true"
      color="error darken-4"
      icon="warning"
      outline
    >Pendiente de subida de videos.</v-alert>
    <!-- PANELS -->
    <!-- ARRIBA -->
    <v-expansion-panel popout>
      <v-expansion-panel-content class="skillPanels">
        <template v-slot:header>
          <div>
            <strong>DERRIBO / PIE</strong>
          </div>
        </template>
        <v-card style="background-color:#909090" v-for="(video,i) in vpie" :key="i">
          <iframe :src="video.youtube" width="100%" height frameborder="0" allowfullscreen>
            <br />
          </iframe>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <!-- PASAJE -->
    <v-expansion-panel popout>
      <v-expansion-panel-content class="skillPanels">
        <template v-slot:header>
          <div>
            <strong>PASAJE / ARRIBA</strong>
          </div>
        </template>
        <v-card style="background-color:#909090" v-for="(video,i) in varriba" :key="i">
          <iframe :src="video.youtube" width="100%" height frameborder="0" allowfullscreen>
            <br />
          </iframe>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <!-- GUARDIA -->
    <v-expansion-panel popout>
      <v-expansion-panel-content class="skillPanels">
        <template v-slot:header>
          <div>
            <strong>GUARDIA / ABAJO</strong>
          </div>
        </template>
        <v-card style="background-color:#909090" v-for="(video,i) in vabajo" :key="i">
          <iframe :src="video.youtube" width="100%" height frameborder="0" allowfullscreen>
            <br />
          </iframe>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vpie: [
        {
          youtube: "https://www.youtube.com/embed/R1P0_du1lQc"
        },
        {
          youtube: "https://www.youtube.com/embed/QbeHZ4ZEPC0"
        },
        {
          youtube: "https://www.youtube.com/embed/Sg5lOv1Eqpc"
        }
      ],
      varriba: [
        {
          youtube: "https://www.youtube.com/embed/6rhDHWFrOBk"
        },
        {
          youtube: "https://www.youtube.com/embed/FYGhfnPVYn0"
        },
        {
          youtube: "https://www.youtube.com/embed/j9ef7uAsQE8"
        }
      ],
      vabajo: [
        {
          youtube: "https://www.youtube.com/embed/umAXUOqdfw0"
        },
        {
          youtube: "https://www.youtube.com/embed/PpoUnZbP0LM"
        },
        {
          youtube: "https://www.youtube.com/embed/iUu6ZA5M9GY"
        }
      ]
    };
  }
};
</script>

<style>
.skillPanels {
  margin-bottom: 1em;
  background-color: gray !important;
}
</style>
