<template>
  <div>
    <v-layout style="margin-top:3em" row justify-center>
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
            color="error"
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
</template>

<script>
export default {
  data: () => ({
    dialog: false
  })
};
</script>

<style>
</style>
