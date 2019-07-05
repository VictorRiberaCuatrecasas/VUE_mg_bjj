<template>
<!--buscador-->
<v-flex xs12 sm12 offset-sm3>
<v-flex xs12 sm12 class="moreOpacity buscador" fluid width="100">

<v-text-field v-model="search" append-icon="search" single-line hide-details class="mx-2"</
v-text-field>
</v-flex>
<v-flex xs12 sm12 class="moreOpacity buscador" fluid width="100">
<v-layout row wrap xs12 sm12 class="mx-0 mb-4" fluid width="100%">
<v-layout xs4 sm4 style="float:left" width="100%" class="moreOpacity buscador">
<v-switch
xs4
sm12
class="mt-1"
v-model="filterWhales"
label="Whales"
color="indigo darken-3"
value="Whales"
hide-details

</
v-switch>
</v-layout>
<v-layout xs4 sm12 style="float:left" width="100%" class="moreOpacity buscador">
<v-switch
xs4
class="mt-1 mx-0"
v-model="filterWhales"
label="Dolphins"
color="indigo darken-3"
value="Dolphins"
hide-details

</
v-switch>
</v-layout>
<v-layout xs4 sm12 style="float:left" width="100%" class="moreOpacity buscador">
<v-switch
xs4
sm4
class="mt-1 mx-0"
v-model="filterWhales"
label="Seals"
color="indigo darken-3"
value="Seals"
hide-details

</
v-switch>
</v-layout>
</v-layout>
</v-flex>

<!--Construyo la card-->
<v-card
class="ma-2 my-4 semi-transparent"
v-for="(specie, index) in searchField"
:key="specie.AcceptedCommonName"
>

<v-img :src="specie.image" max-height="170px" width="100%" class="thumbnail hidden-md-and-up"</
v-img>
<v-img
:src="specie.image"
max-height="240px"
width="100%"
class="thumbnail hidden-md-and-down"

</
v-img>

<v-card-title primary-title class="moreOpacity">
<h3 class="headline mb-0">{{specie.AcceptedCommonName}}</h3>

<v-flex v-show="show == index" style="width:100%">
<v-flex xs12 sm6>
<v-layout class="mt-2">
<p>Scientific Name:</p>
<h4>{{specie.ScientificName}}</h4>
</v-layout>

<!-- <td>{{specie.image}}uu</td> -->

<div v-show="specie.AlternateCommonName !== undefined">Alternative Common Name:</div>
<div v-for="sp in specie.AlternateCommonName" :key="sp.AlternateCommonName">
<ul class="pList">{{sp}}</ul>
</div>
</v-flex>
</v-flex>
</v-card-title>
<!-- Botones-->
<v-card-actions class="moreOpacity">
<v-btn flat color="blue">Share</v-btn>
<v-btn flat v-on:click="select(specie)" color="blue">Wiki Info</v-btn>

<router-link to="/Location" tag="button">
<v-icon flat color="blue" class="ml-5">remove_red_eye</v-icon>
</router-link>
<v-btn icon @click="arrow(index)">
<v-icon>{{ show != index ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
<!--Si se cumple show != index -> pasará lo primero. Sinó lo seguno-->
</v-btn>
</v-card-actions>
</v-card>
</v-flex>
</template>





<script>
import axios from "axios";
export default {
data() {
return {
dataSpecies: [],
search: "",
filterWhales: ["Whales", "Dolphins", "Seals"],
show: -1 // Le indicamos que será -1 de inicio (no hay ninguna card que sea -1). Por tanto al principio no se despliega.
};
},

methods: {
select: function(specie) {
// Función que pone los links
window.location = specie.url;
},
arrow: function(index) {
//
if (this.show == index) {
this.show = -1;
} else {
this.show = index;
}
}
// itemToShow == index;
},
mounted() {
axios // con axios uso arrow function con fetch no!
.get("https://api.myjson.com/bins/11rnpb")
.then(res => {
this.dataSpecies = res.data; // siempre se pone el .data
// console.log("Data:jhjh", this.dataSpecies);
// console.log(this.dataSpecies, "hellooou");
})

.catch(function(error) {
console.log("Error: ", error);
});
},
computed: {
searchField() {
return this.dataSpecies.filter(specie => {
let buscador =
specie.ScientificName.toLowerCase().includes(
this.search.toLowerCase()
) ||
specie.AcceptedCommonName.toLowerCase().includes(
this.search.toLowerCase()
);
let checkbox =
this.filterWhales.includes(specie.Group) ||
this.filterWhales.length == 0;

return buscador && checkbox;
});
}
}
};
</script>