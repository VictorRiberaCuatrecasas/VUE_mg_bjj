<template>
  <div>
    <v-lazy-image style="width:100%" :src="require('@/assets/nosotros.jpg')" />
    <p class="equipoIntroText">
      El equipo
      <strong>MG</strong> nació en Fortaleza (Brasil) en 1990 fruto de la unión de los luchadores Marcus
      Aurelio y Gigueto, es aquí donde Igor Lima entrenó hasta ser graduado a cinturón negro en
      2010. En 2015 Igor viajó a Granollers (España) para tomar las riendas de un equipo de bjj ya
      existente, que al cabo del tiempo, pasó a ser la filial central en España del equipo
      <strong>MG</strong>.
    </p>
    <div style="width:95%;margin:auto">
      <v-lazy-image class="logosImg" :src="require('@/assets/mglogo.png')" />
      <v-lazy-image class="logosImg" :src="require('@/assets/igorlogo.png')" />
      <v-lazy-image
        style="padding-left:10px"
        class="logosImg"
        :src="require('@/assets/animallogo.png')"
      />
      <v-lazy-image class="logosImg" :src="require('@/assets/internacionallogo.png')" />
    </div>
    <p class="equipoIntroText">
      Actualmente, el equipo conocido como
      <strong>MG Barcelona</strong>, consta de 3 filiales:
      <br />
      <br />
      <strong>MG Granollers</strong> (La Torreta): Dirigida por el profesor Igor Lima.
      <br />
      <strong>Animal BJJ</strong> (Cardedeu): Dirigida por los profesores Javi, Cesar y Miguel.
      <br />
      <strong>Internacional Gym</strong> (Canovelles): Dirigida por el profesor Edu Bigorda.
      <br />
      <br />El quipo ofrece gran cantidad de horarios para poder entrenar cada día ya sea de mañanas o
      tardes, en un ambiente muy familiar, envuelto en una filosofía de vida de
      <strong>disciplina y respeto.</strong>
    </p>
  </div>
</template>



<script>
export default {};
</script>


<style>
.logosImg {
  width: 150px;
  height: 150px;
}
</style>
