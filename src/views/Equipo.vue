<template>
  <div>
    <div>
      <v-img class="headerPics" :src="require('@/assets/torneoEquipo.jpg')" />
      <p class="equipoIntroText">
        Aquí podrás ver los miembros que forman el equipo MG en Catalunya y sus respectivos grados. Puedes ver más información sobre el sistema de cinturones
        <router-link to="/equipo/cinturones">aquí</router-link>.
      </p>
      <v-alert
        style="margin-top:2em"
        :value="true"
        color="error darken-4"
        icon="warning"
        outline
      >Información de testeo provisional.</v-alert>
      <!-- CHECKBOXES -->
      <div class="tableFilters">
        <v-checkbox
          v-model="filterBelts"
          class="tableSwitch"
          label="Blanco"
          value="blanco"
          color="red darken-3"
        ></v-checkbox>
        <v-checkbox
          v-model="filterBelts"
          class="tableSwitch"
          label="Azul"
          value="azul"
          color="red darken-3"
        ></v-checkbox>
        <v-checkbox
          v-model="filterBelts"
          class="tableSwitch"
          label="Morado"
          value="morado"
          color="red darken-3"
        ></v-checkbox>
        <v-checkbox
          v-model="filterBelts"
          class="tableSwitch"
          label="Marrón"
          value="marron"
          color="red darken-3"
        ></v-checkbox>
        <v-checkbox
          v-model="filterBelts"
          class="tableSwitch"
          label="Negro"
          value="negro"
          color="red darken-3"
        ></v-checkbox>
      </div>
      <v-select
        v-model="filterFiliales"
        style="margin: 0px 20px 20px 15px"
        :items="filiales"
        label="Filial"
        hide-details
        prepend-icon="home"
        single-line
        color="red darken-3"
      ></v-select>
      <div class="searchBox">
        <v-icon>search</v-icon>
        <input class="searchInput" type="text" v-model="search" placeholder="Buscar miembro.." />
      </div>

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
                <tr v-for="(persona, i) in  searchFilter" :key="i">
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
    <p></p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      search: "",
      filterFiliales: [],
      filterBelts: [],
      filiales: ["Mg Granollers", "Animal Bjj", "Internacional Gym", "Todas"],
      miembros: [],

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
      .get("https://api.myjson.com/bins/ko7lv")
      .then(respuesta => {
        this.miembros = respuesta.data.members.sort((a, b) =>
          a.belt > b.belt ? 1 : -1
        );
        console.log(respuesta);
      })
      .catch(function(error) {
        console.log("Axios Error", error);
      });
  },
  methods: {},
  computed: {
    searchFilter() {
      return this.miembros.filter(persona => {
        let busqueda = persona.name
          .toLowerCase()
          .includes(this.search.toLowerCase());
        let checkbox =
          this.filterBelts.includes(persona.belt) ||
          this.filterBelts.length == 0;
        let selectFilter =
          this.filterFiliales.includes(persona.team) ||
          this.filterFiliales.length == 0 ||
          this.filterFiliales == "Todas";
        return busqueda && checkbox && selectFilter;
      });
    }
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
  border: 5px dotted rgb(177, 25, 25);
}
.equipoDatacell {
  width: 50em;
  border: none;
  border-bottom: 3px dotted rgb(177, 25, 25);
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
  border-bottom: 1px dotted black;
  display: block;
  margin: auto;
  width: 90%;
  margin-bottom: 2em;
}
.searchInput {
  margin-left: 10px;
}
.searchInput:focus {
  outline: 1px dotted rgba(221, 22, 22, 0.61);
  padding-left: 1em;
}
/* TEXTS */
.equipoIntroText {
  text-align: justify;
  max-width: 90%;
  margin: auto;
  margin-top: 1em;
  margin-bottom: 1em;
  border: 1.5px dotted gray;
  padding: 0 3px 0 3px;
  -webkit-animation-duration: 1.5s;
  animation-duration: 1.5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  animation-name: fadeInUp;
  -webkit-animation-name: fadeInUp;
}

@-webkit-keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(400px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
