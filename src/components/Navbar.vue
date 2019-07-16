<template>
  <div class="stickyNav">
    <v-expansion-panel v-model="panel" expand>
      <v-expansion-panel-content class="toolbar" v-for="(item,i) in items" :key="i">
        <template v-slot:actions>
          <v-icon color="rgb(199, 184, 184)">$vuetify.icons.expand</v-icon>
        </template>
        <div slot="header">
          <v-icon class="toolbar menu-icon">menu</v-icon>
        </div>
        <v-card class="toolbar">
          <div @click="navCollapseColor()">
            <router-link v-bind:class="{selectedPage}" class="toolbar tool-items" to="/">Home</router-link>
          </div>
          <div @click="navCollapseColor()">
            <router-link
              v-bind:class="{selectedPage}"
              class="toolbar tool-items"
              to="/nosotros"
            >Nosotros</router-link>
          </div>
          <div @click="navCollapseColor()">
            <router-link
              v-bind:class="{selectedPage}"
              class="toolbar tool-items"
              to="/equipo"
            >Equipo</router-link>
          </div>
          <div @click="navCollapseColor()">
            <router-link
              v-bind:class="{selectedPage}"
              class="toolbar tool-items"
              to="/tecnicas"
            >Técnicas</router-link>
          </div>
          <div @click="navCollapseColor()">
            <router-link
              v-bind:class="{selectedPage}"
              class="toolbar tool-items"
              to="/galeria"
            >Galería</router-link>
          </div>
          <div @click="navCollapseColor()">
            <router-link
              v-bind:class="{selectedPage}"
              class="toolbar tool-items"
              to="/horarios"
            >Horarios</router-link>
          </div>
          <div @click="navCollapseColor()">
            <router-link v-bind:class="{selectedPage}" class="toolbar tool-items" to="/chat">Chat</router-link>
          </div>
          <div @click="navCollapseColor()">
            <router-link
              v-bind:class="{selectedPage}"
              class="toolbar tool-items"
              to="/contacto"
            >Contacto</router-link>
          </div>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-btn @click="login()" id="login" style="margin-top:2.6em" absolute top right color="black">
      <v-icon style="color:white">LOG IN</v-icon>
    </v-btn>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      panel: [],
      items: 1,
      selectedPage: false
    };
  },
  methods: {
    navCollapseColor() {
      this.panel = [];
      this.selectedPage = false;
      event.target.classList.add("selectedPage");
    },

    login: function() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(user => {
          console.log(user);

          if (user) {
            this.$store.commit("setUser", firebase.auth().currentUser);
          }
        });
      console.log("login");
    }
  }
};
</script>

<style>
</style>
