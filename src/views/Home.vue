<template>
  <div>
    <!-- NAVBAR -->
    <div class="stickyNav">
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-content class="toolbar" ripple>
            <template v-slot:actions>
              <v-icon color="rgb(199, 184, 184)">$vuetify.icons.expand</v-icon>
            </template>
            <div slot="header">
              <v-icon class="toolbar menu-icon">menu</v-icon>
            </div>
            <v-card class="toolbar">
              <router-link class="toolbar tool-items selectedPage" to="/">Home</router-link>
              <router-link class="toolbar tool-items" to="/nosotros">Nosotros</router-link>
              <router-link class="toolbar tool-items" to="/equipo">Equipo</router-link>
              <router-link class="toolbar tool-items" to="/tecnicas">Técnicas</router-link>
              <router-link class="toolbar tool-items" to="/galeria">Galería</router-link>
              <router-link class="toolbar tool-items" to="/horarios">Horarios</router-link>
              <router-link class="toolbar tool-items" to="/chat">Chat</router-link>
              <router-link class="toolbar tool-items" to="/contacto">Contacto</router-link>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <h1 class="pages-titles">HOME</h1>
  </div>
</template>



<script>
export default {};
</script>

<style>
</style>

