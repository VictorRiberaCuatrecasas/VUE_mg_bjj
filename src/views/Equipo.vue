<template>
  <div>
    <div>
      <v-img :src="require('@/assets/torneoEquipo.jpg')"></v-img>
      <p
        class="equipoIntroText"
      >Aquí podrás ver los miembros que forman el equipo MG en Catalunya y sus respectivos grados.</p>
      <!-- SWITCHES -->
      <div class="tableFilters">
        <v-checkbox
          v-model="filterBelts"
          class="tableSwitch"
          label="Blanco"
          value="Blanco"
          color="red darken-3"
        ></v-checkbox>
        <v-checkbox
          v-model="filterBelts"
          class="tableSwitch"
          label="Azul"
          value="Azul"
          color="red darken-3"
        ></v-checkbox>
        <v-checkbox
          v-model="filterBelts"
          class="tableSwitch"
          label="Morado"
          value="Morado"
          color="red darken-3"
        ></v-checkbox>
        <v-checkbox
          v-model="filterBelts"
          class="tableSwitch"
          label="Marrón"
          value="Marrón"
          color="red darken-3"
        ></v-checkbox>
        <v-checkbox
          v-model="filterBelts"
          class="tableSwitch"
          label="Negro"
          value="Negro"
          color="red darken-3"
        ></v-checkbox>
      </div>
      <v-select
        style="margin: 0px 20px 20px 15px"
        :items="filiales"
        label="Select"
        hide-details
        prepend-icon="home"
        single-line
        color="red darken-3"
      ></v-select>
      <div class="searchBox">
        <v-icon>search</v-icon>
        <input style="margin-left:10px" type="text" v-model="search" placeholder="Buscar miembro.." />
      </div>
      <ul v-for="cinturon in filterBelts" :key="cinturon">
        <li>{{cinturon}}</li>
      </ul>
      <!-- MEMBERS TABLE -->
      <div id="constrainer">
        <div class="scrolltable">
          <table class="header">
            <thead>
              <th>Nombre</th>
              <th>Cinturón</th>
              <th style="padding-left:1%">Filial</th>
            </thead>
          </table>
          <div class="body">
            <table style="margin-bottom:2em">
              <tbody>
                <tr
                  v-for="(persona, i) in /*searchFilter*/
                miembros.members "
                  :key="i"
                >
                  <td class="equipoDatacell">{{persona.name}}</td>
                  <td class="equipoDatacell">{{persona.belt}}</td>
                  <td class="equipoDatacell">{{persona.team}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- BELTS INFO -->
    <p
      class="equipoIntroText"
    >El sistema de cinturones en BJJ es muy apreciado, y por una buena razón. A diferencia de muchas otras artes marciales, donde las promociones de cinturones se pueden adquirir en períodos relativamente cortos y, a menudo, con muy pocos requisitos prácticos, en el sistema del jiu jitsu brasileño es bastante estricto y difícil de avanzar.</p>
    <br />
    <!-- BELTS CARDS -->
    <v-layout
      class="allCards"
      v-for="(card,i) in cards"
      :key="i"
      row
      style="margin-bottom:1.5em; opacity:0.7"
    >
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-img :src="card.src"></v-img>

          <v-card-title class="cardText" primary-title>
            <div class="cardHeader">
              <div class="headline">{{card.cabecera}}</div>
              <v-btn icon @click="show = !show">
                <v-icon
                  style="margin-bottom:20px"
                >{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
              </v-btn>
            </div>
          </v-card-title>

          <v-slide-y-transition>
            <v-card-text class="cardText" v-show="show">{{card.texto}}</v-card-text>
          </v-slide-y-transition>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      show: false,
      search: "",
      filterBelts: [],
      filiales: ["Mg Granollers", "Animal Bjj", "Internacional Gym", "Todas"],
      miembros: [],
      cards: [
        {
          cabecera: "Blanco",
          src: require("@/assets/whitebelt.jpg"),
          texto:
            "El cinturón blanco es el inicio para todos los estudiantes de BJJ. No tiene ningún requisito previo. Algunos instructores y otros profesionales de alto nivel piensan que el entrenamiento de un cinturón blanco debe enfatizar los escapes y el posicionamiento defensivo, ya que un cinturón blanco a menudo peleará desde posiciones inferiores, especialmente cuando se entrena con profesionales más experimentados. La mayoría de las academias además requerirán que un cinturón blanco trabaje para obtener un conjunto de habilidades completo, con un conocimiento de movimientos ofensivos básicos, como finalizaciones comunes y pases de guardia."
        },
        {
          cabecera: "Azul",
          src: require("@/assets/bluebelt.jpg"),
          texto:
            "La IBJJF requiere que un luchador de BJJ siga siendo un cinturón azul por un mínimo de 2 años. El cinturón azul es el segundo rango de adultos. En el nivel del cinturón azul, los estudiantes obtienen una amplia gama de conocimientos técnicos y dedican cientos de horas a aprender cómo implementar estos movimientos de manera eficiente. El cinturón azul es a menudo un rango en el que el estudiante aprende una gran cantidad de técnicas. La IBJJF requiere que un practicante tenga al menos 16 años de edad para recibir un cinturón azul, por lo que oficialmente ingresa al sistema de cinturones para adultos."
        },
        {
          cabecera: "Morado",
          src: require("@/assets/purplebelt.jpg"),
          texto:
            "La IBJJF requiere que un profesional siga siendo un cinturón morado por un mínimo de 1.5 años. El cinturón morado es el ranking intermedio de adultos en el jiu-jitsu brasileño. Un cinturón púrpura ha adquirido una gran cantidad de conocimiento, y generalmente se les considera calificados para instruir a los estudiantes de menor rango. En otras artes marciales, los estudiantes con una cantidad similar de experiencia a menudo son clasificados como cinturones de nivel negro (instructor)."
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
            "La IBJJF requiere que un profesional siga siendo un cinturón negro por un mínimo de 31 años. Al igual que con muchas otras artes marciales, el cinturón negro es el cinturón común más alto dentro del jiu-jitsu brasileño, lo que denota un nivel experto de habilidad técnica y práctica. Las estimaciones del tiempo requerido para alcanzar el rango varían, pero todos los titulares de este rango tienen miles de horas de experiencia. Los cinturones negros de jiu-jitsu brasileños a menudo se abordan dentro del arte como profesor, aunque algunas escuelas y organizaciones reservan este honorífico para los cinturones negros de mayor edad."
        }
      ],
      headers: [
        {
          text: "Miembros",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Cinturón", value: "cinturon" },
        { text: "Filial", value: "filial" }
      ]
    };
  },
  mounted() {
    axios
      .get("https://api.myjson.com/bins/13njgb")
      .then(respuesta => {
        this.miembros = respuesta.data;
        console.log(respuesta);
      })
      .catch(function(error) {
        console.log("Axios Error", error);
      });
  },
  methods: {},
  computed: {
    // searchFilter: function() {
    //   return this.miembros.filter(persona => {
    //     return persona.name.match(this.search);
    //   });
    // }
  }
};
</script>

<style>
/* TABLE */
.scrolltable {
  overflow-x: scroll;
  height: 100%;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  -webkit-flex-direction: column;
}
.scrolltable > .body {
  /*noinspection CssInvalidPropertyValue*/
  width: -webkit-fit-content;
  overflow-y: scroll;
  flex: 1;
  -webkit-flex: 1;
}
/* an outside constraint to react against */
#constrainer {
  width: 90%;
  height: 300px;
  margin: auto;
}
th {
  border-collapse: collapse;
  color: rgb(177, 25, 25);
  width: 30%;
  text-align: left;
}
thead {
  border-collapse: collapse;
  height: 5em;
  border: 5px solid rgb(177, 25, 25);
}
.equipoDatacell {
  width: 50em;
  border: none;
  border-bottom: 3px dashed rgb(177, 25, 25);
  height: 15px;
  background-color: rgba(177, 25, 25, 0.11);
  border-collapse: separate;
  text-align: left;
  padding-left: 1%;
}
/* FILTERS */
.tableFilters {
  display: inline-block;
}
.tableSwitch {
  margin-left: 15px;
  display: inline-block;
}
.v-text-field {
  padding-top: 0;
}
.searchBox {
  border-bottom: 1px solid black;
  display: block;
  margin: auto;
  width: 90%;
  margin-bottom: 2em;
}
/* TEXTS */
.equipoIntroText {
  text-align: justify;
  max-width: 90%;
  margin: auto;
  margin-top: 1em;
}
/* CARDS */
.cardHeader {
  display: flex;
  justify-content: space-between;
}
.allCards {
  width: 90%;
  margin: auto;
}
.cardText {
  background-color: gray;
}
/* .cardText:nth-child(1) {
  background-color: white !important;
} */
</style>
