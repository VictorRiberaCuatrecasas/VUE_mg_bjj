<template>
  <div>
    <v-img class="headerPics" :src="require('@/assets/cinturonesTop.jpg')" />

    <!-- BELTS INFO -->
    <p
      class="equipoIntroText"
    >El sistema de cinturones en BJJ es muy apreciado, y por una buena razón. A diferencia de muchas otras artes marciales, donde las promociones de cinturones se pueden adquirir en períodos relativamente cortos y, a menudo, con muy pocos requisitos prácticos, en el sistema del jiu jitsu brasileño es bastante estricto y difícil de avanzar.</p>
    <br />
    <!-- BELTS CARDS -->
    <v-layout
      class="allCards"
      v-for="(card,index) in cards"
      :key="index"
      row
      style="margin-bottom:1.5em; opacity:0.7"
    >
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-img :src="card.src"></v-img>

          <v-card-title :class="card.cabecera" primary-title>
            <div style="height:40px" class="cardHeader">
              <div class="headline">{{card.cabecera}}</div>
              <v-btn icon @click="arrow(index)">
                <v-icon
                  style="margin-bottom:20px;"
                  :class="card.cabecera"
                >{{ show != index ? 'keyboard_arrow_down':'keyboard_arrow_up' }}</v-icon>
              </v-btn>
            </div>
          </v-card-title>

          <v-slide-y-transition>
            <v-card-text v-html="card.texto" :class="card.cabecera" v-show="show == index"></v-card-text>
          </v-slide-y-transition>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: -1,

      cards: [
        {
          cabecera: "Blanco",
          src: require("@/assets/whitebelt.jpg"),
          texto:
            "El cinturón blanco es el inicio para todos los estudiantes de BJJ. No tiene ningún requisito previo. Algunos instructores y otros profesionales de alto nivel piensan que el entrenamiento de un cinturón blanco debe enfatizar los escapes y el posicionamiento defensivo, ya que un cinturón blanco a menudo peleará desde posiciones inferiores, especialmente cuando se entrena con profesionales más experimentados.<br><br> La mayoría de las academias además requerirán que un cinturón blanco trabaje para obtener un conjunto de habilidades completo, con un conocimiento de movimientos ofensivos básicos, como finalizaciones comunes y pases de guardia."
        },
        {
          cabecera: "Azul",
          src: require("@/assets/bluebelt.jpg"),
          texto:
            "La IBJJF requiere que un luchador de BJJ siga siendo un cinturón azul por un mínimo de 2 años. El cinturón azul es el segundo rango de adultos. En el nivel del cinturón azul, los estudiantes obtienen una amplia gama de conocimientos técnicos y dedican cientos de horas a aprender cómo implementar estos movimientos de manera eficiente. El cinturón azul es a menudo un rango en el que el estudiante aprende una gran cantidad de técnicas.<br><br> La IBJJF requiere que un practicante tenga al menos 16 años de edad para recibir un cinturón azul, por lo que oficialmente ingresa al sistema de cinturones para adultos."
        },
        {
          cabecera: "Morado",
          src: require("@/assets/purplebelt.jpg"),
          texto:
            "La IBJJF requiere que un profesional siga siendo un cinturón morado por un mínimo de 1.5 años. El cinturón morado es el ranking intermedio de adultos en el jiu-jitsu brasileño. Un cinturón púrpura ha adquirido una gran cantidad de conocimiento, y generalmente se les considera calificados para instruir a los estudiantes de menor rango. <br><br>En otras artes marciales, los estudiantes con una cantidad similar de experiencia a menudo son clasificados como cinturones de nivel negro (instructor)."
        },
        {
          cabecera: "Marrón",
          src: require("@/assets/brownbelt.jpg"),
          texto:
            "La IBJJF requiere que un profesional siga siendo un cinturón marrón por un mínimo de 1 año. Aparte de los cinturones excepcionales que se otorgan en los niveles más altos, el cinturón marrón es el cinturón de color de mayor rango en el jiu-jitsu brasileño. Cinturón marrón normalmente requiere al menos seis años de entrenamiento dedicado para lograrlo. A menudo se piensa como un tiempo para refinar técnicas."
        },
        {
          cabecera: "Negro",
          src: require("@/assets/blackbelt.jpg"),
          texto:
            "La IBJJF requiere que un profesional siga siendo un cinturón negro por un mínimo de 31 años. Al igual que con muchas otras artes marciales, el cinturón negro es el cinturón común más alto dentro del jiu-jitsu brasileño, lo que denota un nivel experto de habilidad técnica y práctica. Las estimaciones del tiempo requerido para alcanzar el rango varían, pero todos los titulares de este rango tienen miles de horas de experiencia.<br><br> Los cinturones negros de jiu-jitsu brasileños a menudo se abordan dentro del arte como profesor, aunque algunas escuelas y organizaciones reservan este honorífico para los cinturones negros de mayor edad."
        }
      ]
    };
  },
  methods: {
    arrow: function(index) {
      //
      if (this.show == index) {
        this.show = -1;
      } else {
        this.show = index;
      }
    }
  }
};
</script>


<style>
/* CARDS */
.cardHeader {
  display: flex;
  justify-content: space-between;
}
.allCards {
  width: 90%;
  margin: auto;
}
.Blanco {
  background-color: white;
  text-align: justify;
}
.Azul {
  background-color: rgba(43, 43, 172);
  text-align: justify;
}
.Morado {
  background-color: rgb(114, 17, 93);
  text-align: justify;
}
.Marrón {
  background-color: rgb(100, 49, 1);
  text-align: justify;
}
.Negro {
  background-color: black;
  color: white !important;
  text-align: justify;
}
/* .cardText:nth-child(1) {
  background-color: white !important;
} */
</style>
