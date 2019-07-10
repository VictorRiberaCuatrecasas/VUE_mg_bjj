<template>
  <div>
    <!-- CONTACT FORM -->
    <div class="formButton">
      <v-layout row justify-center>
        <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on }">
            <v-btn color="red darken-2" dark v-on="on">CONTÁCTANOS</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">CONTÁCTANOS</span>
            </v-card-title>
            <v-alert
              style="margin-top:2em"
              :value="true"
              color="error darken-1"
              icon="warning"
              outline
            >Temporalmente desabilitado.</v-alert>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm6 md4>
                    <v-text-field color="red darken-2" label="Nombre*" required></v-text-field>
                  </v-flex>

                  <v-flex xs12>
                    <v-text-field color="red darken-2" label="Email*" required></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <v-autocomplete
                      color="red darken-2"
                      :items="['MG Granollers', 'Animal Bjj', 'Internacional Gym']"
                      label="Filial a contactar"
                      multiple
                    ></v-autocomplete>
                  </v-flex>
                  <v-flex xs12>
                    <v-textarea color="red darken-2" label="Mensaje*" required></v-textarea>
                  </v-flex>
                </v-layout>
              </v-container>
              <small>*campo obligatorio</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red darken-1" flat @click="dialog = false">Cerrar</v-btn>
              <v-btn color="red darken-1" flat @click="dialog = false">Enviar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>
    </div>
    <!-- MG GRANOLLERS MAP -->
    <div class="contactInfo">
      <h2 style="margin-top:1em">MG Granollers</h2>
      <p>
        <strong>Profesor:</strong> Igor Lima
      </p>
      <p>
        &#x260E
        692 51 35 55
      </p>
      <p>
        &#x1F4CD
        <em>c/ Font del Cargol, 16, 08430 La Torreta</em>
      </p>
    </div>
    <iframe
      class="contactMap"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2983.549663650317!2d2.29818531529674!3d41.60062417924522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4c7dfa9c07015%3A0xa2e518339ddafae7!2sDynamic!5e0!3m2!1ses!2ses!4v1561741068277!5m2!1ses!2ses"
      allowfullscreen
    ></iframe>
    <!-- ANIMAL BJJ MAP -->
    <div class="contactInfo">
      <h2 style="margin-top:1em">Animal BJJ (Cardedeu)</h2>
      <p>
        <strong>Profesores:</strong> Cesar, Miguel, Javi
      </p>
      <p>
        &#x1F4CD
        <em>c/ de la Mare de Déu del Pilar, 5, Cardedeu</em>
      </p>
    </div>
    <iframe
      class="contactMap"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11927.73396683662!2d2.361857!3d41.635569!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x79a6ea92885fb540!2sJeni+Sport!5e0!3m2!1ses!2ses!4v1561744139047!5m2!1ses!2ses"
      allowfullscreen
    ></iframe>
    <!-- INTERNACIONAL GYM MAP -->
    <div class="contactInfo">
      <h2 style="margin-top:1em">Internacional Gym (Canovelles)</h2>
      <p>
        <strong>Profesor:</strong> Eduardo Bigorda
      </p>
      <p>
        &#x1F4CD
        <em>c/ Indústria, 106, 08420 Canovelles,</em>
      </p>
    </div>
    <iframe
      style="margin-bottom:2em"
      class="contactMap"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11929.326592613184!2d2.2834188!3d41.6269623!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xecbca751aae542f5!2sINTERNACIONAL+GYM!5e0!3m2!1ses!2ses!4v1561744439176!5m2!1ses!2ses"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false
  })
};
</script>
<style scoped>
p {
  margin: 0;
}
</style>

<style>
.contactMap {
  width: 95%;
  height: 250px;
  margin-left: 2.5%;
  margin-right: 2.5%;
}
.contactInfo {
  margin-left: 2.5%;
}

.formButton {
  margin-top: 1em;
}
</style>
