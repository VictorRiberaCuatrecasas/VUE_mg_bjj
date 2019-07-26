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
            <router-link v-bind:class="{selectedPage}" class="toolbar tool-items" to="/">
              <v-icon class="toolicon">home</v-icon>&nbsp;Home
            </router-link>
          </div>
          <div @click="navCollapseColor()">
            <router-link v-bind:class="{selectedPage}" class="toolbar tool-items" to="/nosotros">
              <v-icon class="toolicon">fitness_center</v-icon>&nbsp;Nosotros
            </router-link>
          </div>
          <div @click="navCollapseColor()">
            <router-link v-bind:class="{selectedPage}" class="toolbar tool-items" to="/equipo">
              <v-icon class="toolicon">supervised_user_circle</v-icon>&nbsp;Equipo
            </router-link>
          </div>
          <div @click="navCollapseColor()">
            <router-link v-bind:class="{selectedPage}" class="toolbar tool-items" to="/tecnicas">
              <v-icon class="toolicon">ondemand_video</v-icon>&nbsp;Técnicas
            </router-link>
          </div>
          <div @click="navCollapseColor()">
            <router-link v-bind:class="{selectedPage}" class="toolbar tool-items" to="/galeria">
              <v-icon class="toolicon">collections</v-icon>&nbsp;Galería
            </router-link>
          </div>
          <div @click="navCollapseColor()">
            <router-link v-bind:class="{selectedPage}" class="toolbar tool-items" to="/horarios">
              <v-icon class="toolicon">schedule</v-icon>&nbsp;Horarios
            </router-link>
          </div>
          <div @click="navCollapseColor()">
            <router-link v-bind:class="{selectedPage}" class="toolbar tool-items" to="/comentarios">
              <v-icon class="toolicon">rate_review</v-icon>&nbsp;Comentarios
            </router-link>
          </div>
          <div @click="navCollapseColor()">
            <router-link v-bind:class="{selectedPage}" class="toolbar tool-items" to="/contacto">
              <v-icon class="toolicon">contact_mail</v-icon>&nbsp;Contacto
            </router-link>
          </div>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-btn
      v-if="$store.state.user == null"
      @click="login(),ossAudio()"
      id="login"
      style="margin-top:2.6em"
      absolute
      top
      right
      color="black"
    >
      <v-icon style="color:white">LOG IN</v-icon>
    </v-btn>
    <v-btn
      v-if="$store.state.user"
      @click="logOut(), ossAudio()"
      id="login"
      style="margin-top:2.6em"
      absolute
      top
      right
      color="black"
    >
      <v-icon style="color:white">LOG OUT</v-icon>
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
    //para audio oss en log in i log out
    // ossAudio() {
    //   var audio = new Audio(require("../assets/audio/oss.mp3"));
    //   audio.play();
    // },

    // for sounds with URLS
    // playSound(sound) {
    //   if (sound) {
    //     var audio = new Audio(sound);
    //     audio.play();
    //   }
    // },

    navCollapseColor() {
      this.panel = [];
      this.selectedPage = false;
      event.target.classList.add("selectedPage");
    },
    logOut: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$store.state.user = null; // Sign-out successful.
        })
        .catch(function(error) {
          console.log("error loggout"); // An error happened.
        });
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
.toolicon {
  color: rgb(199, 184, 184) !important;
  pointer-events: none;
}
</style>
